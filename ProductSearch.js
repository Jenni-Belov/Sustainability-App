import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';


//Produktsuche mit Searchbar 

class ProductSearch extends Component {

  static navigationOptions =
    {
      title: 'Produkt Suche',
    };

  //Konstruktor mit den zugehöriigen Komponenten

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  // Produkte werden durch fetch() vond er Datenbank abgefragt 

  makeRemoteRequest = () => {
    const url = `https://jennibelov.000webhostapp.com/testtestselect.php`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.ProductDB,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.ProductDB;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  // renderSeparator trennt die einzelnen Felder

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  //Diese Funktion filtert die Daten nach eingegebenen Werten 

  searchFilterFunction = text => {
    console.log(this.arrayholder);
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.barcode.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  //Ausgabe der Searchbar

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Geben Sie den Barcode ein: "
        containerStyle={{ backgroundColor: 'pink' }}
        inputStyle={{ backgroundColor: 'white' }}
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
    );
  };

  //render () gibt die Daten in einer Listview zurück

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.name} (${item.marke})`}
              subtitle={`${item.hersteller}  Ecocert: ${item.ecocert}  BDIH: ${item.bdih}  NaTrue: ${item.natrue}`}
              containerStyle={{ borderBottomWidth: 0 }}

            />
          )}
          keyExtractor={item => item.barcode}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />

      </List>


    );
  }
}

export default ProductSearch;