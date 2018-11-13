import React from 'react';
import { View,Image,Text,StyleSheet } from 'react-native';

export default class Variables extends React.Component {
render()
     {
       return (
         <View style={style.container}>
         <Text>Variables</Text>
         </View>
       );
    }
  }

const style = StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#f8f9fa'
}
});
