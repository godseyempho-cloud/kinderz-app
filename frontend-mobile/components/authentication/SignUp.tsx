import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

// Define allowed roles
type UserRole = "ECD" | "PROVINCIAL" | "DBE";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("ECD");

  const handleSignUp = () => {
    console.log("Signing up with:", { email, password, role });
    // TODO: Replace console.log with API call to your backend (PostgreSQL)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.label}>Select Role:</Text>
      <Picker
        selectedValue={role}
        onValueChange={(itemValue: UserRole) => setRole(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="ECD" value="ECD" />
        <Picker.Item label="PROVINCIAL" value="PROVINCIAL" />
        <Picker.Item label="DBE" value="DBE" />
      </Picker>

      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    marginBottom: 20,
  },
});
