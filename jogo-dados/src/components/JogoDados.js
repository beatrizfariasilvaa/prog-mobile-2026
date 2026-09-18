import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Dado from "./Dado";

export default function JogoDados(){
    const [dado1, setdado1]=useState(1);
    const [dado2, setdado2]=useState(1);

    const [dado3, setdado3]=useState(1);
    const [dado4, setdado4]=useState(1);

    const [vezdo1, setvezdo1]=useState(true);

    const [rodada, setrodada]=useState(1);
    const [pontos1, setpontos1]=useState(0);
    const [pontos2, setpontos2]=useState(0);
    const [vencedor, setvencedor]=useState("");

    function jogar(){
        const aleatorio1=Math.floor(Math.random()*6)+1;
        const aleatorio2=Math.floor(Math.random()*6)+1;

        if (vezdo1){
            setdado1(aleatorio1);
            setdado2(aleatorio2);
            setvezdo1(false);
        } else {
            setdado3(aleatorio1);
            setdado4(aleatorio2);
            setvezdo1(true);
            setrodada(rodada+1);
            if (dado1+dado2>aleatorio1+aleatorio2){
                setpontos1(pontos1+1);
                setvencedor("Jogador 1");
            } else if (aleatorio1+aleatorio2>dado1+dado2) {
                setpontos2(pontos2+1);
                setvencedor("Jogador 2");                  
            } else {
                setpontos1(pontos1+0);
                setpontos2(pontos2+0);
                setvencedor("Empate"); 
        }
    }
}

    function reinicio(){
        setdado1(1);
        setdado2(1);
        setdado3(1);
        setdado4(1); 

        setvezdo1(true);
        setvencedor("");
        setrodada(1);
        setpontos1(0);
        setpontos2(0);

    }

    



return (
        <View>
        {rodada<=5 ? 
        <View style={styles.moldura}>
            <Text style={styles.tituloRodada}>Rodada {rodada}</Text>
            <View style={styles.linhaJogadores}>
                <View style={styles.blocoJogador}>
                    <Text style={styles.nomeJogador}>Jogador 1</Text>
                    <View style={styles.linhaDados}>
                        <Dado valor={dado1} />
                        <Dado valor={dado2} />
                    </View>
                    <Text>Soma: {dado1 + dado2}</Text>
                    <Text>{vencedor=="Jogador 1" ? "Jogador 1 Venceu" : vencedor=="Jogador 2" ? "Jogador 1 Perdeu" : vencedor=="" ? null : "Empate"}</Text>
                    <Pressable style={styles.botao} onPress={jogar} disabled={!vezdo1}>
                        <Text>Jogar Dado</Text>
                    </Pressable>
                </View>

                <View style={styles.blocoJogador}>
                    <Text style={styles.nomeJogador}>Jogador 2</Text>
                    <View style={styles.linhaDados}>
                        <Dado valor={dado3} />
                        <Dado valor={dado4} />
                    </View>
                    <Text>Soma: {dado3 + dado4}</Text>
                    <Text>{vencedor=="Jogador 2" ? "Jogador 2 Venceu" : vencedor=="Jogador 1" ? "Jogador 2 Perdeu" : vencedor=="" ? null : "Empate"}</Text>
                    <Pressable style={styles.botao} onPress={jogar} disabled={vezdo1}>
                        <Text>Jogar Dado</Text>
                    </Pressable>
                </View>
            </View>
        </View>
            :
                <View style={styles.telaFinal}>
                    <Text style={styles.tituloRodada}>Fim do jogo</Text>
                    <Text>{pontos1>pontos2 ? "Venceu o jogador 1": pontos2>pontos1 ? "Venceu o jogador 2" : "Empate geral"}</Text>
                    <Pressable style={styles.botao} onPress={reinicio}>
                        <Text>Jogar Novamente</Text>
                    </Pressable>
                </View>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    moldura: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 15,
        padding: 15,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    tituloRodada: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    linhaJogadores: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    blocoJogador: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        flex: 1,
    },
    nomeJogador: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    linhaDados: {
        flexDirection: 'row',
        gap: 4,
    },
    botao: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginTop: 4,
    },
    telaFinal: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 20,
    },
});