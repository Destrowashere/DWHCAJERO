import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RoundedButton } from "../components/button";
import Main from "./main";
import existente from "./existente";

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToCajeroRegister = () => {
    navigation.navigate("Main"); // Mantiene la navegación para el primer botón
  };

  const navigateToCajeroExistente = () => {
    navigation.navigate("existente"); // Cambia la navegación para el tercer botón
  };

  const navigateToVentaRegister = () => {
    navigation.navigate("VentaRegistro")  
  }

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.text}>BIENVENIDO</Text>

        <RoundedButton
          text="Registrar Cajero"
          onPress={navigateToCajeroRegister}
        />

        <RoundedButton
          text="Registrar Venta"
          onPress={navigateToVentaRegister}
        />
        <RoundedButton
          text="Consultar Cajero"
          onPress={navigateToCajeroExistente} // Cambia la función para el tercer botón
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    gap: 15,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 35,
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default HomeScreen;
