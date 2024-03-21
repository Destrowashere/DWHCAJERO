import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Input from '../components/input';
const RegistroVenta = () => {
  const [cliente, setCliente] = useState('');
  const [valorVenta, setValorVenta] = useState('');
  const [fechaVenta, setFechaVenta] = useState('');
  const [fechaFormateada, setFechaFormateada] = useState('');

  const handleGuardarVenta = () => {
    console.log('Cliente:', cliente);
    console.log('Valor de venta:', valorVenta);
    console.log('Fecha de venta:', fechaVenta);
  };

  const formatFecha = (input) => {
    if (input.length <= 8) {
      const formattedDate = input
        .replace(/\D/g, '')
        .replace(/^(\d{2})?(\d{2})?(\d{0,4})?$/, (match, p1, p2, p3) => {
          return [p1, p2, p3].filter(Boolean).join('/');
        });
      setFechaVenta(formattedDate);
      setFechaFormateada(formattedDate); // Actualiza la fecha formateada en tiempo real
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Cliente"
        placeholder="Ingresa el cliente (números)"
        keyboardType="numeric"
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
      <Input
        label="Fecha de venta"
        placeholder="Ingresa la fecha de venta (DDMMYYYY)"
        keyboardType="numeric"
        value={fechaVenta}
        onChangeText={formatFecha}
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
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
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
