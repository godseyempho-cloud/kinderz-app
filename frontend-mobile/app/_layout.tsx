import React from "react";
import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { AuthProvider, useAuth } from "../context/AuthContext"; // adjust path if needed
import { useColorScheme } from "@/hooks/useColorScheme";

function AuthGate() {
  const { user } = useAuth();

  return (
    <Stack>
      {user ? (
        // ✅ Logged in → load main tabs
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        // ✅ Not logged in → show login/signup
        <>
          <Stack.Screen name="(auth)/Login" options={{ title: "Login" }} />
          <Stack.Screen name="(auth)/SignUp" options={{ title: "Sign Up" }} />
        </>
      )}
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <AuthGate />
        <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
  );
}
