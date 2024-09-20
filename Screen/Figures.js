import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity,FlatList,Dimensions, TouchableWithoutFeedbackBase } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import fig1 from '../Images/amir.jpg';
import { useFonts } from 'expo-font';
import amir from '../Images/amirabd.jpg';
import fig2 from '../Images/badis.png';
import fig3 from '../Images/bou.png';
import fig4 from '../Images/Moufdi-Zakaria.jpeg';
import AppLoading from 'expo-app-loading';
import fig33 from '../Images/Mostefa_Ben_Boulaïd.jpg';
import fig22 from '../Images/Hassiba_Ben_Bouali.jpg';
import { ScrollView } from 'react-native-gesture-handler';
import fig44 from '../Images/Ali_la_pointe.jpg';
const {width,height} = Dimensions.get('window');
import font from './../assets/fonts/GeostarFill_400Regular.ttf';
import { useNavigation } from '@react-navigation/native';
import fig11 from '../Images/larbi.jpg';
export default function Figures({navigation}) {
const Navigation = useNavigation();

  
const data_hori=[
{
  id:1,
  title : "Larbi ben Mhidi",
  img_card2 : fig11,
  discription : "Larbi Ben M'Hidi was born in 1923 in the Ain Mlila region of Algeria and became a key leader of the Algerian National Liberation Front during the Algerian War of Independence against French colonial rule. He played a vital role in organizing the resistance and is remembered as one of the most heroic and iconic figures in Algeria's fight for independence.Ben M'Hidi was involved in planning and executing several significant operations during the war including the famous Battle of Algiers. He was known for his strategic mind leadership abilities and unwavering commitment to the cause of Algerian independence.In 1957 during the Battle of Algiers Ben M'Hidi was captured by French forces. Despite being tortured he remained steadfast and refused to betray his comrades. His death in custody is widely believed to have been an execution disguised as a suicide. Ben M'Hidi's legacy continues to inspire generations in Algeria and beyond as a symbol of courage resistance and the fight for freedom."
},
{
  id:2,
  title : "Hassiba Ben Bouali",
  img_card2 : fig22,
  discription : "Hassiba Ben Bouali was a significant figure in the Algerian War of Independence. Born on January 18, 1938, in Chlef, Algeria, she became involved in the resistance movement at a young age, joining the Algerian National Liberation Front (FLN).Hassiba was known for her courage and commitment to the fight against French colonialism. She played an active role in the Battle of Algiers, where she assisted in coordinating and executing operations against the French forces.On October 8, 1957, Hassiba Ben Bouali was killed during a French raid on a hideout in the Casbah of Algiers. She died alongside three other key figures of the resistance, including Ali la Pointe. Her death made her a martyr and an enduring symbol of bravery and sacrifice in Algeria's struggle for independence."
},
{
  id:3,
  title : "Mustapha Ben boulaid",
  img_card2 : fig33,
discription :"Mustapha Ben Boulaïd was a key leader in the Algerian War of Independence and one of the founding members of the National Liberation Front (FLN). Born in 1917 in Arris, in the Aurès region of Algeria, he played a crucial role in the early stages of the struggle against French colonial rule.Ben Boulaïd was a seasoned military leader, having served in the French army during World War II, where he gained valuable combat experience. After the war, he became increasingly involved in the nationalist movement, eventually becoming one of the main organizers of the armed uprising against the French.He is often referred to as the father of the Algerian Revolution for his role in planning and initiating the armed struggle on November 1, 1954, known as the Toussaint Rouge (Red All Saints' Day). This marked the beginning of the Algerian War of Independence.In 1955, Ben Boulaïd was captured by the French but managed to escape from prison in 1956. He continued to lead the resistance until his death in 1956, when he was killed by a French-dropped bomb in the Aurès mountains. His leadership and dedication made him a legendary figure in Algeria's fight for freedom."
},

{
  id:4,
  title : "Ali la pointe",
  img_card2 : fig44,
discription : "Ali La Pointe, born Ali Ammar in 1930 in Miliana, Algeria, was a prominent figure in the Algerian War of Independence and a key member of the National Liberation Front (FLN). Before joining the FLN, Ali La Pointe had a troubled past, including a stint in prison. However, he became deeply committed to the cause of Algerian independence after witnessing the harsh realities of French colonial rule.Ali La Pointe became known for his bravery and effectiveness in guerrilla warfare, particularly during the Battle of Algiers, which took place in 1956-1957. He was responsible for numerous operations against French colonial forces, and his actions made him one of the most wanted men in the Casbah of Algiers.On October 8, 1957, after a long standoff, French paratroopers surrounded the building where Ali La Pointe was hiding with other FLN members, including Hassiba Ben Bouali. When the French forces realized they couldn't capture them alive, they detonated explosives, killing Ali La Pointe and his comrades. His death marked a significant moment in the Algerian struggle for independence, and he remains a symbol of resistance and sacrifice in Algerian history."
},
]


const data =[
{
  id:1,
title : "Amir Abd Elkader",
discription : "Amir Abdelkader (1808–1883) was an Algerian military leader, Islamic scholar, and national hero who led the resistance against French colonial invasion in the mid-19th century. He is celebrated for his leadership, military strategy, and commitment to uniting Algerian tribes against the French forces. Abdelkader also became known for his principles of humanitarianism and religious tolerance, particularly during his later years in exile, where he gained international respect for his moral and ethical stance . Amir Abdelkader is remembered not only as a national hero of Algeria but also as a global symbol ofethical leadership, religious tolerance, and humanitarianism. His life story continues to inspire people around the world, reflecting the profound impact of his actions on both his contemporaries and future generations."

,
img_card2 : amir
},
{
  id:2,
  img_card2 : fig2,
title : "Abd Elhamid Ibn Badiss",
discription : "Abdelhamid Ben Badis (1889–1940) was a pivotal figure in Algeria’s struggle to preserve its Islamic and cultural identity under French colonial rule. A prominent Islamic scholar and reformer, he sought to revive and strengthen Algerian identity through education and religious reform. In 1931, he founded the Association of Algerian Muslim Ulama, which played a crucial role in promoting Arabic language education and Islamic values as a counter to French assimilation policies. Ben Badis believed that preserving Algeria’s cultural and religious heritage was key to resisting colonial domination. Through his writings, particularly in his newspaper -Al-Shihab- he spread ideas of reform and nationalism, inspiring a generation of Algerians to resist colonial oppression. His efforts laid the groundwork for the nationalist movements that eventually led to Algeria's independence in 1962. Ben Badis is remembered as a symbol of Algerian resistance, cultural pride, and the enduring power of education in the fight for freedom. Abdelhamid Ben Badis' legacy is a testament to the power of cultural preservation and educational reform in the fight for national independence. His dedication to promoting Islamic values and Arabic education galvanized Algerian resistance against colonialism, laying the groundwork for the country’s eventual liberation. Ben Badis remains a symbol of resilience and the transformative impact of a unified cultural identity in the quest for freedom."
},{
  id:3,
  img_card2 : fig3,
title : "Haouari Boumediene",
discription : "Haouari Boumediene, born Mohamed Ben Brahim Boukharouba in 1932, was a central figure in Algeria's modern history. He emerged as a leader during the Algerian War of Independence against French colonial rule, joining the National Liberation Front (FLN) and playing a crucial role in the conflict. After the war, he became a prominent military leader and eventually led a coup in 1965 that removed Ahmed Ben Bella, Algeria’s first president.Boumediene then became President of Algeria, a position he held until his death in 1978. His tenure was characterized by his efforts to transform Algeria into a socialist state, focusing on land reform and the nationalization of key industries such as oil and gas. His policies aimed to reduce foreign influence and enhance national self-sufficiency.Boumediene's leadership also involved extensive state control over the economy and a focus on industrialization and education. He sought to modernize Algeria, implementing infrastructure projects and improving social services. Despite these efforts, his administration faced criticism for its authoritarian nature and lack of political freedoms.His legacy is mixed; he is remembered for his role in Algeria's independence and efforts to build a self-reliant economy, but also for the centralized and repressive nature of his rule. Boumediene remains a significant historical figure in Algeria, influencing the country's post-independence trajectory and development."
},{
  id:4,
  img_card2 : fig4,
title : "Moufdi Zakaria",
discription : "Moufdi Zakaria was a prominent Algerian poet and revolutionary born in 1928 in Tizi Ouzou. He is most famous for writing the lyrics to Kassaman, the national anthem of Algeria, which embodies the spirit of resistance and the fight for independence from French colonial rule. Zakaria's poetry was deeply influenced by his experiences under colonialism and his commitment to the nationalist cause.Educated in traditional Islamic schools, Zakaria's early exposure to Arabic literature and poetry shaped his literary career. His works often reflected themes of freedom, national pride, and unity, resonating deeply with the Algerian people during the struggle for independence.During the Algerian War of Independence, Zakaria actively participated in the nationalist movement, using his writing to inspire and mobilize support for the cause. His contributions extended beyond poetry, as he played a role in the cultural and political aspects of the independence movement.After Algeria achieved independence in 1962, Zakaria continued to be an influential figure in Algerian literature and culture. He was celebrated for his role in shaping national identity and his impact on the collective memory of the independence struggle. Moufdi Zakaria passed away in 1977, but his legacy endures through his contributions to Algerian national heritage and his enduring influence on Algerian literature and patriotism."
},


];



  return (
    <ScrollView style={{width:width , height:height,backgroundColor:"#171413"}} showsVerticalScrollIndicator={false}>
<View style={{display:"flex",flexDirection:"row",marginTop:"15%",marginLeft:"7%"}}>
    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
    <FontAwesome6 name="bars-staggered" size={24} color="white" />
    </TouchableOpacity>
<Text style={{marginLeft:"27%",fontSize:18,color:"white",fontFamily:'Poppins_700Bold'}}>FIGUERS</Text>
</View>
<FlatList 

horizontal
data={data_hori}
renderItem={({item})=>(
  <View style={{marginTop:"40%",width:width*0.335}}>
    <TouchableOpacity onPress={()=>Navigation.navigate("Info_fig",{
      name : item.title,
      img_fig : item.img_card2,
      discription : item.discription
    })}>
<Image source={item.img_card2} style={{width:width*0.3,height:height*0.15,borderRadius:50,marginLeft:"5%"}}/>
</TouchableOpacity>
</View>
)}
/>
<Text style={{textAlign:"center",top:"5%",fontSize:25,color:"white",backgroundColor:"#120c0c",fontFamily:'Poppins_700Bold'}}>Another Figures</Text>
<FlatList 
numColumns={2}
style={{flexDirection:"column",marginTop:"10%",paddingBottom:50}}
data={data}
renderItem={({item})=>(
<View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:"10%",marginLeft:"3%",overflow:"hidden"}}>
  <TouchableOpacity onPress={()=>Navigation.navigate("Info_fig",{
    img_fig : item.img_card2,
    name : item.title,
    discription : item.discription,
  })}>
  <View style={styles.card}>
  <Image source={item.img_card2} style={{width:"100%",height:height*0.25,borderRadius:10}}/>
</View>
</TouchableOpacity>
</View>


)}
/>


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
card:{
  width:width*0.4,
  height:height*0.25,
  marginLeft:"5%",
  borderRadius:10,
}


});