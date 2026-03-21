import { View, Text, StyleSheet,ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

import icedCoffee from "../assets/images/iced-coffee.png";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
         source={icedCoffee}
         resizeMode='cover'
          style={styles.image}>
        <Text style={styles.title}>coffee shop</Text>
        <Link href="/contact" style={{marginHorizontal:"auto"}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}


export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 20,
  },
  link:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button:{
    height: 50,
    borderRadius:20,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: 6,
    justifyContent: 'center',      
  },
  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
  },
})