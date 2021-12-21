import React, { useState, useEffect } from "react";
import hero from "../../assets/hero.jpg";
import camera from "../../assets/camera.jpg";

const ImageCycle = () => {
  const [idx, setIdx] = useState(0);
  const images = [hero, camera];

  const increment = () => {
    console.log(idx);
    let newIdx = idx;
    if (idx < images.length - 1) {
      newIdx++;
      setIdx((prevIdx) => prevIdx + 1);
    } else {
      setIdx(0);
    }
    return idx;
  };
  let num = 0;

  useEffect(() => {
    setInterval(increment, 5000);
  }, [idx]);

  return (
    <>
      <img src={images[idx]} className="hero-image" />
    </>
  );
};

export default ImageCycle;
