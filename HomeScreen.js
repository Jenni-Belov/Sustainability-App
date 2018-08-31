import React, {Component} from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

// HomeScreen mit drei Buttons, die zu einem weiteren Screen weiterleiten

class HomeScreen extends Component {

    static navigationOptions =
    {
        title: 'Home',
    };


    // render() Funktion liefert 3 Buttons 
    // this.props.navigation.navigate('Info') ermöglicht das Navigieren zum nächsten Screen
    
    render() {     
        return (
            
            <View style={styles.container}>

            <View style={styles.buttonContainer}>

                <Button 
                title="Info"
                onPress={() => this.props.navigation.navigate('Info') }
                color='pink'
                />

                <Button 
                title="Scan"
                onPress={() => this.props.navigation.navigate('Scan') }
                color='pink'
                />

                <Button 
                title="Produkt eintragen"
                onPress={() => this.props.navigation.navigate('neuProduct') }
                color='pink'
                />

            </View>
                <Image source={require('./my-icon.png')} style={[styles.pic, styles.pic1]} />
                <Image source={require('./my-icon2.png')} style={[styles.pic, styles.pic2]} />
            </View>
        
        );
    } 
}

export default HomeScreen;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },

        name: {
            position: 'absolute',
            color: 'pink',
            alignContent: 'center',
            fontSize: 30
        },

        buttonContainer: {
            position: 'absolute',
            borderRadius: 10,
            borderWidth: 10,
            borderColor: '#fff',
            flex: 1,
            top: 50,
            left:15,
            borderRadius:25,
            flexDirection: 'column',
        },

        pic1: {
            position: 'absolute',
            flex: 2,
            top: 200, 
            width:350, 
            height:350 
        },

        pic2: {
            position: 'absolute',
            flex: 1,
            bottom: 450,
            right: 10, 
            width:100, 
            height:100 
        }
    });