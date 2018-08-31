import React, { Component } from 'react';
import { AppRegistry, TextInput, View, StyleSheet, Alert, Text, Button } from 'react-native';



// Screen zum Produkt eintragen  

// Hier gibt es ein vorgefertigtes Template für das Hochladen eines Bilders auf den Server,
// dieses ist markiert mit "Falls man ein Bild hochladen würde".


// Falls man ein Bild hochladen würde
// import CameraRollPicker from 'react-native-camera-roll-picker';
// import { Permissions } from 'expo';



export default class App extends Component {

  static navigationOptions =
  {
      title: 'Produkt eintragen ',
  };

  // Falls man ein Bild hochladen würde
  //Zugriffsberechtigungen auf den externen Speicher

  // state = {
  //   hasExternalReadPermission: null
  // };
  
  // componentDidMount() {
  //   this._requestExternalReadPermission();
  // }

  // _requestExternalReadPermission = async () => {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //   this.setState({
  //     hasExternalReadPermission: status === 'granted',
  //   });
  // };

  //Konstruktor mit den zugehörigen Komponenten aus der Datenbank

  constructor(props) {
    super(props)
    this.state = {
      
      Name: '',
      Barcode: '',
      Marke: '',
      Hersteller: '',
      Bdih: '',
      Ecocert: '',
      Natrue: ''
      // Falls man ein Bild hochladen würde
      //Image: null

    }
  }


  //ProduktInsertfunktion() setzt mit this.state den dazugehörigen Wert

  ProductInsertFunction = () =>{
 
    const { Name }  = this.state ;
    const { Barcode }  = this.state ;
    const { Marke }  = this.state ;
    const { Hersteller }  = this.state ;
    const { Bdih }  = this.state ;
    const { Ecocert }  = this.state ;
    const { Natrue }  = this.state ;
    // Falls man ein Bild hochladen würde
    //const { Image }  = this.state ;

    //fmit fetch() wird die Verbindung zum Server aufgebaut und Daten 
    //mit der POST Methode hochgeladen JSON.stringify wandelt die Daten vom JSON-Format zu String
    //responseJon ist der vom Server enthaltene Wert

    fetch('https://jennibelov.000webhostapp.com/ProductInsert.php',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body:JSON.stringify({
      name: Name,
      barcode: Barcode,
      marke: Marke,
      hersteller: Hersteller,
      bdih: Bdih,
      ecocert: Ecocert,
      natrue: Natrue
      // Falls man ein Bild hochladen würde
      //image: Image.toString()
    })
  }).then((response) => response.json())
  .then((responseJson) => {
    Alert.alert(JSON.stringify(responseJson));
  }).catch((error) => {
    Alert.alert(JSON.stringify(error));
  console.log(error);
  });
  }

  //in der render() Funktion werden die Eingabefelder zurückgegeben
  
  render() {
    return (

      <View style={styles.MainContainer}>

      <TextInput
      placeholder = "Name des Produkts eingeben:"
      onChangeText={Name => this.setState({Name})}
      underlineColorAndroid='transparent'
      style={styles.TextInputStyleClass}
      />

      <TextInput
      placeholder = "Strichnummer des Produkts eingeben:"
      onChangeText={Barcode => this.setState({Barcode})}
      underlineColorAndroid='transparent'
      style={styles.TextInputStyleClass}
      />

      <TextInput
      placeholder = "Marke des Produkts eingeben:"
      onChangeText={Marke => this.setState({Marke})}
      underlineColorAndroid='transparent'
      style={styles.TextInputStyleClass}
      />

      <TextInput
      placeholder = "Hersteller des Produkts eingeben:"
      onChangeText={Hersteller => this.setState({Hersteller})}
      underlineColorAndroid='transparent'
      style={styles.TextInputStyleClass}
      />

      <TextInput
      placeholder = "Hat das Produkt einen BDIH Siegel?"
      onChangeText={Bdih => this.setState({Bdih})}
      underlineColorAndroid='transparent'
      style={styles.TextInputStyleClass}
      />

      <TextInput
      placeholder = "Hat das Produkt einen Ecocert Siegel?"
      onChangeText={Ecocert => this.setState({Ecocert})}
      underlineColorAndroid='transparent'
      style={styles.TextInputStyleClass}
      />

      <TextInput
      placeholder = "Hat das Produkt einen NaTrue Siegel?"
      onChangeText={Natrue => this.setState({Natrue})}
      underlineColorAndroid='transparent'
      style={styles.TextInputStyleClass}
      />


{/* Falls man ein Bild hochladen würde */}

{/* mit CameraRollPicker kann man das Bild aussuchen  */}


      {/* <CameraRollPicker callback = {this.getSelectedImages}
       assetType='Photos' maximum = {1}
       groupTypes='SavedPhotos'/>

       <Button title = "Bild auswählen" onPress={Image => this.setState({Image})}/> */}

      <Button title = "Speichern!" onPress={this.ProductInsertFunction} color='pink'/>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  MainContainer :{
   
  justifyContent: 'center',
  flex:1,
  margin: 10
  },
   
  TextInputStyleClass: {
  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: 'pink',
  borderRadius: 5 ,
  }
   
  });

