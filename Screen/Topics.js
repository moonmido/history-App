import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity,FlatList, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ScrollView } from 'react-native-gesture-handler';
import fig1 from "../Images/landing.jpg";
import { useFonts,Poppins_700Bold,Poppins_400Regular_Italic } from '@expo-google-fonts/poppins';

import fig2 from "../Images/revo.jpg";
import fig3 from "../Images/discover.jpg";
import AppLoading from 'expo-app-loading';

const {width,height} = Dimensions.get('window');
export default function Topics({navigation}) {

    const [fontsLoades] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular_Italic
    })
    const Navigation = useNavigation();
const data = [
{
    id : 1,
    title : "Figures",
    img : fig1
},
{
    id : 2,
    title : "Revolution",
    img : fig2,
},
{
    id : 3,
    title : "Discover",
    img : fig3,
},


];


    return ( 
<View showsVerticalScrollIndicator={false} style={{backgroundColor:"black",paddingBottom:100}}>
<View style={{display:"flex",flexDirection:"row",marginTop:"15%",marginLeft:"7%"}}>
    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
    <FontAwesome6 name="bars-staggered" size={24} color="white" />
    </TouchableOpacity>
<Text style={{marginLeft:"28%",fontSize:18,color:"white",fontFamily:'Poppins_700Bold'}}>TOPICS</Text>
</View>
<FlatList data={data} 
style={{marginTop:"10%"}}
showsVerticalScrollIndicator={false}
renderItem={({item})=>(
<View>
    <TouchableOpacity onPress={()=>{
        if(item.id == 1){
            
            Navigation.navigate("Figures");
        }else if(item.id ==2){
            Navigation.navigate("Revolution");
        }else Navigation.navigate("Discover");
    }}>
<ImageBackground source={item.img} style={{width:width,height:height*0.4}}>
    <Text style={{textAlign:"center",marginTop:"35%",fontSize:18,color:"white",letterSpacing:3,fontFamily:'Poppins_700Bold'}}>{item.title}</Text>
</ImageBackground>
</TouchableOpacity>
</View>
)}/>
</View>
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