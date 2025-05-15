import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.imdbID}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <Card
          onPress={() => onSelectMovie(item)}
          style={styles.card}
          mode="elevated"
        >
          <Card.Cover source={{ uri: item.Poster }} style={styles.cardCover} />
          <Card.Content style={styles.cardContent}>
            <Title style={styles.title}>{item.Title}</Title>
            <Paragraph style={styles.subtitle}>📅 {item.Year}</Paragraph>
          </Card.Content>
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  card: {
    marginVertical: 10,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#ffffff',
  },
  cardCover: {
    height: 220,
    resizeMode: 'cover',
  },
  cardContent: {
    paddingTop: 12,
    paddingBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default MovieList;
