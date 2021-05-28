import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {creatBottomTabNavigator, createBottomTabNavigator} from 'react-navigation-tabs';
export default class App extends React.Component() {
  
  render(){
    return<AppContainer/>
    
    
  }
}
const TabNavigator=createBottomTabNavigator({
  transaction:{screen:transactionScreen},
  search:{screen:searchScreen}
})
const AppContanier=createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
