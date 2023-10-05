import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Screen2 = ({ navigation }) => {
  const Screen1 = () => {
    navigation.navigate('Screen2');
  };
  return (
    <View style={styles.container}>
      <View>
      <Image
        source={require('../assets/image/imgFlowers1.png')}
        style={styles.image}
      />
      <View style={styles.icon1}>
      <TouchableOpacity onPress={Screen1}>
      <Icon name="chevron-left" size={30} color="white" />
      </TouchableOpacity>
      </View>
      <View style={styles.icon2}>
      <Icon name="arrow-up" size={30} color="white" />
      </View>
      <Image
        source={require('../assets/image/AVANAME.png')}
        style={styles.ava}
      />
      <Text style={styles.texta}>Until 26.09</Text>
      </View>
      <View style={styles.textContain}>
      <Text style={styles.text}>Go for a walk and feed the dog</Text>
      <Icon style={styles.icon2} name='heart' size={30} color="gray"/>

      <Text style={styles.text2}>
            Leaving for a week, French Bulldog Wilfred needs 
            help feeding twice a day
            and walk from 26 to 30 September. 
            I bought food, it will be easy.
      </Text>
      <Text>Reward 34$</Text>
      <Text>3 HERALD</Text>
      <Text>400m from you</Text>
      </View>
      <View style={styles.buttonContain}>
      
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
          }}
        >
          <Text style={styles.buttonText}>Respon</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.iconContain}>
        <TouchableOpacity style={styles.icon}>
        <Icon name="comment" size={30} color="purple" />
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems:"center",
    backgroundColor:'white',
  },
  imgContent:{
    resizeMode: 'contain',
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
    width:210,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#AF81F0',
    padding: 10,
    height: 50,
    width:250,
    borderRadius:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  icon:{
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
    padding: 10,
    borderRadius:10,
  },
  icon1:{
    position:'absolute',
    top: 10,
    left: 30,
  },
  icon2:{
    position:'absolute',
    top: 10,
    right: 30,
  },
  ava:{
    position:'absolute',
    bottom: 10,
    left: 30,
  },
  texta:{
    color:'white',
    position:'absolute',
    bottom: 10,
    right: 30,
  },
  textContain:{
    marginTop:400,
    position:'absolute'
  },
  text2:{
    marginTop:10,
    left:0,
    marginRight:50,
    fontSize:16,
    marginBottom:10,
  },
  buttonContain:{
    marginTop:700,
    position:'absolute',
    left:100,
  },
  iconContain:{
    marginTop:700,
    position:'absolute',
    left:30,
  },
});

export default Screen2;

