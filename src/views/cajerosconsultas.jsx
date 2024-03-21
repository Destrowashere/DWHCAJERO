import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

const TableCajero = () => {
  const [cajeros, setCajeros] = useState([]);

  useEffect(() => {
    fetch('http://192.168.20.47:3500/cajero')
      .then(response => response.json())
      .then(data => {
        setCajeros(data.cajeros);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderCajeroItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.nombre}</Text>
      <Text style={styles.cell}>{item.carnet}</Text>
      <Text style={styles.cell}>{item.fecharegistro}</Text>
    </View>
  );

  return (
    <FlatList
      data={cajeros}
      keyExtractor={item => item.id.toString()}
      renderItem={renderCajeroItem}
      ListHeaderComponent={() => (
        <View style={[styles.row, styles.header]}>
          <Text style={styles.cell}>ID</Text>
          <Text style={styles.cell}>Nombre</Text>
          <Text style={styles.cell}>Carnet</Text>
          <Text style={styles.cell}>Fecha Registro</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 1,
  },
  header: {
    backgroundColor: '#f0f0f0',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
});

export default TableCajero;
