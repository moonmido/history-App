import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import back from "../Images/home.jpg";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts,Poppins_700Bold,Poppins_400Regular_Italic } from '@expo-google-fonts/poppins';
const {width,height} = Dimensions.get('window');



export default function Info_fig({route,navigation}) {
    const [fontsLoades] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular_Italic
    })
    const Navigation = useNavigation();
    return ( 
<ScrollView style={{width:width , height:'100%',backgroundColor:"#221f1f"}} showsVerticalScrollIndicator={false}>
<View style={{display:"flex",flexDirection:"row",marginTop:"15%",marginLeft:"7%"}}>
    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
    <FontAwesome6 name="bars-staggered" size={24} color="white" />
    </TouchableOpacity>
<Text style={{fontSize:18,color:"white",marginLeft:"24%",fontFamily:'Poppins_700Bold'}}>Who is he</Text>
</View>

<ImageBackground source={route.params.img_fig} style={{width:width , height:height*0.5,marginTop:"5%"}} >
<Text style={{textAlign:"center",marginTop:"60%",marginLeft:"5%",backgroundColor:"#c13636",color:"white",fontWeight:"800",width:width*0.3,fontSize:11}}>Who is he ? </Text>
<Text style={{marginTop:"10%",fontSize:22,color:"white",textAlign:"center",fontFamily:'Poppins_700Bold'}}>{route.params.name}</Text>
</ImageBackground>
<View style={{paddingBottom:"10%"}}>
<Text style={{color:"#bfbfbf",paddingTop:"5%",paddingLeft:"5%",paddingRight:"1%",textAlign:"left",fontFamily:'Poppins_400Regular_Italic',fontSize:13}}>{route.params.discription}</Text>
</View>

</ScrollView>
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