import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
 const [count, setCount] = useState(0);
 const [count2, setCount2] = useState(0); 

 const incrementCount = () => {
    setCount(count + 1);
 };

 const incrementCount2 = () => { 
    setCount2(count2 + 1);
 };

 const zerar = () => {
    setCount(0);
    setCount2(0); 
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador em React Native</Text>
      <Text style={styles.count}>{count}</Text>
      <Button title="jogador1" onPress={incrementCount} />
      <Text style={styles.count}>{count2}</Text> 
      <Button title="jogador2" onPress={incrementCount2} /> 
      <Button title="Zerar" onPress={zerar} />
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
 },
 title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 count: {
    fontSize: 30,
    marginBottom: 20,
 },
});