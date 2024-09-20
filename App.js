import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./Screen/Home";
import Topics from './Screen/Topics';
import Figures from './Screen/Figures';
import Revolution from './Screen/Revolution';
import Discover from './Screen/Discover';
import Info_fig from './Screen/Info_fig';
export default function App() {

    const Drawer = createDrawerNavigator();
    return ( 
<NavigationContainer>
<StatusBar  style='light'/>
<Drawer.Navigator initialRouteName='Discover'>
<Drawer.Screen  name='Home' component={Home} options={{drawerContentStyle:{backgroundColor:"black"}, headerShown:false,drawerActiveTintColor:"gold",drawerInactiveBackgroundColor:"black",drawerActiveBackgroundColor:"#37333332",drawerInactiveTintColor:"white"}}/>
<Drawer.Screen  name='Figures' component={Figures} options={{drawerContentStyle:{backgroundColor:"black"}, headerShown:false,drawerActiveTintColor:"gold",drawerInactiveBackgroundColor:"black",drawerActiveBackgroundColor:"#37333332",drawerInactiveTintColor:"white"}}/>
<Drawer.Screen  name='Topics' component={Topics} options={{drawerContentStyle:{backgroundColor:"black"}, headerShown:false,drawerActiveTintColor:"gold",drawerInactiveBackgroundColor:"black",drawerActiveBackgroundColor:"#37333332",drawerInactiveTintColor:"white"}}/>
<Drawer.Screen  name='Revolution' component={Revolution} options={{drawerContentStyle:{backgroundColor:"black"}, headerShown:false,drawerActiveTintColor:"gold",drawerInactiveBackgroundColor:"black",drawerActiveBackgroundColor:"#37333332",drawerInactiveTintColor:"white"}}/>
<Drawer.Screen  name='Discover' component={Discover} options={{drawerContentStyle:{backgroundColor:"black"}, headerShown:false,drawerActiveTintColor:"gold",drawerInactiveBackgroundColor:"black",drawerActiveBackgroundColor:"#37333332",drawerInactiveTintColor:"white"}}/>
<Drawer.Screen  name='Info_fig'  component={Info_fig} options={{drawerContentStyle:{backgroundColor:"black"}, headerShown:false,drawerInactiveBackgroundColor:"black",drawerActiveBackgroundColor:"black",drawerInactiveTintColor:"white",title:""}}/>



</Drawer.Navigator>


</NavigationContainer>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});