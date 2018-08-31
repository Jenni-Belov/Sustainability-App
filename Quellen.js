import React, { Component } from 'react';
import { Text, View, Button, Image, ImageBackground, Linking, StyleSheet } from 'react-native';

// Screen mit den verlinkten Quellen für den User 

class Quellen extends Component {

    static navigationOptions = {
        title: 'Quellen',
    };

    //Linking.openURL() verlinkt die URL render () gibt diese als Textfelder aus

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./my-icon.png')} style={[styles.pic, styles.pic1]}>

                    <Text style={styles.infoText}>Folgend werden Webseiten {"\n"}aufgeführt, welche als {"\n"}Quellen gedient haben{"\n"}und welche Sie als{"\n"}Verbraucher zum Nachschlagen{"\n"}nutzen können:{"\n"}(einfach anklicken)</Text>

                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('http://www.natrue.org/de/informationen-fuer/verbraucher/natrue-zertifizierte-produkte/')}>NaTrue Webseite</Text>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://www.kontrollierte-naturkosmetik.de/bdih.htm')}>BDIH Webseite</Text>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://utopia.de/siegel/ecocert/')}>über Ecocert auf www.utopia.de</Text>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://utopia.de/siegel/')}>verschiedene Siegel</Text>
                    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://www.welt.de/icon/beauty/article175839873/Die-wichtigsten-Naturkosmetik-Siegel-im-Ueberblick-BDIH-Natrue-Demeter-Ecocert.html')}>www.welt.de über Naturkosmetik Siegel</Text>
                </ImageBackground>
                <Image source={require('./my-icon2.png')} style={[styles.pic, styles.pic2]} />

            </View>
        );
    }
}

export default Quellen;


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
        fontSize: 22
    },

    linkedText: {
        position: 'absolute',
        flex: 1,
        bottom: 200,
        color: 'blue',
        width: 350,
        height: 350,
        fontSize: 20
    }
});
