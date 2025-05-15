import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, StatusBar, SafeAreaView } from 'react-native';
import { Text, Divider, Surface } from 'react-native-paper';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const API_KEY = 'b42b3861'; // Replace with your OMDb API key

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      fetchMovies(query);
    } else {
      setMovies([]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#6200ee" />
      <Surface style={styles.container}>
        <Text style={styles.header}>🎬 Movie Search</Text>
        <Divider style={styles.divider} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} />
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#6200ee" />
        </View>
      ) : (
        <MovieList
          movies={movies}
          onSelectMovie={(movie) => navigation.navigate('MovieDetails', { movie })}
        />
      )}
      </Surface>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#6200ee',
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f4f8',
    padding: 16,
    elevation: 2,
    borderRadius: 8,
    margin: 8,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  divider: {
    marginBottom: 16,
    backgroundColor: '#6200ee',
    height: 2,
  },
});

export default HomeScreen;
