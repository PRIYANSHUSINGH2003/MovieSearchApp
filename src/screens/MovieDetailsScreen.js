import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: movie.Poster }} 
          style={[styles.poster, { width: screenWidth - 32 }]}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.Title}</Text>
          <Text style={styles.subtitle}>
            {movie.Genre} • {movie.Year}
          </Text>
          <Text style={styles.rating}>⭐ {movie.imdbRating} / 10</Text>
          
          <View style={styles.separator}></View>
          
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  card: {
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  poster: {
    height: 460,
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  rating: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F59E0B',
    marginBottom: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 8,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
});


export default MovieDetailsScreen;
