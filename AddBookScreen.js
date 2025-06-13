// AddBookScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function AddBookScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [price, setPrice] = useState('');
  const [genre, setGenre] = useState('');

  const handleAddBook = async () => {
    try {
      const response = await axios.post('https://yourdomain.com/api/add_book.php', {
        title,
        author_id: authorId,
        price,
        genre,
      });
      Alert.alert('Success', 'Book added successfully');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to add book');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Author ID" value={authorId} onChangeText={setAuthorId} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Genre" value={genre} onChangeText={setGenre} style={styles.input} />
      <Button title="Add Book" onPress={handleAddBook} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 10 },
});
