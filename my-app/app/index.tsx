import { Assets } from "@react-navigation/elements";
import { Text, View, Image } from "react-native";
import Profile from '../components/Profile.js';
import Minibio from '../components/MiniBio.js';

export default function Index() {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Minibio />
    </View>
  );
}

