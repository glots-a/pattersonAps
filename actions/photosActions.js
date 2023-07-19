import axios from 'axios';

export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const LIKE_PHOTO = 'LIKE_PHOTO';

export const fetchPhotos = (albumId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
      );
      dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };
};

export const likePhoto = (photoId) => {
  return { type: LIKE_PHOTO, payload: photoId };
};
