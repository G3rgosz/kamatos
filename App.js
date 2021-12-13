import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default function App() {
  const [betet, setBetet] = useState();
  const [nevleges, setNevleges] = useState();
  const [tokesites_szam, setTokesites_szam] = useState();
  const [tenyleges_kamat, setTenyleges_kamat] = useState();

  function handleCalcButton(){
    let tenylegesKamat = (Math.pow(1+(nevleges/(100*tokesites_szam)),tokesites_szam)-1)*betet;
    setTenyleges_kamat(tenylegesKamat);
  }

  return (
    <View style={styles.container}>
      <Text>Kamatos kamat</Text>
      <Text>Betét:</Text>
      <TextInput 
        onChangeText={(betet)=>setBetet(betet)}
        placeholder='betét'
      />
      <Text>Névleges kamat (%):</Text>
      <TextInput 
        onChangeText={(nevleges)=>setNevleges(nevleges)}
        placeholder='névleges kamat'
      />
      <Text>Évenkénti tőkésítések szám:</Text>
      <TextInput 
        onChangeText={(tokesites_szam)=>setTokesites_szam(tokesites_szam)}
        placeholder='Évenkénti tőkésítések száma'
      />
      <TouchableHighlight
          style={styles.runButton}
          onPress={handleCalcButton}
          >
          <Text style={styles.runText}>Számít</Text>
      </TouchableHighlight>
      <Text>Tényleges kamat: {tenyleges_kamat}%</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  runButton: {
    backgroundColor: 'green',
    marginTop: 10,
    padding: 10,
    borderRadius: 30,
  },
  runText: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
  }
});
