import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Input from '../components/input';

const RegistroVenta = () => {
  const [cliente, setCliente] = useState('');
  const [valorVenta, setValorVenta] = useState('');
  const [fechaVenta, setFechaVenta] = useState('');

  const handleGuardarVenta = () => {
    console.log('Cliente:', cliente);
    console.log('Valor de venta:', valorVenta);
    console.log('Fecha de venta:', fechaVenta);
  };

  const formatFecha = (input) => {
    // Si la longitud del input es menor o igual a 8, formatear la fecha
    if (input.length <= 8) {
      const formattedDate = input
        .replace(/\D/g, '') // Eliminar caracteres no numéricos
        .replace(/^(\d{2})?(\d{2})?(\d{0,4})?$/, (match, p1, p2, p3) => {
          // Agregar las barras entre el día, mes y año
          return [p1, p2, p3].filter(Boolean).join('/');
        });
      setFechaVenta(formattedDate);
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
});

export default RegistroVenta;