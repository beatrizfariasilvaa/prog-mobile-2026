import { Image, Text, View } from "react-native"

export default function Dado({valor}) {
    if (valor==1){
        return <View> 
            <Image source={require('../../assets/images/1.png')} style={{ width: 50, height: 50}}/>
        </View>
    } else if (valor==2){
        return <View> 
            <Image source={require('../../assets/images/2.png')} style={{ width: 50, height: 50}} />
        </View>
    } else if (valor==3){
        return <View> 
            <Image source={require('../../assets/images/3.png')} style={{ width: 50, height: 50}} />
        </View>
    } else if (valor==4){
        return <View> 
            <Image source={require('../../assets/images/4.png')} style={{ width: 50, height: 50}}/>
        </View>
    } else if (valor==5){
        return <View> 
            <Image source={require('../../assets/images/5.png')} style={{ width: 50, height: 50}} />
        </View>
    } else if (valor==6){
        return <View> 
            <Image source={require('../../assets/images/6.png')} style={{width: 50, height: 50}}/>
        </View>
    } else {
        return <View>
            <Text> Erro! Você não inseriu o número corretamente. </Text>
        </View>
        
    }


        
}