import React, { useReducer } from "react";

const ImageGallery = () => {
  // initial state
  const initialState = {
    currentImageIndex: 0,
  };

  // reducer function
  const imageReducer = (state, action) => {
    switch (action.type) {
      case "PREVIOUS_IMAGE":
        return {
          ...state,
          currentImageIndex:
            state.currentImageIndex > 0
              ? state.currentImageIndex - 1
              : state.currentImageIndex, // Prevent going out of bounds
        };

      case "NEXT_IMAGE":
        return {
          ...state,
          currentImageIndex:
            state.currentImageIndex < images.length - 1
              ? state.currentImageIndex + 1
              : state.currentImageIndex, // Prevent going out of bounds
        };

      default:
        return state;
    }
  };

  // array of images
  const images = [
    "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
    "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
    "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
    "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
  ];

  // reducer hook
  const [state, dispatch] = useReducer(imageReducer, initialState);

  const currentImage = images[state.currentImageIndex];

  return (
    <div>
      <h1>Marvel Image Gallery</h1>
      <div>
        <img src={currentImage} alt="Marvel" />
      </div>

      <div>
        <button onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}>
          Prev
        </button>
        <button onClick={() => dispatch({ type: "NEXT_IMAGE" })}>Next</button>
      </div>
    </div>
  );
};

export default ImageGallery;
