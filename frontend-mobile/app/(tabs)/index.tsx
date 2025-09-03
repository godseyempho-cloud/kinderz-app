import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext"; // adjust path if needed

export default function HomeScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Kinderz 🎉</Text>
      {user && (
        <Text style={styles.subtitle}>
          Logged in as: {user.email} ({user.role})
        </Text>
      )}
      <Text style={styles.logout} onPress={logout}>
        Logout
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  logout: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});
