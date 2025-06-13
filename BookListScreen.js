// BookDetailScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function BookDetailScreen({ route, navigation }) {
  const { book } = route.params;
  const [title, setTitle] = useState(book.title);
  const [authorId, setAuthorId] = useState(book.author_id.toString());
  const [price, setPrice] = useState(book.price.toString());
  const [genre, setGenre] = useState(book.genre);

  const updateBook = async () => {
    try {
      await axios.post('https://yourdomain.com/api/update_book.php', {
        book_id: book.book_id,
        title,
        author_id: authorId,
        price,
        genre,
      });
      Alert.alert('Success', 'Book updated');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to update book');
    }
  };

  const deleteBook = async () => {
    try {
      await axios.get(`https://yourdomain.com/api/delete_book.php?book_id=${book.book_id}`);
      Alert.alert('Deleted', 'Book removed');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to delete book');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput value={authorId} onChangeText={setAuthorId} style={styles.input} keyboardType="numeric" />
      <TextInput value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />
      <TextInput value={genre} onChangeText={setGenre} style={styles.input} />
      <Button title="Update Book" onPress={updateBook} />
      <View style={{ marginTop: 10 }}>
        <Button title="Delete Book" color="red" onPress={deleteBook} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 10 },
});
