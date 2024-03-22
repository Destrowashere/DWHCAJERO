import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import { Calendar } from "react-native-calendars";

const TableVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [filtroDia, setFiltroDia] = useState(false);
  const [filtroMes, setFiltroMes] = useState(false);
  const [mesSeleccionado, setMesSeleccionado] = useState("");
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [diaSeleccionado, setDiaSeleccionado] = useState("");
  const [totalVenta, setTotalVenta] = useState(0);
  const [cajero, setCajero] = useState("");

  useEffect(() => {
    fetch("http://192.168.20.47:3500/ventas")
      .then((response) => response.json())
      .then((data) => {
        setVentas(data.ventas);
        let total = 0;
        data.ventas.forEach((venta) => {
          total += venta.valor;
        });
        setTotalVenta(total);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filtrarVentasDia = () => {
    setMostrarCalendario(true);
    setFiltroDia(true);
    setFiltroMes(false);
  };

  const filtrarVentasMes = () => {
    let url = `http://192.168.20.47:3500/ventas/mes`;

    if (mesSeleccionado) {
      url += `?mes=${mesSeleccionado}`;
    } else {
      url = `http://192.168.20.47:3500/ventas`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setVentas(data.ventas);

        let total = 0;
        data.ventas.forEach((venta) => {
          total += venta.valor;
        });
        setTotalVenta(total);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    setFiltroMes(true);
    setFiltroDia(false);
  };

  const filtrarVentasPorDia = (fecha) => {
    fetch(`http://192.168.20.47:3500/ventas/dia?fecha=${fecha}`)
      .then((response) => response.json())
      .then((data) => {
        setVentas(data.ventas);
        let total = 0;
        data.ventas.forEach((venta) => {
          total += venta.valor;
        });
        setTotalVenta(total);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    setFiltroDia(true);
    setFiltroMes(false);
  };

  const filtrarVentasPorCajero = () => {
    fetch(`http://192.168.20.47:3500/ventas/cajero?cajero=${cajero}`)
      .then((response) => response.json())
      .then((data) => {
        setVentas(data.ventas);
        let total = 0;
        data.ventas.forEach((venta) => {
          total += venta.valor;
        });
        setTotalVenta(total);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const renderVentaItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.cajero}</Text>
      <Text style={styles.cell}>{item.cliente}</Text>
      <Text style={styles.cell}>{item.valor}</Text>
      <Text style={styles.cell}>{item.fecha}</Text>
      <Text style={styles.cell}>{item.factura}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Ventas del día" onPress={filtrarVentasDia} />
      </View>
      <View style={styles.buttonsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mes"
          keyboardType="numeric"
          value={mesSeleccionado}
          onChangeText={(text) => setMesSeleccionado(text)}
        />
        <Button title="Ventas del mes" onPress={filtrarVentasMes} />
      </View>
      <Text style={styles.total}>Total: {totalVenta}</Text>
      <View style={styles.buttonsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cajero"
          keyboardType="numeric"
          value={cajero}
          onChangeText={(text) => setCajero(text)}
        />
        <Button title="Consulta cajero" onPress={filtrarVentasPorCajero} />
      </View>
      {mostrarCalendario && (
        <Calendar
          onDayPress={(day) => {
            console.log(day.dateString);
            filtrarVentasPorDia(day.dateString);
            setMostrarCalendario(false);
          }}
        />
      )}
      <FlatList
        data={ventas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderVentaItem}
        ListHeaderComponent={() => (
          <View style={[styles.row, styles.header]}>
            <Text style={styles.cell}>ID</Text>
            <Text style={styles.cell}>Cajero</Text>
            <Text style={styles.cell}>Cliente</Text>
            <Text style={styles.cell}>Valor</Text>
            <Text style={styles.cell}>Fecha</Text>
            <Text style={styles.cell}>Factura</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    overflow:'scroll'
  },
  row: {
    flexDirection: "row",
    borderColor: "#000",
    borderWidth: 1,
    height: 60,
  },
  header: {
    backgroundColor: "#f0f0f0",
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    marginRight: 10,
  },
  total: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
});

export default TableVentas;
