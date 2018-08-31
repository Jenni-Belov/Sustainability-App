import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
import InfoScreen from "./screens/InfoScreen";
import ScanScreen from "./screens/ScanScreen";
import neuProduct from './screens/neuProduct';
import ProductSearch from './screens/ProductSearch';
import BDIHScreen from './screens/BDIHScreen';
import EcocertScreen from './screens/EcocertScreen';
import NaTrueScreen from './screens/NaTrueScreen';
import Ziel from './screens/Ziel';
import Anweisung from './screens/Anweisung';
import Quellen from './screens/Quellen';


export default class App extends React.Component {

    render() {
        return (
            <AppStackNavigator />
        );
    }
}


const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Info: InfoScreen,
    Scan: ScanScreen,
    neuProduct: neuProduct,
    ProductSearch: ProductSearch,
    Ziel: Ziel,
    Anweisung: Anweisung,
    Quellen: Quellen,
    NaTrue: NaTrueScreen,
    BDIH: BDIHScreen,
    Ecocert: EcocertScreen

    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

});