import React, { Component } from 'react';
import { AppRegistry,StyleSheet,View, Text, ScrollView, TouchableHighlight, ListView, Slider } from 'react-native';
import { ViewPager } from 'rn-viewpager';

import StepIndicator from 'react-native-step-indicator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const PAGES = ['Page 1','Page 2','Page 3'];

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize:40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#a4d4a5',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#a4d4a5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f'
}



const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
    const iconConfig = {
      name: 'feed',
      color: stepStatus === 'finished' ? '#ffffff' : '#fe7013',
      size: 15,
    };
    switch (position) {
      case 0: {
        iconConfig.name = 'shopping-cart';
        break;
      }
      case 1: {
        iconConfig.name = 'location-on';
        break;
      }
      case 2: {
        iconConfig.name = 'assessment';
        break;
      }
      case 3: {
        iconConfig.name = 'payment';
        break;
      }
      case 4: {
        iconConfig.name = 'track-changes';
        break;
      }
      default: {
        break;
      }
    }
    return iconConfig;
  };


export default class Inspeksi extends Component {

  constructor() {
    super();
    this.state = {
      currentPage:0,
      stepCount:3
    }
  }

  componentWillReceiveProps(nextProps,nextState) {
    if(nextState.currentPage != this.state.currentPage) {
      if(this.viewPager) {
        this.viewPager.setPage(nextState.currentPage)
      }
    }
  }




    _renderItem = (data) => {
        return (
        <View>
            
            <Text style={{paddingLeft: 20}}>{data}</Text>
            
            <View style={{ flex:1 , flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableHighlight style={styles.addButton}
                onPress={()=> {color: 'tomato'}}
                >
                <Text style={{alignSelf:'center'}}>BAIK</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.addButton}
                onPress={()=> {color: 'tomato'}}
                >
                <Text style={{alignSelf:'center'}}>SEDANG</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.addButton}
                onPress={()=> {color: 'tomato'}}
                >
                <Text style={{alignSelf:'center'}}>KURANG</Text>
            </TouchableHighlight>

        </View>

        </View>
        
        )    
    }



  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2  });
    const perawatan = ds.cloneWithRows([
        "Piringan",
        "Pasar Pikul",
        "TPH",
        "Gawangan",
        "Prunning",
        "Titi Panen"
      ])
    
      const pemupukan = ds.cloneWithRows([
        "Sistem Penaburan",
        "Kondisi Pupuk"
      ])
    return (
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator stepCount={this.state.stepCount} customStyles={firstIndicatorStyles} currentPosition={this.state.currentPage} labels={["Pilih Lokasi","Kondisi Baris","Summary"]} />
        </View>
        
        <ViewPager
          style={{flexGrow:1}}
          ref={(viewPager) => {this.viewPager = viewPager}}
          onPageSelected={(page) => {this.setState({currentPage:page.position})}}
          >

               
                <View >

                <ScrollView>


                        <Text style={styles.sectionHeader}>Perawatan</Text> 
                    <ListView
                        dataSource={ perawatan }
                        renderRow={ (data) => this._renderItem(data) }         
                    />

                <Text style={styles.sectionHeader}>Pemupukan</Text> 
                    <ListView
                        dataSource={ pemupukan }
                        renderRow={ (data) => this._renderItem(data) }  
                      
                    />
              

                </ScrollView>

            </View>    
          </ViewPager>
      </View>
    );
  }

  renderViewPagerPage = (data) => {
    return(<View style={styles.page}>
      <Text>{data}</Text>
    </View>)
  }

  renderStepIndicator = params => (
    <MaterialIcon {...getStepIndicatorIconConfig(params)} />
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    stepIndicator: {
      marginVertical:50,
    },
    page: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    addButton: {
        //height: 66, 
        flexGrow: 1,
        backgroundColor: '#00b281',
        borderColor: '#00b281',
        borderWidth: 1,
        height: 30,
        borderRadius: 40 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        // position: 'absolute',
        // bottom: 20,
        // right: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // shadowOffset: {
        //     height: 1,
        //     width: 0
        // }
    },
    containerSec: {
        flex: 1,
        paddingTop: 22
       },
       sectionHeader: {
         paddingTop: 10,
         paddingLeft: 20,
         paddingRight: 10,
         paddingBottom: 10,
         fontSize: 18,
         marginBottom: 15,
         fontWeight: 'bold',
         backgroundColor: 'rgba(247,247,247,1.0)',
       },
       item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
  });