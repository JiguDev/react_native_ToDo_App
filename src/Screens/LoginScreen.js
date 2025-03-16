import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LoginScreen = () => {
  const navigation = useNavigation();

  GoogleSignin.configure({
    webClientId: "140461610855-jqh71u6f8nt61cts0o5f230c3s5lfutu.apps.googleusercontent.com", 
    offlineAccess: true,
  });
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      console.log("GoogleSignin.hasPlayServices", GoogleSignin.hasPlayServices);
      const { idToken } = await GoogleSignin.signIn();
      console.log("idToken", idToken);
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log("googleCredential", googleCredential);
      await auth().signInWithCredential(googleCredential);
      console.log("auth().signInWithCredential", auth().signInWithCredential);
      navigation.navigate("Main");
    } catch (error) {
      alert("Error", error.message);
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={require("../../assets/images/LogIn.jpg")}
          style={styles.backgroundLogo}
        >
          <Text style={styles.heading}>To Do App</Text>
          <Text style={styles.instruction}>
            Log In with your Google Account
          </Text>
          <GoogleSigninButton
          style={styles.button}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signInWithGoogle}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 56,
    position: "absolute",
    top: height * 0.01,
    fontFamily: "PlayfulTime-BLBB8",
  },
  instruction: {
    fontSize: 26,
    fontFamily: "ShinyCrystal-Yq3z4",
    position: "absolute",
    top: height * 0.73,
  },
  button: {
    position: "absolute",
    top: height * 0.8,
  },
  backgroundLogo: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 2,
    height: height,
    marginTop: height * 0.1,
  },
});
