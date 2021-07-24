import React, { Component } from "react";
import Home from './HomeComponent';
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoCmponent";
import Constants  from "expo-constants";
import { View, Platform } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

const DirectoryNavigator = createStackNavigator(
  {
      Directory: { screen: Directory },
      CampsiteInfo: { screen: CampsiteInfo }
  }, 
  {
      initialRouteName: 'Directory',
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#5637DD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);
const HomeNavigator = createStackNavigator(
  {
      Home: { screen: Home },
      
  }, 
  {
      
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: '#5637DD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);

const mainNavigator = createDrawerNavigator(
    {
        Home: {screen: HomeNavigator},
        Directory: {screen: DirectoryNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
)

const AppNavigator = createAppContainer(mainNavigator);

class Main extends Component {
  render() {
      return (
          <View
              style={{
                  flex: 1,
                  paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
          }}>
              <AppNavigator />
          </View>
      );
  }
}



export default Main;
