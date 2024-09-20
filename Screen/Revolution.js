import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity,FlatList, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ScrollView } from 'react-native-gesture-handler';
import back from '../Images/discoback.png';
import { useFonts,Poppins_700Bold,Poppins_400Regular_Italic,Poppins_600SemiBold,Poppins_300Light } from '@expo-google-fonts/poppins';

import gif from '../Images/gceA7e5ri.gif';
const {width,height} = Dimensions.get('window');
export default function Revolution({navigation}) {
  const [fontsLoades] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_300Light


})
const Navigation = useNavigation();

  return (
    <ImageBackground source={back} style={{width:width , height:"100%"}}>
<ScrollView style={{paddingBottom:100}} showsVerticalScrollIndicator={false}>
      <View style={{display:"flex",flexDirection:"row",marginTop:"15%",marginLeft:"7%"}}>
    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
    <FontAwesome6 name="bars-staggered" size={24} color="white" />
    </TouchableOpacity>
<Text style={{marginLeft:"20%",fontSize:18,color:"white",fontFamily:'Poppins_700Bold'}}>REVOLUTION</Text>
</View>
<View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:height*0.25}}>
  <Text style={{color:"#edbe8e",textAlign:"left",marginLeft:"2%",fontSize:205,fontFamily:'Poppins_600SemiBold'}}>01</Text>
<Text style={{color:"#edbe8e",marginTop:height*0.378,fontSize:22,fontFamily:'Poppins_600SemiBold'}}>/06</Text>
</View>
<View style={{marginTop:"-28%"}}>
  <Text style={{color:"white",textAlign:"left",marginLeft:"8.5%",fontSize:20,fontFamily:'Poppins_700Bold'}}>The Preparation and Planning Phase </Text>
<Text style={{color:"#9e9ea4",marginLeft:"8.5%"}}>1945-1954</Text>
</View>
<View style={{marginTop:"30%"}}>
<Text style={{color:"white",width:width*0.98,textAlign:"left",paddingLeft:"5%",fontFamily:'Poppins_400Regular_Italic'}}>After the end of World War II, Algerians began to push more aggressively for independence. The events of May 8, 1945, in Sétif, Guelma, and Kherrata, where thousands of Algerians were massacred by French colonial forces, marked a turning point. This period saw the emergence of political movements like the Algerian People's Party (PPA) and later the Movement for the Triumph of Democratic Liberties (MTLD), which advocated for independence. The FLN (National Liberation Front) was secretly formed in 1954 to coordinate the armed struggle.
</Text>
</View>
<View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:height*0.25}}>
  <Text style={{color:"#edbe8e",textAlign:"left",marginLeft:"2%",fontSize:175,fontFamily:'Poppins_600SemiBold'}}>02</Text>
<Text style={{color:"#edbe8e",marginTop:height*0.308,fontSize:22,fontFamily:'Poppins_600SemiBold'}}>/06</Text>
</View>
<View style={{marginTop:"-28%"}}>
  <Text style={{color:"white",textAlign:"left",marginLeft:"8.5%",fontSize:20,fontFamily:'Poppins_700Bold'}}>The Outbreak of the Revolution </Text>
<Text style={{color:"#9e9ea4",marginLeft:"8.5%"}}>November 1, 1954</Text>
</View>
<View style={{marginTop:"30%"}}>
<Text style={{color:"white",width:width*0.98,textAlign:"left",paddingLeft:"5%",fontFamily:'Poppins_400Regular_Italic'}}>The FLN launched the revolution on November 1, 1954, with a series of coordinated attacks against French military and civilian targets. This date, known as "Toussaint Rouge" or "Red All Saints' Day," marks the beginning of the Algerian War of Independence. The FLN’s manifesto called for the restoration of Algerian sovereignty and an end to French colonial rule.
</Text>
</View>

 {/* 3eme partie  */}


 <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:height*0.25}}>
  <Text style={{color:"#edbe8e",textAlign:"left",marginLeft:"2%",fontSize:175,fontFamily:'Poppins_600SemiBold'}}>03</Text>
<Text style={{color:"#edbe8e",marginTop:height*0.308,fontSize:22,fontFamily:'Poppins_600SemiBold'}}>/06</Text>
</View>
<View style={{marginTop:"-28%"}}>
  <Text style={{color:"white",textAlign:"left",marginLeft:"8.5%",fontSize:20,fontFamily:'Poppins_700Bold'}}>The Early Years of the Struggle </Text>
