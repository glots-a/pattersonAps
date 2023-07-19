import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const PhotoItem = ({ item, handleLike }) => (
  <View
    style={{
      flexDirection: 'row', 
      alignItems: 'center', 
      marginVertical: 10
    }}
  >
    <Image
      source={{ uri: item.thumbnailUrl }}
      style={{
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 3
      }}
    />
    <Text style={{ width: '70%', marginRight: 5 }}>{item.title}</Text>
    <TouchableOpacity onPress={() => handleLike(item.id)}>
      <Ionicons
        name={item.liked ? 'ios-heart' : 'ios-heart-outline'}
        size={24}
        color="red"
      />
    </TouchableOpacity>
  </View>
);

export default PhotoItem;