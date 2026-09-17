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
    "https://www.pinterest.com/amshakalas/thor-wallpapers/",
    "https://i.pinimg.com/474x/c0/29/96/c02996c0bb6a313e0fed98e644037fb2.jpg",
    "https://i.pinimg.com/474x/6c/b0/b3/6cb0b325d88e83f155e10fcb4421fd78.jpg",
  ];

  // reducer hook
  const [state, dispatch] = useReducer(imageReducer, initialState);

  const currentImage = images[state.currentImageIndex];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Marvel Image Gallery</h1>
      <div>
        <img
          src={currentImage}
          alt="Marvel"
          style={{ width: "400px", height: "400px", objectFit: "cover", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
        />
      </div>

      <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
        <button
          onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}
          style={{ padding: "8px 24px", cursor: "pointer", borderRadius: "6px", border: "none", backgroundColor: "#3b82f6", color: "#fff", fontWeight: "bold" }}
        >
          Prev
        </button>
        <button
          onClick={() => dispatch({ type: "NEXT_IMAGE" })}
          style={{ padding: "8px 24px", cursor: "pointer", borderRadius: "6px", border: "none", backgroundColor: "#3b82f6", color: "#fff", fontWeight: "bold" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
