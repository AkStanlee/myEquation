import React from 'react';
import {Text,Dimensions,View,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import CardView from 'react-native-cardview';


const screen =  Dimensions.get('window').width;

export default class Card extends React.Component{

  render(){
    return(
      <TouchableWithoutFeedback onPress={this.props.goto}>
        <CardView 
          cardElevation={10}
          cornerRaduis={5}
          cardMaxElevation={10}
          style={styles.cardView}>
          <View style={styles.card}>
                <View style={styles.course}><Text style={styles.courseTitle}>{this.props.course}</Text>
                </View>
                <View style={styles.goto}>
                {this.props.icon}
            </View>
        </View>
      </CardView>
      </TouchableWithoutFeedback>
      
    );
  }
}

const styles = StyleSheet.create({
  cardView:{
    width:screen,
    height:120
  },
  card:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  course:{
    flex:0.75,
    justifyContent:'center'
  },
  goto:{
    flex:0.25,
    borderLeftWidth:0.5,
    borderLeftColor:'#E3E3E3',
    height:90,
    alignItems:'center',
    justifyContent:'center'
    
  },
  courseTitle:{
    padding:20,
    fontFamily:'NanumPenScript-Regular',
    fontSize:24
  }
})