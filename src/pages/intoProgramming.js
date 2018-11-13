import React from 'react';
import { View,Image,Text,StyleSheet,ScrollView ,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/header';
import Loading from '../components/loading';
import firebase from 'react-native-firebase';

export default class IntoProgramming extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      connected : false,
      loading : null
    }
    this.ref = firebase.database().ref('IntoProgramming');
    
  }

  componentDidMount = () => { 
    this.ref.on('value', snapshot => {
        this.setState({loading:snapshot.val()})
    });
  }
  render(){
      /*if(this.state.connected)
      {
       data = (
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Icon name='portable-wifi-off' size={60} />
            <Text style={{fontSize:15,fontWeight:'bold',fontFamily:'monospace'}}>Oops! ,You're Offline</Text>
            <TouchableWithoutFeedback>
                <Text style={{color:'blue'}}>RETRY</Text>
            </TouchableWithoutFeedback>
          </View>
        );
    }
       else {
          data = (
            <ScrollView>
                <Text>Loaded content from Firebase firestore</Text>
          </ScrollView>);
        }
*/
       return (
         <View style={styles.container}>
              <Header 
                  goBack={()=> this.props.navigation.goBack()}
                  title='Into Programming'/>
                 <Text style={{alignSelf:'center'}}>{this.state.loading}</Text>
         </View>
       );
    }
  }

const styles = StyleSheet.create({
  container:{
     flex:1
}
});
