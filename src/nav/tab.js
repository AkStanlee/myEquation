
import React from 'react';;
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Settings from '../pages/settings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Stack from './stack';



const Tab =  createMaterialBottomTabNavigator({
    Home:{screen:Stack,
    navigationOptions:{
        tabBarLabel:'Home',
        tabBarIcon:({tintColor}) => 
            <Icon name='home' size={20} color={tintColor} />
    }},
    Settings:{screen:Settings,
        navigationOptions:{
            tabBarLabel:'Settings',
            tabBarIcon:({tintColor}) =>
                <Icon name='settings' size={20} color={tintColor}/>
            
        }},
       Rate:{screen:Settings,
            navigationOptions:{
                tabBarLabel:'Rate Us',
                tabBarIcon:({tintColor}) => 
                    <Icon name='thumb-up' size={20} color={tintColor} />
        }}
}, {
    initialRouteName: 'Home',
    barStyle: {
         backgroundColor: '#F5FCFF',
         borderTopColor:'#e3e3e3',
         borderTopWidth:3
        },
        activeTintColor:'#F03',
        inactiveColor: '#3e2465',
        tabBarOptions:{

        }         
  });

export default Tab;