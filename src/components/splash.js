import React from 'react';
import { View,Image,Text,StyleSheet } from 'react-native';

export default class Splash extends React.Component {
render()
     {
       return (
         <View style={style.container}>
           <Image
           style={{width:60,height:60}}
           source={require('../assets/img/btc.png')} />
           <View>
               <Text style={{fontSize:10,fontWeight:'bold', fontFamily:'monospace'}}>version 1.20</Text>
            </View>
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
