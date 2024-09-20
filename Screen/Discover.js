import React, { useState } from 'react';
import { View, Text, Dimensions,Image, ImageBackground,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';
import { useFonts,Poppins_700Bold,Poppins_400Regular_Italic,Poppins_600SemiBold,Poppins_300Light } from '@expo-google-fonts/poppins';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const{width,height} = Dimensions.get('window');


const date = [
{
  id : 1,
  name :"Casbah of Algiers",
  address : "Casbah, Algiers, Algeria",
  event : "The Casbah of Algiers was a major stronghold for the National Liberation Front (FLN) during the Algerian War of Independence. It was the site of many battles between Algerian freedom fighters and French forces. The labyrinthine streets and ancient buildings provided cover and strategic advantages for the revolutionaries.",
  img : "https://upload.wikimedia.org/wikipedia/commons/c/c3/The_Casbah_Of_Algiers.jpg"
},

{
  id : 2,
  name :"Oran's November 1st Square",
  address : "Place du 1er Novembre, Oran, Algeria",
  event : "This square is named after the start of the Algerian Revolution on November 1, 1954. It was a gathering place for demonstrations and is now a symbol of resistance and liberation.",
  img : "https://aathaar.net/public/storage//avatars/85813.jpg"
  },
  {
    id : 3,
    name :"The Chrea National Park",
    address : "Chréa, Blida Province, Algeria",
    event : "Chrea was another strategic area during the Algerian War of Independence. The dense forests and difficult terrain provided a haven for freedom fighters. It was the site of numerous skirmishes and battles.",
    img : "https://upload.wikimedia.org/wikipedia/commons/a/a0/Montagne_de_Chr%C3%A9a%2C.jpg"
    },
    {
      id : 4,
      name :"Museum of Mujahid",
      address : "Rue Mohamed Belouizdad Algiers, Algeria",
      event : "Chrea was another strategic area during the Algerian War of Independence. The dense forests and difficult terrain provided a haven for freedom fighters. It was the site of numerous skirmishes and battles.",
      img : "https://lh3.googleusercontent.com/p/AF1QipOGXM4hx7HfzHtkLirvAq1kTMPoyOT07fu8EEaP=s680-w680-h510"
      },


]







export default function Discover({navigation}) {
  const [fontsLoades] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_300Light
  
  
  })

  const [dot , setDot] = useState("");
  
  return (
    <View style={{backgroundColor:"#171413",height:"100%"}}>
            <View style={{display:"flex",flexDirection:"row",marginTop:"15%",marginLeft:"7%"}}>
    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
    <FontAwesome6 name="bars-staggered" size={24} color="white" />
    </TouchableOpacity>
<Text style={{marginLeft:"22%",fontSize:18,color:"white",fontFamily:'Poppins_700Bold'}}>DISCOVER</Text>
</View>

<FlatList 
data={date}
horizontal
style={{marginTop:height*0.13,height:height}}
pagingEnabled

renderItem={({item})=>(
<View style={{width:width,height:height}}>
  <ImageBackground source={{uri:item.img}} style={{width:width*0.8,height:height*0.6,marginLeft:width*0.09}}>
    <LinearGradient colors={["transparent","rgba(0,0,0,0.8)"]} style={{height:height*0.6}}>
      <Text style={{marginTop:height*0.38,marginLeft:"5%",color:"white",fontFamily:'Poppins_700Bold',fontSize:18,width:width*0.8}}>{item.name}</Text>
      <Text style={{color:"gray", marginLeft:"5%",marginTop:"3%",letterSpacing:1,fontFamily:'Poppins_400Regular_Italic',width:width*0.8}}>{item.address}</Text>
  </LinearGradient>
  </ImageBackground>

  </View>
)}

/>
<Text style={{textAlign:"center",fontSize:77,bottom:"5%",color:"white",transform:[{translateX:0}]}}>....</Text>
     </View>
  );
}
