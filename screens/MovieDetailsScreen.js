import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={styles.details}>Year: {movie.Year}</Text>
      <Text style={styles.details}>Genre: {movie.Genre}</Text>
      <Text style={styles.details}>Rating: {movie.imdbRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default MovieDetailsScreen;