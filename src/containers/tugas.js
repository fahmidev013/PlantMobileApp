


import React, { Component } from 'react';
import { 
    StyleSheet,
    FlatList,
    View,
    Image,
    Text,
    ActivityIndicator 
} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import SwipeCards from '../components/SwipeCards';
import Images from '../img/index';


class Tugas extends Component {

    static navigationOptions = {
        title: 'History',    
         

      };

    constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.getApiData(); 
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
                    {/* <SwipeCards/> */}
                    
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tugas);


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

});