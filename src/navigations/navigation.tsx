import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface INavigation {
  title: string;
  leftText: string;
  onPressLeftText: () => void;
}

export function NavigationBar({
  title,
  leftText,
  onPressLeftText
}: INavigation) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftText} onPress={onPressLeftText}>
        <Text>{leftText}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "500"
  },
  leftText: {
    position: "absolute",
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: "center"
  }
});
