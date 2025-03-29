import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.imdbID}
      renderItem={({ item }) => (
        <Card onPress={() => onSelectMovie(item)} style={styles.card}>
          <Card.Cover source={{ uri: item.Poster }} style={styles.cardCover} />
          <Card.Content>
            <Title>{item.Title}</Title>
            <Paragraph>{item.Year}</Paragraph>
          </Card.Content>
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 4,
  },
  cardCover: {
    height: 200,
  },
});

export default MovieList;
