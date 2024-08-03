import React, { useState } from "react";

const ImageSlideShow: React.FC<{
  images: string[];
  imageHeight: number;
  imageWidth: number;
}> = ({ images, imageHeight, imageWidth }) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  const onClickAdvance = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const nextImage = activeImage + 1;
    if (nextImage < images.length) {
      setActiveImage(nextImage);
    } else {
      setActiveImage(0);
    }
  };

  const onClickRegress = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const nextImage = activeImage - 1;
    if (nextImage >= 0) {
      setActiveImage(nextImage);
    } else {
      setActiveImage(images.length - 1);
    }
  };

  const onClickDot = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    if (index >= 0 && index < images.length) setActiveImage(index);
  };

  return (
    <div>
      <button onClick={onClickRegress}>{"<-"}</button>
      <img
        loading="lazy"
        role="presentation"
        decoding="async"
        fetchPriority="low"
        style={{ maxWidth: `${imageWidth}px`, maxHeight: `${imageHeight}px` }}
        src={images[activeImage]}
      ></img>
      <button onClick={onClickAdvance}>{"->"}</button>
      <div>
        {images.map((_, index) => (
          <button key={index} onClick={(e) => onClickDot(e, index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideShow;
