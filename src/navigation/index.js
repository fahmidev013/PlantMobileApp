
import { createStackNavigator, createBottomTabNavigator, TabNavigator, StackNavigator, TabBarBottom } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Report from '../containers/report';
import React, { Component } from 'react';
import { Platform ,Image, View, StyleSheet, Text } from 'react-native';
import Images from '../img/index';
import Tugas from "../containers/tugas";
import Inspeksi from "../containers/inspeksi";

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
      <Text style={{fontFamily: 'dosis-bold', color: 'white', fontSize: 5}}>fd</Text>
    </View>
  );

  const ImageHeader = (props) => 
    (
      <View style={{ backgroundColor: '#eee' }}>
        <Image
          style={StyleSheet.absoluteFill}
          source={require('../../assets/bg_header.png')}
        />
        
        <Header {...props} style={{ backgroundColor: 'transparent' }}/>
      </View>
    );
  

const TabviewpagerContainer = StackNavigator(
  {
      Hommy: {
        screen: TabviewpagerController,
        navigationOptions : {
            title: 'HOMEPAGE',   
            headerTitleStyle: { color: '#fff' },
            header: (props) => <ImageHeader {...props} />, 
            headerStyle: {
                backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
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
      Inspeksi: Inspeksi,
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

