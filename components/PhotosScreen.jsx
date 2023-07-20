import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Input, Box } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, likePhoto } from '../actions/photosActions';
import PhotoItem from './PhotoItem';

const PhotosScreen = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const photos = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.photos.loading);

  useEffect(() => {
    dispatch(fetchPhotos(1));
  }, [dispatch]);

  const onHandleLike = (photoId) => {
    dispatch(likePhoto(photoId));
  };

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const isSomethingFound = Boolean(filteredPhotos.length);

  return (
    <View
      style={{
        marginLeft: 10,
      }}
    >
      <Box alignItems="center">
        <Input
          my="5"
          placeholder="Search by title"
          w="95%"
          variant="rounded"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </Box>

      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <>
          {isSomethingFound ? (
            <FlatList
              data={filteredPhotos}
              renderItem={({ item }) => (
                <PhotoItem item={item} handleLike={onHandleLike} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          ) : (
            <Text>No photos found.</Text>
          )}
        </>
      )}
    </View>
  );
};

export default PhotosScreen;