<Text style={{color:"#9e9ea4",marginLeft:"8.5%"}}>1954-1956</Text>
</View>
<View style={{marginTop:"30%"}}>
<Text style={{color:"white",width:width*0.98,textAlign:"left",paddingLeft:"5%",fontFamily:'Poppins_400Regular_Italic'}}>The FLN focused on building its military capabilities and gaining popular support among the Algerian population. French forces responded with brutal repression, leading to a cycle of violence. The FLN also worked to establish itself as the sole representative of the Algerian nationalist movement by marginalizing or eliminating rival groups. The struggle quickly spread from rural areas to cities, leading to increased violence and French reprisals.
</Text>
</View>

 {/* 4eme partie  */}

 <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:height*0.25}}>
  <Text style={{color:"#edbe8e",textAlign:"left",marginLeft:"2%",fontSize:165,fontFamily:'Poppins_600SemiBold'}}>04</Text>
<Text style={{color:"#edbe8e",marginTop:height*0.3,fontSize:22,fontFamily:'Poppins_600SemiBold'}}>/06</Text>
</View>
<View style={{marginTop:"-28%"}}>
  <Text style={{color:"white",textAlign:"left",marginLeft:"8.5%",fontSize:20,fontFamily:'Poppins_700Bold'}}>The Intensification of the Conflict  </Text>
<Text style={{color:"#9e9ea4",marginLeft:"8.5%"}}>1956-1958</Text>
</View>
<View style={{marginTop:"30%"}}>
<Text style={{color:"white",width:width*0.98,textAlign:"left",paddingLeft:"5%",fontFamily:'Poppins_400Regular_Italic'}}>The conflict escalated significantly during these years. The Battle of Algiers in 1957 was a critical moment, as the FLN carried out urban guerrilla warfare, including bombings and assassinations, while the French military responded with a brutal counter-insurgency campaign, including the widespread use of torture. The war became increasingly internationalized, with growing international condemnation of French tactics. The FLN also organized politically, forming a government-in-exile and seeking support from newly independent African and Asian countries.
</Text>
</View>




 {/* 5eme partie  */}

 <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:height*0.25}}>
  <Text style={{color:"#edbe8e",textAlign:"left",marginLeft:"2%",fontSize:165,fontFamily:'Poppins_600SemiBold'}}>05</Text>
<Text style={{color:"#edbe8e",marginTop:height*0.3,fontSize:22,fontFamily:'Poppins_600SemiBold'}}>/06</Text>
</View>
<View style={{marginTop:"-28%"}}>
  <Text style={{color:"white",textAlign:"left",marginLeft:"8.5%",fontSize:20,fontFamily:'Poppins_700Bold'}}>The Internationalization of the Conflict   </Text>
<Text style={{color:"#9e9ea4",marginLeft:"8.5%"}}>1958-1960</Text>
</View>
<View style={{marginTop:"30%"}}>
<Text style={{color:"white",width:width*0.98,textAlign:"left",paddingLeft:"5%",fontFamily:'Poppins_400Regular_Italic'}}>The FLN gained significant international support, especially from the United Nations and newly independent countries in Africa and Asia. In 1958, Charles de Gaulle returned to power in France and proposed a new constitution that offered limited autonomy to Algeria, but the FLN rejected this. The conflict became more intense, with large-scale operations on both sides. The war also began to strain French society, with widespread opposition to the war growing in France.
</Text>
</View>





 {/* 6eme partie  */}

 <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:height*0.25}}>
  <Text style={{color:"#edbe8e",textAlign:"left",marginLeft:"2%",fontSize:165,fontFamily:'Poppins_600SemiBold'}}>06</Text>
<Text style={{color:"#edbe8e",marginTop:height*0.3,fontSize:22,fontFamily:'Poppins_600SemiBold'}}>/06</Text>
</View>
<View style={{marginTop:"-28%"}}>
  <Text style={{color:"white",textAlign:"left",marginLeft:"8.5%",fontSize:20,fontFamily:'Poppins_700Bold'}}>The Path to Independence </Text>
<Text style={{color:"#9e9ea4",marginLeft:"8.5%"}}>1960-1962</Text>
</View>
<View style={{marginTop:"30%"}}>
<Text style={{color:"white",width:width*0.98,textAlign:"left",paddingLeft:"5%",fontFamily:'Poppins_400Regular_Italic'}}>By 1960, the war had become unsustainable for France both militarily and politically. The FLN continued its diplomatic efforts, and international pressure on France increased. Negotiations began in earnest, leading to the signing of the Evian Accords on March 18, 1962. These accords provided for a ceasefire, a referendum on independence, and the eventual withdrawal of French forces. On July 1, 1962, the Algerian people voted overwhelmingly for independence, and Algeria officially became independent on July 5, 1962.
</Text>
</View>




</ScrollView>

     </ImageBackground>
  );
}
