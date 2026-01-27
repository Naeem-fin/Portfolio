import "./About.css";

// Images for Books & Movies
import book1 from "../images/book1.jpg";
import book2 from "../images/book2.jpg";
import book3 from "../images/book3.jpg";
import movie1 from "../images/movie1.jpg";
import movie2 from "../images/movie2.jpg";
import movie3 from "../images/movie3.jpg";

export default function About() {
  return (
    <div className="about-page">
      {/* Page Title */}
      <div className="about-heading">
        About Me
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

      {/* Technical / Software Skills */}
      <div className="about-box">
        <div className="box-heading">Technical & Software Skills</div>
        <div className="box-content">
          <ul>
            <li><strong>Simulation & CAD:</strong> ANSYS, COMSOL, SolidWorks, AutoCAD, Simulink</li>
            <li><strong>Programming:</strong> FORTRAN, C, Python, C++, Java</li>
            <li><strong>Data Analysis:</strong> Origin Pro, Excel</li>
            <li><strong>Numerical Tools:</strong> MATLAB</li>
            <li><strong>Others:</strong> LaTeX, Arduino, MS Office</li>
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
          </div>
        </div>
      </div>
    </div>
  );
}
