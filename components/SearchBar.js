import React from 'react';
import { TextInput } from 'react-native-paper';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextInput
      mode="outlined"
      label="Search Movies"
      value={searchQuery}
      onChangeText={setSearchQuery}
      style={{ margin: 10 }}
    />
  );
};

export default SearchBar;
