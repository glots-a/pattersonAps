import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
  const likedPhotos = useSelector((state) => state.photos.likedPhotos);

  const renderPhotoItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Image
        source={{ uri: item.url }}
        style={{
          aspectRatio: 1,
          flex: 1,
          width: '100%',
          height: undefined,
          marginBottom: 10,
        }}
      />
      <Text>{item.title}</Text>
      <View
        style={{
          borderStyle: 'solid',
          borderWidth: 1,
          opacity: 0.1,
          flex: 1,
          width: '100%',
          height: undefined,
          marginBottom: 10,
          marginTop: 40,
        }}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        data={likedPhotos}
        renderItem={renderPhotoItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FavoritesScreen;
