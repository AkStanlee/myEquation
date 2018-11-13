import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends React.Component {
render()
     {
       return (
              <View style={styles.container}>
              <TouchableOpacity onPress={this.props.goBack}><Icon name='keyboard-backspace' size={30} style={{paddingLeft:17}} color='#F5FCFF' /></TouchableOpacity>
              <Text style={styles.content}>{this.props.title}</Text>
              </View>
       );
    }
  }

const styles = StyleSheet.create({

container:{
  height:12+'%',
  backgroundColor:'#F03',
  justifyContent:'flex-start',
  alignItems:'center',
  flexDirection:'row',
  borderBottomColor:'#e3e3e3',
  borderBottomWidth:3
},
content:{
  fontFamily:'NanumPenScript-Regular',
  color:'#F5FCFF',
  fontSize:25,
  marginLeft:8
}
});
