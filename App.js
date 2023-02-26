import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [state, setState] = useState(true);
  const [value, setValue] = useState("");
  const [count,setCounter]=useState(0)
  const [hour,sethour]=useState(0)
  const [minuite,setMin]=useState(0)

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
  
  const Counter=props=>{
    console.log(props.value,"called props")
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
      <TextInput
      placeholder="Type something here"
        onChange={(e) => setValue(e.target.value)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          alignSelf: "center",
          alignContent: "center",
        }}
        value={value}
      />
     {/* <View style={{marginTop: 50}}>
      <Blink text="I love to blink" />
      <Blink text="Yes blinking is so great" />
      <Blink text="Why did they ever take this out of HTML" />
      <Blink text="Look at me look at me look at me" />
    </View> */}
    <View style={{marginTop:50}}>
      <Counter sec={count} min={minuite} hour={hour}/>
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

