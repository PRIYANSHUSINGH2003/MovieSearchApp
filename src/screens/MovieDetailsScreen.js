import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: movie.Poster }} style={styles.poster} />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.Title}</Text>
          <Text style={styles.subtitle}>
            {movie.Genre} • {movie.Year}
          </Text>
          <Text style={styles.rating}>⭐ {movie.imdbRating} / 10</Text>

          <View style={styles.separator} />

          <Text style={styles.label}>🎬 Plot</Text>
          <Text style={styles.description}>{movie.Plot || 'No plot available.'}</Text>

          <Text style={styles.label}>🎥 Director</Text>
          <Text style={styles.description}>{movie.Director || 'Unknown'}</Text>

          <Text style={styles.label}>🎭 Actors</Text>
          <Text style={styles.description}>{movie.Actors || 'Unknown'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
  card: {
    backgroundColor: '#ffffff',
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  poster: {
    width: screenWidth - 32,
    height: 460,
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#263238',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#546E7A',
    marginBottom: 8,
  },
  rating: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF9800',
    marginBottom: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#CFD8DC',
    marginVertical: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#37474F',
    marginTop: 10,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#607D8B',
    lineHeight: 20,
  },
});

export default MovieDetailsScreen;
