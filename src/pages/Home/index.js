import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Moviments from '../components/Moviments';
import Actions from '../components/Actions';


const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '02/09/2022',
    type: 0 //0 = despesas ou gasto
  },
  {
    id: 2,
    label: 'Pix cliente X',
    value: '2.500,90',
    date: '14/09/2022',
    type: 1 // receita entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.200,00',
    date: '17/09/2022',
    type: 1 // receita entrada
  },
  {
    id: 4,
    label: 'Almoço',
    value: '49,15',
    date: '17/09/2022',
    type: 0 // receita entrada
  },
  {
    id: 5,
    label: 'PagBank',
    value: '3.200,00',
    date: '18/09/2022',
    type: 1 // receita entrada
  },
 
] // lista fake, substituir futuramente por dados im´poprtados de uma api


export default function Home() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto"/> esta deixando o status bar preto se ficar auto */}
        
      <Header name="Fernando Guedes"/>
      
      
      <Balance saldo="9.250,90" gastos="-527,00"/>


      <Actions/>
      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Moviments data={item}/> }
      

      />
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    // aqui é a cor de todo o background ativo da lista extrato
},
title:{
  fontSize:'18',
  fontWeight:'bold',
  margin: 14,

},
list:{
  marginStart: 14,
  marginEnd: 14
}


})
