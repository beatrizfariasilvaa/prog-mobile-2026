import { Text, View, Image } from "react-native";
import Profile from './Profile.js';

export default function MiniBio() {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Profile />
        <Text style={{padding: 12}}> Sou uma pessoa curiosa, persistente e que gosta de aprender coisas novas. Gosto de entender como as coisas funcionam e não tenho problema em perguntar quando não sei algo. Estou sempre tentando melhorar e aprender um pouco mais. </Text>

    </View>
  );
}