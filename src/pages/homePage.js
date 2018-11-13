import React from 'react';
import { StyleSheet, Text,Image, View,TextInput,Button,ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/card';
import Splash from '../components/splash';

export default class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
  
     }
  }
  render() {
    const NAVIGATE = this.props.navigation;
    return (
    <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headText}>JS For Newbies</Text>
          <Icon name='search' size={25} style={{paddingLeft:4}} color='#3e2465' />
          <Icon name='share' size={23} style={{marginRight:17}} color='#3e2465' />
        </View>
        <ScrollView contentContainerStyle={styles.child}>
          <Card goto={() => NAVIGATE.navigate('IntoProgramming')}
                course='Into Programming'
                icon={<Icon name='code' size={45} color='#F03' />} />
          <Card goto={()=> NAVIGATE.navigate('IntroJS')}
                course='Introduction to JS'
                icon={<Icon name='http' color='#F03' size={35} />} />
          <Card goto={()=> NAVIGATE.navigate('Variables')}
                course='Variables & Data structure'
                icon={<Image source={require('../assets/img/folder.png')} style={{height:50,width:50,tintColor:'#F03'}}/>} />
          <Card goto={()=> NAVIGATE.navigate('Blocks')}
                course='Blocks'
                icon={<Image source={require('../assets/img/structure.png')}  style={{height:40,width:40,tintColor:'#F03'}}/>} />
          <Card course='Conditional Statements'
                icon={<Image source={require('../assets/img/condition.png')}  style={{height:40,width:40,tintColor:'#F03'}}/>} />
          <Card course='Loops'
          icon={<Image source={require('../assets/img/replay.png')}  style={{height:40,width:40,tintColor:'#F03'}}/>} />
          <Card course='Functions'
          icon={<Image source={require('../assets/img/enter.png')}  style={{height:40,width:40,tintColor:'#F03'}}/>} />
          <Card course='Arrays'
          icon={<Image source={require('../assets/img/array.png')}  style={{height:40,width:40,tintColor:'#F03'}}/>} />
          <Card course='Objects'
          icon={<Image source={require('../assets/img/target.png')}  style={{height:40,width:40,tintColor:'#F03'}}/>} />
          <Card course='ProtoType'
          icon={<Image source={require('../assets/img/check-list.png')}  style={{height:40,width:40,tintColor:'#F03'}}/>} />
        </ScrollView>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  child:{
    justifyContent:'center',
    alignItems:'center'
  },
  head:{
    height:12+'%',
    backgroundColor:'#F5FCFF',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    borderBottomColor:'#e3e3e3',
    borderBottomWidth:3
  },
  headText:{
    fontFamily:'NanumPenScript-Regular',
    color:'#F03',
    fontSize:28,
    marginLeft:17
  }
});