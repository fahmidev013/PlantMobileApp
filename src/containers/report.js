


import React, { Component } from 'react';
import { 
    StyleSheet,
    FlatList,
    View,
    Image,
    Text,
    ActivityIndicator,
    Button,
    Platform,
    TouchableHighlight 
} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as Actions from '../actions'; //Import your actions
import SwipeCards from '../components/SwipeCards';
import Images from '../img/index';


class Report extends Component {

    static navigationOptions = {
        title: 'Daftar Inspeksi',
        

      };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        //this.props.getApiData(); 
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={{flex:1}}>
                    <SwipeCards/>
                    {/* <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}/> */}
                    
                    <TouchableHighlight style={styles.addButton}
                                        underlayColor='#ff7043' onPress={() => this.props.navigation.navigate('Inspeksi', {})}>
                        <Ionicons name={ "md-create" } size={24} color={"#fff"} />
                    </TouchableHighlight>
                </View>
            );
        }
    }


    renderItem({item, index}) {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(index) + 1)}{". "}{item.title}
                </Text>
                <Text style={styles.description}>
                    {item.artist}
                </Text>
                <Image source = {{ uri: item.image }} style={styles.imageView} />
            </View>
        )
    }

}


    function mapStateToProps(state, props) {
        return {
            loading: state.dataReducer.loading,
            data: state.dataReducer.data
        }
    }


    function mapDispatchToProps(dispatch) {
        return bindActionCreators(Actions, dispatch);
    }

export default connect(mapStateToProps, mapDispatchToProps)(Report);


const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    imageView: {
 
        width: '50%',
        height: 100 ,
        margin: 7,
        borderRadius : 7
     
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    },
    icon: {
        width: 26,
        height: 26 ,
    },


    addButton: {
        backgroundColor: '#00b281',
        borderColor: '#00b281',
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

});