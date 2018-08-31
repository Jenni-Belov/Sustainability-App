import React, { Component } from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';


// Screen zeigt den NaTrue Siegel mit einem Bild und dem dazugehörigen Text

export default class NaTrueScreen extends Component {

    static navigationOptions = {
        title: 'Siegel: "NaTrue"',
    };

    //  render() Funktion gibt das Bild und den Text  zurück


    render() {
        return (
            <View style={styles.container}>

                <Image source={require('./natrue.png')} style={[styles.pic, styles.pic1]} />

                <Text style={styles.infoText}>NaTrue steht für {"\n"}natürliche / naturnahe / {"\n"}naturidentische Inhaltsstoffe.{"\n"}Greenwashing wird {"\n"} mit der 75%-Regel{"\n"}versucht zu eliminieren.{"\n"}Eine Klassifizierung in 13 {"\n"}Produkkategorien garaniert die {"\n"}maximale Natürlichkeit eines Produktes.{"\n"}Beim NaTrue gibt es drei {"\n"}Zertifizierungsstufen: Naturkosmetik, {"\n"}Naturkosmetik mit Bio-Anteil{"\n"}und Biokosmetik.</Text>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    pic1: {
        position: 'absolute',
        flex: 1,
        top: 20,
        right: 10,
        width: 100,
        height: 100
    },

    pic2: {
        position: 'absolute',
        flex: 1,
        bottom: 450,
        right: 10,
        width: 100,
        height: 100
    },

    infoText: {
        position: 'absolute',
        flex: 1,
        bottom: 180,
        color: 'pink',
        width: 350,
        height: 350,
        fontSize: 18
    },
    buttonContainer: {
        justifyContent: 'center',
        position: 'absolute',
        borderRadius: 10,
        borderWidth: 10,
        borderColor: '#fff',
        flex: 1,
        bottom: 50,
        borderRadius: 25,
        flexDirection: 'row',
    }

});
