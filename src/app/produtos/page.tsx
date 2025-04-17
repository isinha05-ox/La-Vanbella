import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import styles from './style'

const informações = () => {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/lasanha.png')} style={styles.image} />
      <Text style={styles.title}>Lasanha ao molho Branco</Text>
      <Text style={styles.price}>R$ 18,00</Text>
      <Text style={styles.description}>Lasanha com frango e molho branco.</Text>
      <Text style={styles.ingredientsTitle}>Ingredientes:</Text>
      <Text style={styles.ingredients}>• Massa{'\n'}• Frango{'\n'}• Molho Branco</Text>
      <Button title="ADICIONAR A SACOLA" color="brown" onPress={() => alert('Item adicionado!')}/>
    </View>
  );
};

export default informações;