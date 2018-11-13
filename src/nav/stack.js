import { createStackNavigator } from 'react-navigation';
import IntroJS from '../pages/introJS';
import IntoProgramming from '../pages/intoProgramming';
import Variables from '../pages/variables';
import Blocks from '../pages/blocks';
import HomePage from '../pages/homePage';




const Stack = createStackNavigator({
    Home:HomePage,
    Blocks:Blocks,
    IntoProgramming:IntoProgramming,
    IntroJS:IntroJS,
    Variables:Variables,
    
},{
    headerTransitionPreset:'fade-in-place',
    initialRouteName:'Home',
    headerMode:'none',
    
    
    
});

export default Stack;