import { StatusBar, } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  
  //const [count, setCount] = useState(0);
 
  //const [nomes, setNomes] = useState('')
  const nomes = ["Ana Maria", "Bruno  Alves", 'Carlos José', 'Daniel Martins', 'Efraim Gomes', 'Francisco Junior' ]

  function handleOnPress(){
    console.log(nomes); 
  }


  

  return (
    <View style={styles.container}>
     
    

    <TouchableOpacity onPress={handleOnPress}>
      Clique aqui
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    color:'black',
    width:'25%',
    borderWidth:1,
    borderRadius:8,
    borderColor:'grey',
    padding:6,
    fontSize:13
  },
  inputText:{
    fontSize:13,
    margin:5,
    marginTop:10
  },
  title:{
    fontSize:20,
    margin:15,
  },
  button:{
    margin:20,
    width:'25%',
  }

});
