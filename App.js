import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

function App() {
  const [isLast, setIsLast] = useState(false);
  const [_index, _setIndex] = useState(0);
  const slider = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (_index < 3){
      _setIndex(_index + 1);
      slider.current.goToSlide(_index + 1, true)
      }
    },5000)

    return () => clearInterval(interval);
  },[_index]);



  const slides = [
    {
      key: "s1",
      dot: true,
    },
    {
      key: "s2",
      dot: true,
    },
    {
      key: "s3",
      dot: false,
    },
    {
      key: "s4",
      dot: false,
    },
  ]

  const _renderIntroScreen = () => {
    return (
      <View style={{ flex:1, backgroundColor:"#7dd195" }}>
          <View style={styles.headingView}>
              <Text style={styles.title}>
                  {"DEVELOPMENT \nACTIVITIES"}
              </Text>
              <Text style={styles.subTitle}>To boost your baby's growth!</Text>
          </View>
          <View style={{flex:0.6}}>
              <View style={styles.mobileView}>
              <Image
              style={styles.gif}
              resizeMode={"contain"}
              source={require("./rubicks-cube-game.gif")}
              />              
              </View>
          </View>
      </View>
    );
  };

  const _renderIntro_2Screen = () => {
    return (
        <View style={{ flex:1, backgroundColor:"#72b5e8" }}>
            <View style={styles.headingView}>
                <Text style={styles.title}>
                    {"DEVELOPMENT \nREPORTS"}
                </Text>
                <Text style={styles.subTitle}>
                    To track your baby's growth!
                </Text>
            </View>
            <View style={{flex:0.6}}>
                <View style={styles.mobileView}>
                <Image
                  style={styles.gif}
                  resizeMode={"contain"}
                  source={require("./rubicks-cube-game.gif")}
                  />              
                </View>
            </View>
        </View>
    );
  };

  const _renderIntro_3Screen = () => {
    return (
        <View style={{ flex:1, backgroundColor:"#faaa61" }}>
            <View style={styles.headingView}>
                <Text style={styles.title}>
                    {"RECIPES, STORIES \n& ARTICLES"}
                </Text>
                <Text style={styles.subTitle}>
                    One stop for all your needs!
                </Text>
            </View>
            <View style={{flex:0.6}}>
                <View style={styles.mobileView}>
                <Image
                style={styles.gif}
                resizeMode={"contain"}
                source={require("./rubicks-cube-game.gif")}
                />              
                </View>
            </View>
        </View>
    );
  };

  const _renderIntro_4Screen = () => {
    return (
        <View style={{ flex:1, backgroundColor:"#f9bbbb" }}>
            <View style={styles.headingView}>
                <Text style={[styles.title,{ paddingHorizontal:30}]}>
                    {"PARENTING \nCLUB"}
                </Text>
                <Text style={styles.subTitle}>
                    {"Learn & share experience, anonymously"}
                </Text>
            </View>
            <View style={{flex:0.6}}>
                <View style={styles.mobileView}>
                <Image
                style={styles.gif}
                resizeMode={"contain"}
                source={require("./rubicks-cube-game.gif")}
                />              
                </View>
            </View>
        </View>
    );
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.container}>
        {_index == 0 ? _renderIntroScreen() : null}
        {_index == 1 ? _renderIntro_2Screen() : null}
        {_index == 2 ? _renderIntro_3Screen() : null}
        {_index == 3 ? _renderIntro_4Screen() : null}
      </View>
    );
  };

  return (
    <View style={{flex:1, height: "100%", width: "100%" }}>
      <StatusBar hidden={true} />
      <AppIntroSlider
        ref={(ref) => (slider.current = ref)}
        data={slides}
        renderItem={_renderItem}
        onSlideChange={(e) => e === 3 && setIsLast(true)}
        dotStyle={[
          styles.dotStyle,
        ]}
        activeDotStyle={{ backgroundColor: "#6185c6", outerWidth:300, height:6, width:54 }}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
      />
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF",
    },
    ImgStyle: {
        width: "100%",
        height: "99%",
        resizeMode: "contain",
    },
    dotStyle: {
        height: 6,
        width: 6,
        backgroundColor: "#6185c6",
    },
    closeImageStyle: {
        position: "absolute",
        top: 50,
        left: 20,
        padding: 6,
        width: "10%",
    },
    gif: {        
      flex:1, 
      width:Dimensions.get("screen").width - 100, 
      alignSelf:'center', 
    },
    closeImage: {
        width: 25,
        height: 25,
    },
    textStyle: {
        borderRadius: 50,
        backgroundColor: "#DCDCDC",
        alignSelf: "center",
        position: "absolute",
        bottom: 50,
        alignSelf: "center",
        width: "70%",
        paddingHorizontal: 10,
        paddingVertical:10,
        elevation:5
    },
    text: {
        alignSelf: "center",
        color: "#57b5bc",
        fontSize: 15,
    },
    headingView:{
        flex:0.4, 
        alignItems:"center", 
        justifyContent:'flex-end', 
        paddingBottom:30,
    },
    title:{
        fontSize:35, 
        textAlign:'center', 
        color:"#4D4D4F",
        paddingHorizontal:20
    },
    subTitle:{
        fontSize:16, 
        marginTop:5, 
        textAlign:'center', 
        color:"#4D4D4F",
        paddingHorizontal:20
    },
    mobileView:{
        backgroundColor:"#FFFFFF", 
        overflow:'hidden', 
        flex:1, 
        width:Dimensions.get("screen").width - 80, 
        alignSelf:'center', 
        borderTopLeftRadius:20, 
        borderTopRightRadius:20,
    },
});

export default App;