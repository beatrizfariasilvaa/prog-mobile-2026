import { Text, View, Image } from "react-native";

export default function Profile() {
  return (
    <View>
      <Image 
        source={require('../assets/images/foto-pessoal.jpeg')}
        style={{width:100, height: 100, alignContent:'center'}}
      />

      <Text style={{ fontWeight: "bold"}}>Beatriz Farias Silva</Text>
    </View>
  );
}