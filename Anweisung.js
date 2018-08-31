import React, { Component } from 'react';
import { Text, View,  Image, ImageBackground, StyleSheet } from 'react-native';


// Screen mit einer kurzen Anleitung

class Anweisung extends Component {

    static navigationOptions = {
        title: 'Anleitung',
    };


   // render() Funktion gibt die Anleitung als einen Text  und gibt zwei Bilder zurück 

    render() {
        return (

            <View style={styles.container}>
            
                <ImageBackground source={require('./my-icon.png')} style={[styles.pic, styles.pic1]}>

                    
                    <Text style={styles.infoText}>Drücken Sie im Home-Menü{"\n"}auf den Button 'Scan', {"\n"}um das Scannen zu starten.{"\n"}Dafür müssen Sie die {"\n"}Zugriffsberechtigungen {"\n"}für die Kamera erlauben.{"\n"}Noch kommen Sie {"\n"}nicht direkt zum{"\n"}gewünschten Produkt, sondern müssen  {"\n"}den Barcode manuell in der Searchbar oben eingeben.{"\n"}Diese Funktion ist noch in Bearbeitung  {"\n"}und kommt mit dem nächsten Release.</Text>
                    

                </ImageBackground>
                <Image source={require('./my-icon2.png')} style={[styles.pic, styles.pic2]} />
               
            </View>

        );
    }
}

export default Anweisung;


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

    infoText: {
        position: 'absolute',
        flex: 1,
        bottom: 200,
        color: 'pink',
        width: 350,
        height: 350,
        fontSize: 18
    }
});
