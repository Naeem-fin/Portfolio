import { useState } from "react";
import "./Home.css";

// Import images from src/images folder
import photo1 from "../images/photo-1.png";
import photo2 from "../images/photo-2.png";
import photo3 from "../images/photo-3.png";

const photos = [photo1, photo2, photo3];

export default function Home() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home-page">
      {/* Background Banner */}
      <div className="home-banner">
        <h1>Md. Mamunur Rahman</h1>
        {/* <p>Prospective PhD Student | Mechanical Engineering</p> */}
        <p>B.Sc. in Mechanical Engineering</p>
        <p>Chittagong University of Engineering and Technology</p>
      </div>

      {/* Main Content */}
      <div className="home-content">
        {/* Left: Photo Slider */}
        <div className="photo-slider">
          <img
            src={photos[currentPhoto]}
            alt={`Profile ${currentPhoto + 1}`}
            className="slider-photo"
          />

          {/* Overlay Buttons */}
          <button className="nav-button prev" onClick={prevPhoto}>
            &lt;
          </button>
          <button className="nav-button next" onClick={nextPhoto}>
            &gt;
          </button>
        </div>

        {/* Right: Text */}
        <div className="home-text">
          <p>
            I am a prospective PhD student in Mechanical Engineering with
            strong research interests in computational fluid dynamics (CFD),
            thermal management, and energy systems.
          </p>
          <p>
            I earned my B.Sc. in Mechanical Engineering from Chittagong
            University of Engineering and Technology (CUET), ranking within
            the top 12% of my cohort.
          </p>
          <p>
            I have authored multiple research manuscripts currently under
            review in Q1 journals and seek doctoral training focused on
            simulation-driven thermal system optimization.
          </p>
        </div>
      </div>
    </div>
  );
}
