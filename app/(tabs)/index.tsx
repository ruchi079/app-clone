import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput,
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  Alert 
} from "react-native";

const App = () => {
  // State for user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Dummy authentication function
  const handleLogin = () => {
    if (username === "testuser" && password === "password123") {
      Alert.alert("Login Successful", "Welcome to Instagram!");
    } else {
      Alert.alert("Login Failed", "Invalid username or password.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Instagram Logo */}
      <Image 
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" }}
        style={styles.logo}
      />

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone number, username, or email"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <Text style={styles.forgotPassword}>Forgot your password?</Text>

      {/* OR Separator */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Login with Facebook */}
      <TouchableOpacity>
        <Text style={styles.fbLogin}>Log in with Facebook</Text>
      </TouchableOpacity>

      {/* Alert Button */}
      <TouchableOpacity style={styles.alertButton} onPress={() => Alert.alert("Alert Button pressed")}>
        <Text style={styles.alertButtonText}>Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#0095f6",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#0095f6",
    marginTop: 15,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    marginHorizontal: 10,
    color: "#aaa",
  },
  fbLogin: {
    color: "#385185",
    fontWeight: "bold",
  },
  alertButton: {
    marginTop: 40,
    backgroundColor: "#ff4444",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
  },
  alertButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
