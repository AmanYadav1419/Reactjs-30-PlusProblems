// question:- Build a basic image gallery with useReducer to allow users to navigate between images and display the current image.

import React, { useReducer } from "react";

const ImageGallery = () => {
  // initial state
  const initialState = () => {
    currentImageIndex: 0;
  };

  // reduer function
  const imageReducer = (state, action) => {
    switch (action.type) {
      case "PREVIOUS_IMAGE":
        return {
          currentImageIndex: state.currentImageIndex - 1,
        };

      case "NEXT_IMAGE":
        return {
          currentImageIndex: state.currentImageIndex + 1,
        };

      default:
        return state;
    }
  };

  // array of images
  const images = [
    "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
    "https://wallpapers.com/images/hd/marvel-pictures-a8zqSu8qw3ega7cx.jpg",
    "https://upload.wikimedia.org/wikimedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg",
  ];

  // reducer hook
  const [image, dispatch] = useReducer(imageReducer, initialState);

  const currentImage = images[state.currentImageIndex];

  return (
    <div>
      <h1>Marvel Image Gallery</h1>
      <div>
        <img src={currentImage} />
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
