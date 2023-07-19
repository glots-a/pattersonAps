import { FETCH_PHOTOS_SUCCESS, LIKE_PHOTO } from '../actions/photosActions';

const initialState = {
  photos: [],
  likedPhotos: [],
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload };
    case LIKE_PHOTO:
      const updatedPhotos = state.photos.map((photo) => {
        if (photo.id === action.payload) {
          return { ...photo, liked: !photo.liked };
        }
        return photo;
      });
      const likedPhotos = updatedPhotos.filter((photo) => photo.liked);
      return { ...state, photos: updatedPhotos, likedPhotos };
    default:
      return state;
  }
};

export default photosReducer;
