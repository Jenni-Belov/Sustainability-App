import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

//Scanscreen zum Scannen des Barcodes

export default class ScanScreen extends Component {

  //Zugriffsberechtigungen für die Kamera

  state = {
    hasCameraPermission: null,
  };

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  // _handleBarCodeRead() bestimmt was passiert, wenn der Barcode erfolgreich gescannt wurde,
  //this.props.navigation.navigate('ProductSearch') navigiert zum ProductSearch Screen 

  _handleBarCodeRead = ({ type, data }) => {
    this.props.navigation.navigate('ProductSearch')
  }

  // render() gibt Anweisungen, Kamerazugriffsberechtigungen und das ScanView zurück
  render() {

    return (

      <View style={styles.container}>

        <Text style={styles.titelText}> BARCODESCANNER </Text>
        <Text style={styles.infoText}>Halten Sie die Kamera{"\n"}auf den Strichcode{"\n"}Ihres Produkts.</Text>

        <Text>{this.state.qrcode}</Text>

        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              //onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: 200 }}
            />
        }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },

  titelText: {
    position: 'absolute',
    flex: 2,
    bottom: 200,
    left: 70,
    width: 350,
    height: 350,
    fontSize: 25,
    color: '#009900'
  },

  infoText: {
    position: 'absolute',
    flex: 2,
    bottom: 130,
    left: 80,
    color: 'pink',
    width: 350,
    height: 350,
    fontSize: 20
  }
});
