import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface ILocation {
  placeholder: string;
  onSubmit: (location: string) => void;
}

export function SearchInput({ placeholder, onSubmit }: ILocation) {
  const [location, setLocation] = useState<string>("");

  const handleChangeText = (newLocation: string): void => {
    setLocation(newLocation);
  };

  const handleSubmitEditing = (): void => {
    if (!location) return;

    onSubmit(location);
    setLocation("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        value={location}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        placeholderTextColor={"white"}
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    marginTop: 20,
    width: 300,
    backgroundColor: "#666",
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textInput: {
    flex: 1,
    color: "white",
    fontSize: 15
  }
});
