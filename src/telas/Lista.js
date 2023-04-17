import { StyleSheet, Image, Text, Dimensions, View } from 'react-native';

import topo from '../../assets/breads.jpg';
import brioche from '../../assets/brioche.png';
import frances from '../../assets/frances.jpg';
import integral from '../../assets/integral.png';
import milho from '../../assets/milho.png';
import australiano from '../../assets/australiano.png';
import leite from '../../assets/leite.png'

const width = Dimensions.get('screen').width;

export default function Lista() {
    return <>
        <Image source={topo} style={estilos.topo} />
        {/* <Text style={estilos.fonteFoto}>Image by KamranAydinov on Freepik</Text> */}
        <Text style={estilos.titulo}>Boulanger</Text>

        <Text style={estilos.tituloCorpo}>Escolha a massa a ser produzida na lista abaixo</Text>
        
        <View style={estilos.corpo}> 
            <View style={estilos.itensCorpo}> 
                <Image source={brioche} style={estilos.fotos} />
                <Text style={estilos.itensCorpo}>Brioche</Text>
            </View>

            <View style={estilos.itensCorpo}> 
                <Image source={frances} style={estilos.fotos} />
                <Text style={estilos.itensCorpo}>Pão francês</Text>
            </View>
               
            <View style={estilos.itensCorpo}> 
                <Image source={leite} style={estilos.fotos} />
                <Text style={estilos.itensCorpo}>Pão de leite</Text>
            </View>
               
            <View style={estilos.itensCorpo}> 
                <Image source={integral} style={estilos.fotos} />
                <Text style={estilos.itensCorpo}>Pão Integral</Text>
            </View>

            <View style={estilos.itensCorpo}> 
                <Image source={australiano} style={estilos.fotos} />
                <Text style={estilos.itensCorpo}>Pão Australiano</Text>
            </View>

            <View style={estilos.itensCorpo}> 
                <Image source={milho} style={estilos.fotos} />
                <Text style={estilos.itensCorpo}>Pão de milho</Text>
            </View>


        </View>

    </>
}



const estilos = StyleSheet.create({
    // fonteFoto: {
    //     width: "100%",
    //     height: "100%",
    //     position: "absolute",
    //     top: 50,
    //     textAlign: "right",
    //     fontSize: 8,
    //     color: "white", 
    //     transform: [
    //         { rotate: '-90deg' },           
    //     ]    
    // },
    topo: {
        width: "100%",
        height: "30%",
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 32,
        lineHeight: 40,
        color: "white",
        fontWeight: "bold",
        padding: 50

    },
    tituloCorpo: {
        width: "100%",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 26,
        color: "black",
        fontFamily: "MontserratBold",
        paddingHorizontal: 10,

    },

    itensCorpo: {
        textAlign: "left",
        left: 10,
        fontSize: 16,
        lineHeight: 20,
        color: "black",
        fontWeight: "bold",
        flexDirection: "row",
        fontFamily: "MontserratRegular",
    },

    corpo: {
        padding: 14,

    },

    fotos: {
        width: 40,
        height: 40,
    },

});