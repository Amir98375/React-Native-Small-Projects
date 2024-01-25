import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Button,
  Alert,

} from "react-native";
import { Navbar } from "./Components/Navbar.js";


export default function App() {
  const [state, setState] = useState(true);
  const [value, setValue] = useState("");
  const [count,setCounter]=useState(0)
  const [hour,sethour]=useState(0)
  const [minuite,setMin]=useState(0)
  const arrList=['Java','Kotlin','Node.js','Python','Javascript']
  

// console.log(Platform,"Plateform")
const onPressHandle = (event) =>

  Alert.alert(
    'Pay Amount',
    'Please confrim to pay',
    [
      {
        text: 'Cancel',
       
        style: 'cancel',
      },
      {
        text: 'Ok',
       
        style: 'ok',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );

  const Blink=props=>{
    const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 1000);

    return () => clearInterval(toggle);
  });

  if (!isShowingText) {
    return null;
  }

  return <Text
  style={{alignSelf:'center'}}>{props.text}</Text>;
  }
  
  const Counter=(props)=>{
   
    useEffect(()=>{
     let countVal=setInterval(()=>{
      if(count>59){
        setMin(minuite+1)
        setCounter(0)
        if(minuite>59){
          sethour(hour+1)
          setMin(0)
        }
      }else {
       setCounter(count+1)  
      }
   
     },1000)
     return(()=>{clearInterval(countVal)})
    })

    return <Text
    style={{alignSelf:'center'}}>{props.hour}:{props.min}:{props.sec}</Text>;
    }
  
  return (
  
    <ScrollView>
 <Navbar/>
      <View>
    
   <Button title="Cancel"
      onPress={()=>onPressHandle()}/>
 
      </View>
      <Text style={{ marginTop: 100, alignSelf: "center" }}>
        My First React Native project
      </Text>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{ width: 200, height: 200, alignSelf: "center" }}
      ></Image>
<View style={{display:'flex' , justifyContent:'space-around' ,width:200,alignItems:'center',
gap:10,
alignSelf:'center'}}>
<TextInput
      placeholder="Type something here"
        onChange={(e) => setValue(e.target.value)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
         
       
        }}
        value={value}
      />
      
</View>
     {/* <View style={{marginTop: 50}}>
      <Blink text="I love to blink" />
      <Blink text="Yes blinking is so great" />
      <Blink text="Why did they ever take this out of HTML" />
      <Blink text="Look at me look at me look at me" />
    </View> */}
    <View style={{marginTop:50}}>
    <Text style={{alignSelf:'center',color:'red'}}>Digital Watch </Text>
      <Counter sec={count} min={minuite} hour={hour}/>
    </View>
    <Text style={{alignSelf:'center',color:'red'}}>List </Text>
    <View style={{alignItems:'center'}}>
      <FlatList data={arrList}
        renderItem={({item}) =>
         <Text >{item}</Text>}/>
    </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

