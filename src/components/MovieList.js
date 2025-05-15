import React from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const cardWidth = (windowWidth - 60) / 4; // Four cards per row with padding

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.imdbID}
      numColumns={4}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.row}
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
  row: {
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  card: {
    marginVertical: 8,
    width: cardWidth,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#ffffff',
    marginLeft: 4,
    marginRight: 4,
  },
  cardCover: {
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
    lineHeight: 18,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});

export default MovieList;
