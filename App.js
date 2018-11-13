
import React, {Component} from 'react';
import Splash from './src/components/splash';
import Tab from './src/nav/tab';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading : true
    }
  }

  
  componentDidMount(){
    setTimeout(() => this.setState({loading : false}),2000);
  }

  render() {
    if(this.state.loading){
    return (
      <Splash />
    );
  }
    else 
    {
      return (
        <Tab />
      );
    }
  }
}