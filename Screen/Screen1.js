// Screen1.js
import React, { useState } from "react";
import { StyleSheet,View,Image,TouchableOpacity} from 'react-native';

const Screen1 = ({ navigation }) => {
  const Screen2 = () => {
    navigation.navigate('Screen2');
  };
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
      <Image
            source={require("../assets/image/Map.png")}
            style={styles.image}
          />
      </View>
      <View style={styles.avaContainer}>
      <Image
            source={require("../assets/image/Avas.png")}
            style={styles.avaImage}
          />
      </View>
      <View style={styles.pressImageContainer}>
      <TouchableOpacity onPress={Screen2}>
      <Image
            source={require("../assets/image/User.png")}
            style={styles.pressImage1}
          />
          <Image
            source={require("../assets/image/Task.png")}
            style={styles.pressImage2}
          />
      </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer:{
    width: 400,
    height: 700,
    alignItems: "center",
    backgroundColor: "#FBFBFB",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 50,
    position: "relative",
  },
  pressImageContainer: {
    position: "absolute",
  },
  avaContainer:{
    position: "absolute",
    alignItems:'center',
  },
  image: {
    width: 327,
    height: 662,
  },
  pressImage1: {
    width: 100,
    height: 100,
    marginTop: 400,
    marginLeft: 100,
  },
  pressImage2: {
    width: 300,
    height: 200,
  },
  avaImage:{
    width: 310,
    height: 270,
    marginBottom:300,
  },
});

export default Screen1;
