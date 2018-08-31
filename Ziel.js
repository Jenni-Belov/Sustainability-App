import React, { Component } from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

//Screen mit dem Ziel und den Buttons für die Weiterleitung an die einzelnen Siegel


class Ziel extends Component {

    static navigationOptions = {
        title: 'Ziel der App ',
    };

    //render() gibt den Text und die Buttons zurück
    //this.props.navigation.navigate('Ecocert') navigiert zum jeweiligen Screen

    render() {
        return (
            <View style={styles.container}>


                    <Text style={styles.infoText}>Das Ziel dieser App ist es, {"\n"}den Nutzern zu mehr {"\n"}Nachhaltigkeit und {"\n"}Transparenz zu verhelfen.{"\n"}Diese App zeigt an,{"\n"}ob das jeweilige Produkt{"\n"}einen Naturkosmetik-Siegel{"\n"}besitzt, dabei werden die Siegel{"\n"}"BDIH", "Ecocert" und "Natrue"{"\n"}berücksichtigt.{"\n"}Wenn Sie mehr Infos zu den {"\n"}einzelnen Siegel haben möchten, {"\n"}klicken Sie auf den jeweiligen Button:</Text>

                    <Image source={require('./my-icon2.png')} style={[styles.pic, styles.pic2]} />


                    <View style={styles.buttonContainer}>


                        <Button style={styles.buttonContainer}
                            onPress={() => this.props.navigation.navigate('BDIH')}
                            title="BDIH"
                            color="pink"
                        />

                        <Button style={styles.buttonContainer}
                            onPress={() => this.props.navigation.navigate('Ecocert')}
                            title="Ecocert"
                            color="pink"
                        />


                        <Button style={styles.buttonContainer}
                            onPress={() => this.props.navigation.navigate('NaTrue')}
                            title="NaTrue"
                            color="pink"
                        />
                    </View>

            </View>
        );
    }
}

export default Ziel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 20
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
