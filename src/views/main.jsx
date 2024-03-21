import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Main = () => {
  const navigation = useNavigation();
  const [nombreTendero, setNombreTendero] = useState('');
  const [numeroCarnet, setNumeroCarnet] = useState('');
  const [fecha, setFecha] = useState('');

  const handleNombreTenderoChange = (text) => {
    setNombreTendero(text);
  };

  const handleNumeroCarnetChange = (text) => {
    setNumeroCarnet(text);
  };

  const handleFechaChange = (text) => {
    setFecha(text);
  };

  const handleButtonPress = () => {
    console.log('Nombre tendero:', nombreTendero);
    console.log('Número carnet:', numeroCarnet);
    console.log('Fecha:', fecha);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crea un cajero</Text>
      <Text style={styles.title2}>Inserta los datos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre tendero"
        value={nombreTendero}
        onChangeText={handleNombreTenderoChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Numero carnet"
        value={numeroCarnet}
        onChangeText={handleNumeroCarnetChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha (EJ: 02/03/24)"
        value={fecha}
        onChangeText={handleFechaChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Crear cajero</Text>
        
      </TouchableOpacity>
      <br />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('existente')} // Cambiar 'Existente' por el nombre correcto de tu pantalla existente
      >
        <Text style={styles.buttonText}>Cajero existente</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },title2: {
    fontSize: 10,
    fontWeight: '300',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '80%',
     backgroundColor:'lightgray',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Main;
