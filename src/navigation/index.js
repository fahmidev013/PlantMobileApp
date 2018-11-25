
import { createStackNavigator, createBottomTabNavigator, TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Report from '../containers/report';
import React, { Component } from 'react';
import { Platform ,Image, View, StyleSheet, Button, Text, TouchableOpacity, Dimensions } from 'react-native';
import Images from '../img/index';
import Tugas from "../containers/tugas";
import Inspeksi from "../containers/inspeksi";

const {width} = Dimensions.get('window');

const AppNavigatorOne = createStackNavigator(
    {
        HomePage: Report
    }
);

const AppNavigatorTwo = createStackNavigator(
  {
      ReportPage: Tugas
  }
);

const TabviewpagerController = TabNavigator({
    Main: {
      screen: Report,
    },
    Tasklist: {
      screen: Tugas,
    },
  }, {

    initialRouteName: 'Main',
    animationEnabled: false,
    swipeEnabled: false,
    lazyLoad: true,
    tabBarOptions: {
      inactiveTintColor: '#555555', // active icon color
      activeTintColor: '#00b281',  
      indicatorStyle: {
        marginBottom: 7,
        marginLeft: (width / 4.6), 
        width: 25,
        height: '7%', 
        backgroundColor: '#00b281',
      },
      style: {
        tintColor: '#000',
        backgroundColor: '#ececec',
      },
    },
    
  });

  const Header = (props) => (
    <View style={{height: 50, justifyContent: 'flex-end'}}>
      <Text style={{fontFamily: 'dosis-bold', color: 'white', fontSize: 25}}>{props.judul}</Text>
    </View>
  );

  const ImageHeader = (props) => 
    (
      <View style={{ backgroundColor: '#eee' }}>
        <Image
          style={StyleSheet.absoluteFill}
          source={Images.header}
        />
        <Header titl={props} style={{ backgroundColor: 'transparent' }}/>
      </View>
    );
  

    const MailBtn = (props) => 
    (
      <TouchableOpacity
      onPress={''}
      style={{ paddingRight: 13, paddingLeft: 13 }}>
      <Ionicons name={props.direction === 'left' ? "ios-refresh" : "md-mail" } size={24} color={"#fff"} />
      </TouchableOpacity>
    )
    


const TabviewpagerContainer = StackNavigator(
  {
      Hommy: {
        screen: TabviewpagerController,
        navigationOptions : {
            title: 'Home',       
            headerRight: <MailBtn direction='right'/>,
            headerLeft: <MailBtn direction='left'/>,
            //header: (props) => <ImageHeader {...props} />, 
            //header: (props) => <ImageHeader titl='HOMEPAGE' />,
            headerStyle: {
                backgroundColor: '#00b281',
                },
                headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:16,
                color: '#ececec',
                width: '90%',
                textAlign: 'center',
            },
            
        },
      },
      
  }
);

const MyNav = createBottomTabNavigator(
    {
      Home: {
        screen: TabviewpagerContainer
      },
      Task: AppNavigatorTwo,
      Inspeksi: {
        screen: Inspeksi,
        navigationOptions: { 
          tabBarVisible: false  
        }       
      },
      Finding: AppNavigatorTwo,
      More: AppNavigatorOne
    },
    {
    
        navigationOptions: ({ navigation }) => ({
            
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = Images.tabicons.home;
            } else if (routeName === 'Task') {
              iconName = Images.tabicons.tugas;
            } else if (routeName === 'Inspeksi') {
                iconName = Images.tabicons.inspeksi;
            } else if (routeName === 'Finding') {
                iconName = Images.tabicons.finding;
            } else if (routeName === 'More') {
                  iconName = Images.tabicons.more;
            }
    
            return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            
          },
        }),
        tabBarOptions: {
          activeTintColor: '#00b281',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#ececec',
          },
        },
        
      }
  )

  
export default MyNav;

