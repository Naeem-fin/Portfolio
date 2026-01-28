import "./About.css";

// Images for Books, Movies, and Series
import book1 from "../images/book1.jpg";
import book2 from "../images/book2.jpg";
import book3 from "../images/book3.jpg";

import movie1 from "../images/movie1.jpg";
import movie2 from "../images/movie2.jpg";
import movie3 from "../images/movie3.jpg";
import movie4 from "../images/movie4.jpg"; // new
import movie5 from "../images/movie5.jpg"; // new
import movie6 from "../images/movie6.jpg"; // new

import series1 from "../images/series1.jpg"; // new box
import series2 from "../images/series2.jpg";
import series3 from "../images/series3.jpg";
import series4 from "../images/series4.webp";
import series5 from "../images/series5.jpg";
import series6 from "../images/series6.jpg"; // new

export default function About() {
  return (
    <div className="about-page">
      {/* Page Title */}
      <div className="about-heading">
        About Me
      </div>

      {/* Personal Hobbies / Interests */}
      <div className="about-intro">
        <p>
          Outside of research, I enjoy staying active and exploring new experiences. 
          I like playing cricket, football, and badminton, and I also enjoy cycling 
          as part of my fitness routine. Traveling allows me to discover new places 
          and cultures, while in my free time I enjoy reading books and watching movies 
          and TV series.
        </p>
      </div>

      {/* Personal Skills */}
      <div className="about-box">
        <div className="box-heading">My Personal Skills</div>
        <div className="box-content">
          <ul>
            <li>Team Leader</li>
            <li>Public Speaking</li>
            <li>Decision Making</li>
            <li>Project Management</li>
            <li>Traveler and Explorer</li>
            <li>Problem-solving & Analytical Thinking</li>
            <li>Team Collaboration & Communication</li>
            <li>Time Management & Organization</li>
          </ul>
        </div>
      </div>

      {/* Favorite Books */}
      <div className="about-box">
        <div className="box-heading">My Favourite Books</div>
        <div className="box-content">
          <div className="image-row">
            <img src={book1} alt="Book 1" className="row-image" />
            <img src={book2} alt="Book 2" className="row-image" />
            <img src={book3} alt="Book 3" className="row-image" />
          </div>
        </div>
      </div>

      {/* Favorite Movies */}
      <div className="about-box">
        <div className="box-heading">My Favourite Movies</div>
        <div className="box-content">
          <div className="image-row">
            <img src={movie1} alt="Movie 1" className="row-image" />
            <img src={movie2} alt="Movie 2" className="row-image" />
            <img src={movie3} alt="Movie 3" className="row-image" />
            <img src={movie4} alt="Movie 4" className="row-image" />
            <img src={movie5} alt="Movie 5" className="row-image" />
            <img src={movie6} alt="Movie 6" className="row-image" />
          </div>
        </div>
      </div>

      {/* Favorite TV Series */}
      <div className="about-box">
        <div className="box-heading">My Favourite TV Series</div>
        <div className="box-content">
          <div className="image-row">
            <img src={series1} alt="Series 1" className="row-image" />
            <img src={series2} alt="Series 2" className="row-image" />
            <img src={series3} alt="Series 3" className="row-image" />
            <img src={series4} alt="Series 4" className="row-image" />
            <img src={series5} alt="Series 5" className="row-image" />
            <img src={series6} alt="Series 6" className="row-image" />
          </div>
        </div>
      </div>

    </div>
  );
}
