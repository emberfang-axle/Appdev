// CartScreen.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function CartScreen({ cartItems, userId, navigation }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const response = await axios.post('https://yourdomain.com/api/create_order.php', {
        user_id: userId,
        total_price: total,
        items: cartItems.map(item => ({
          book_id: item.book_id,
          quantity: item.quantity,
        })),
      });

      if (response.data.success) {
        Alert.alert('Order placed!');
        navigation.navigate('BookList');
      } else {
        Alert.alert('Error', 'Checkout failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.book_id.toString()}
        renderItem={({ item }) => (
          <Text>{item.title} x {item.quantity} - ₱{item.price * item.quantity}</Text>
        )}
      />
      <Text style={styles.total}>Total: ₱{total.toFixed(2)}</Text>
      <Button title="Checkout" onPress={handleCheckout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 10 }
});
