import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';


// Screen zeigt den Ecocert Siegel mit einem Bild und dem dazugehörigen Text

export default class EcoCertScreen extends Component {

    static navigationOptions = {
        title: 'Siegel: "Ecocert"',
    };

    //render() Funktion gibt das Bild und den Text  zurück

    render() {
        return (
            <View style={styles.container}>

                <Image source={require('./ecocert.png')} style={[styles.pic, styles.pic1]} />

                <Text style={styles.infoText}>Das Ecocert-{"\n"}Kosmetik-{"\n"}Label wird nach{"\n"}den folgenden{"\n"}Grundsätzen vergeben:{"\n"}
                    Erneuerbare Ressourcen und Inhaltsstoffe aus ökologischem Anbau werden bevorzugt{"\n"}
                    Verarbeitungsverfahren sollen die {"\n"}Umwelt so wenig wie möglich belasten{"\n"}
                    Inhaltsstoffe natürlichen Ursprungs {"\n"}werden auch in Bezug auf ihre Umweltauswirkung {"\n"}(biologische Abbaubarkeit, Ökotoxizität) {"\n"}bewertet{"\n"}
                    Transparenz gegenüber dem Verbraucher</Text>

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
        width: 200,
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
    }

});
