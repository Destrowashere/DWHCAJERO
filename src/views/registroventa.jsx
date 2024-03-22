import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native'; // Importamos Alert desde 'react-native'
import { Picker } from '@react-native-picker/picker';

import Input from '../components/input';

const RegistroVenta = () => {
  const [cajeros, setCajeros] = useState([]);
  const [cajeroId, setCajeroId] = useState('');
  const [cliente, setCliente] = useState('');
  const [valorVenta, setValorVenta] = useState('');
  const [fechaVenta, setFechaVenta] = useState('');
  const [fechaFormateada, setFechaFormateada] = useState('');

  useEffect(() => {
    const fetchCajeros = async () => {
      try {
        const response = await fetch('http://192.168.20.47:3500/cajero');
        if (response.ok) {
          const data = await response.json();
          setCajeros(data.cajeros);
        } else {
          throw new Error('Error al cargar los cajeros');
        }
      } catch (error) {
        console.error('Error al cargar los cajeros:', error);
      }
    };

    fetchCajeros();
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setFechaVenta(formattedDate);
    setFechaFormateada(formattedDate);
  }, []);

  function RegistrarVenta() {
    const url = 'http://192.168.20.47:3500/ventas';

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cajero: cajeroId,
        cliente: cliente,
        valor: valorVenta,
        fecha: fechaVenta,
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        // Verificamos si la venta se insertó correctamente
        if (json.mensaje === 'Venta registrada') {
          // Mostramos una alerta indicando que la venta se ha registrado correctamente
          Alert.alert('Venta Registrada', 'La venta se ha registrado correctamente');
        } else {
          console.error('Error al registrar la venta:', json.error);
          Alert.alert('Error', 'Hubo un error al registrar la venta. Por favor, inténtelo de nuevo.');
        }
      })
      .catch((err) => {
        console.error('Error al registrar la venta:', err);
        Alert.alert('Error', 'Hubo un error al registrar la venta. Por favor, inténtelo de nuevo.');
      });
  }

  const handleGuardarVenta = () => {
    RegistrarVenta();
  };

  const formatFecha = (input) => {
    if (input.length <= 8) {
      const formattedDate = input
        .replace(/\D/g, '')
        .replace(/^(\d{2})?(\d{2})?(\d{0,4})?$/, (match, p1, p2, p3) => {
          return [p1, p2, p3].filter(Boolean).join('/');
        });
      setFechaVenta(formattedDate);
      setFechaFormateada(formattedDate);
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={cajeroId}
        style={styles.picker}
        onValueChange={(itemValue) => setCajeroId(itemValue)}
      >
        <Picker.Item label="Seleccione un cajero" value="" />
        {cajeros.map((cajero) => (
          <Picker.Item key={cajero.id} label={cajero.nombre} value={cajero.id} />
        ))}
      </Picker>
      <Input
        label="Nombre Cliente"
        placeholder="Nombre cliente"
        value={cliente}
        onChangeText={setCliente}
      />
      <Input
        label="Valor de venta"
        placeholder="Ingresa el valor de la venta"
        keyboardType="numeric"
        value={valorVenta}
        onChangeText={setValorVenta}
      />
      <Text style={styles.fechaText}>{fechaFormateada}</Text>
      <TouchableOpacity style={styles.button} onPress={handleGuardarVenta}>
        <Text style={styles.buttonText}>Guardar Venta</Text>
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
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 20,
    backgroundColor: 'lightgray',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  fechaText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default RegistroVenta;
