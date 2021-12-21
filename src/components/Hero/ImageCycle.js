import React, { useState, useEffect } from "react";
import hero from "../../assets/hero.jpg";
import camera from "../../assets/camera.jpg";
import car from "../../assets/car.jpg";

const ImageCycle = () => {
  const [idx, setIdx] = useState(0);
  const images = [hero, camera, car];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (idx < images.length - 1) {
        setIdx(idx + 1);
      } else {
        setIdx(0);
      }
    }, 7000);
    return () => {
      clearTimeout(timer);
    };
  }, [idx]);

  return (
    <>
      <img src={images[idx]} className="hero-image" />
    </>
  );
};

export default ImageCycle;
