import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Search for a movie..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.input}
        theme={{
          colors: {
            primary: '#6200ee',
            text: '#212121',
            background: '#ffffff',
            placeholder: '#757575',
          },
        }}
        left={<TextInput.Icon icon="movie-search" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    fontSize: 16,
    elevation: 2, // Shadow effect
  },
});

export default SearchBar;
