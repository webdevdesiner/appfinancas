import React, {useState} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Moviments({data}) {

    const [mostrarValor, setMostrarValor] = useState(false); //usestate para mostrar ou não o valor (que foi feito como um botão touchopacity)

 return (
   <TouchableOpacity style={styles.container} onPress={ () =>  setMostrarValor(!mostrarValor)}>
    {/* // onPress ao clicar faz a função toogle alternado o usestate para true ou false */}
    <Text style={styles.date}>{data.date}</Text>

    <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

       { mostrarValor === true ? ( //aqui estamos usando o useState mostrar ou não mostrar o valor  
         <Text style={data.type === 1 ? styles.value : styles.expences} // se esta verdadeiro esconde, nos setamos o useState para começar false
         >{data.type ===1 ? `R$ ${data.value}` : `R$ -${data.value}`}</Text>
       ) : // se não esta verdadeiro mostrar view abaixo vazia
       (<View style={styles.skeleton}></View>)
       }

    </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor:'#DADADA', //#DADADA
    },     
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    date:{
        color:'#DADADA',
        fontWeight:'bold'
    },
    label:{
        fontWeight: 'bold',
        fontSize: 16
    },
    value:{
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    expences:{
        color:'#e74c3c'
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor:'#DADADA',
        borderRadius: 8

    }
})