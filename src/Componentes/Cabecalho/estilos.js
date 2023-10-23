import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 20,
    height: 60,
    width: "100%",
    backgroundColor: "lightblue",
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: "row",
  },
  texto: {
    fontSize: 14,
    color: "black",
    marginStart:5,
  },
  botao: {
    position: "absolute",
    right: 20,
    backgroundColor: "black",
  },
});