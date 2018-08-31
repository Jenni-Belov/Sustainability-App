import React, { Component } from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

//InfoScreen enthält drei Buttons, es wird zum weiteren Screen navigiert

class InfoScreen extends Component {

  static navigationOptions = {
    title: 'InfoScreen',
  };

  // render() Funktion gibt drei Buttons zurück
  // mit this.props.navigation.navigate('Ziel') gelangt man zum nächsten Screen
  
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.buttonContainer}>

          <Button style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Ziel')}
            title="Ziel der App"
            color="pink"
          />

          <Button style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Anweisung')}
            title="Bedienungsanleitung"
            color="pink"
          />


          <Button style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Quellen')}
            title="Quellen"
            color="pink"
          />


        </View>
        <Image source={require('./my-icon.png')} style={[styles.pic, styles.pic1]} />
        <Image source={require('./my-icon2.png')} style={[styles.pic, styles.pic2]} />
      </View>


    );
  }
}


export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pic1: {
    position: 'absolute',
    flex: 2,
    top: 200,
    width: 350,
    height: 350
  },

  pic2: {
    position: 'absolute',
    flex: 1,
    bottom: 450,
    right: 10,
    width: 100,
    height: 100
  },

  buttonContainer: {
    position: 'absolute',
    borderRadius: 15,
    borderWidth: 10,
    borderColor: '#fff',
    flex: 2,
    top: 50,
    left: 15,
    borderRadius: 25,
    flexDirection: 'column',
  }
});
