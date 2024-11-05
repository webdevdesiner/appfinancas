import { View, Text } from 'react-native';
import Header from '../components/Header';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth'

export default function HomeScreen() {
  const { nome, user } = useContext(AuthContext)


  return (
    //  <Header/>
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Pagina de Pedidos</Text>
      {/* <Text>Nome: {nome}</Text> */}
      <Text>Email logado: {user.email}</Text>
    </View>
  );
}