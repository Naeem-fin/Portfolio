import { useEffect, useState } from "react";
import "./ImageSlider.css";

export default function ImageSlider({ images, interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="slider">
      <img src={images[index]} alt="Experience" />
      {images.length > 1 && (
        <>
          <button className="slider-btn left" onClick={prev}>‹</button>
          <button className="slider-btn right" onClick={next}>›</button>
        </>
      )}
    </div>
  );
}
