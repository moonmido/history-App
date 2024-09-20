import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import back from "../Images/home.jpg";
export default function Home(navigation) {
    const Navigation = useNavigation();
    return ( 
    < ImageBackground source = { back } style = {{ width: "100%", height: "105%", bottom: "2%" } } >
        <View style = {{ marginTop: "70%" } } >
        <Text style = {{ textAlign: "center", fontSize: 45, fontWeight: "800", color: "white" } }> HISTORY 
        </Text>
             </View> 
             <View>
        <TouchableOpacity style = {{ marginTop: "55%", backgroundColor: "#edbe8e", width: "40%", height: "17%", marginLeft: "29%" } } onPress={()=>Navigation.navigate("Topics")}>
        <Text style = {{ textAlign: "center", fontSize: 16, fontWeight: "600", letterSpacing: -0.5, padding: "9%" } } > Get Started </Text> 
        </TouchableOpacity> 
        </View> 
        </ImageBackground>
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