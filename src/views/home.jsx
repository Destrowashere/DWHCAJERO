import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RoundedButton } from "../components/button";
import Main from "./main";
import Existente from "./existente";

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToCajeroRegister = () => {
    navigation.navigate("Main"); 
  };

  const navigateToCajeroExistente = () => {
    navigation.navigate("Existente"); 
  };

  const navigateToVentaRegister = () => {
    navigation.navigate("VentaRegistro")  
  }

  const navigateToTableCajero = () => {
    navigation.navigate("Cajeros existentes")  
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
          onPress={navigateToTableCajero} 
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
