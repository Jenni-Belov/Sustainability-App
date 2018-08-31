import React, { Component } from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

// Screen zeigt den BDIH Siegel mit einem Bild und dem dazugehörigen Text

export default class BDIHScreen extends Component {

    static navigationOptions = {
        title: 'Siegel: "BDIH"',
    };

    //  render() Funktion gibt das Bild und den Text  zurück

    render() {
        return (
            <View style={styles.container}>

                <Image source={require('./bdih.png')} style={[styles.pic, styles.pic1]} />

                <Text style={styles.infoText}>BDIH Kriterien: {"\n"}
                    die Rohstoffe müssen {"\n"}überwiegend aus kontrolliert {"\n"}biologischem Anbau kommen{"\n"}
                    Tierversuche sind bei {"\n"}der Herstellung, Entwicklung {"\n"}und Prüfung der Endprodukte verboten{"\n"}
                    gentechnisch veränderte Organismen {"\n"}dürfen nicht eingesetzt werden{"\n"}
                    die Produkte müssen umwelt- und {"\n"}ressourcenschonend hergestellt werden{"\n"}
                    die Verpackungsmaterialien müssen aus recycelbaren Materialien bestehen und möglichst sparsam eingesetzt werden.</Text>

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

    infoText: {
        position: 'absolute',
        flex: 1,
        bottom: 180,
        color: 'pink',
        width: 350,
        height: 350,
        fontSize: 18
    },


});
