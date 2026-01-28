import "./Experience.css";
import ImageSlider from "./ImageSlider";

// Logos
import zodiacLogo from "../images/Zodiac.png";
import aksLogo from "../images/AKS.png";
import instructorLogo from "../images/instructor.png";
import archiveLogo from "../images/archive.jpg";
import financeLogo from "../images/Finance.jpg";

// Zodiac photos
import zodiac1 from "../images/groupzodiac.jpg";
import zodiac2 from "../images/groupzodiac2.jpg";
import zodiac3 from "../images/groupzodiac3.avif";

// AKS photos
import aks1 from "../images/aks1.jpeg";
import aks2 from "../images/aks2.jpeg";
import aks3 from "../images/aks3.jpeg";

// RMA photos
import rma1 from "../images/rma1.jpeg";
import rma2 from "../images/rma2.PNG";
import rma3 from "../images/rma3.jpeg";

// NSF photos
import nsf1 from "../images/nsf1.JPEG";
import nsf2 from "../images/nsf2.PNG";

export default function Experience() {
  return (
    <div className="experience-page">
      {/* Heading */}
      <div className="experience-heading">
        <h2>Industrial Experiences</h2>
      </div>

      {/* Industrial Experience */}
      <div className="experience-box">
        <h4>Industrial Experience</h4>

        <div className="experience-info">
          {/* Zodiac */}
          <div className="experience-item">
            <a
              href="https://cphlbd.com/portfolio/zodiac-power-chittagong-ltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={zodiacLogo} alt="Zodiac Logo" className="experience-logo" />
            </a>

            <div className="experience-text">
              <p className="experience-title">
                <strong>Zodiac Power Chittagong Ltd. – Mechanical Intern</strong>
              </p>
              <p className="experience-duration">Duration: Jan 2023 – Apr 2023</p>
              <ul>
                <li>HFO-based power generation systems</li>
                <li>Operation and maintenance of boilers</li>
                <li>Cooling towers and auxiliary systems</li>
              </ul>
            </div>

            <ImageSlider images={[zodiac1, zodiac2, zodiac3]} />
          </div>

          {/* AKS */}
          <div className="experience-item">
            <a
              href="https://abulkhairsteel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={aksLogo} alt="AKS Logo" className="experience-logo" />
            </a>

            <div className="experience-text">
              <p className="experience-title">
                <strong>Abul Khair Steel (AKS) – Industrial Visit</strong>
              </p>
              <p className="experience-duration">Duration: Feb 2023</p>
              <ul>
                <li>Rolling and casting processes</li>
                <li>Metallurgical quality control</li>
              </ul>
            </div>

            <ImageSlider images={[aks1, aks2, aks3]} />
          </div>
        </div>
      </div>

      {/* Teaching & Leadership */}
      <div className="experience-box">
        <h4>Extra-Curricular Activities</h4>

        <div className="experience-info">
          {/* Instructor */}
          <div className="experience-item">
            <img src={instructorLogo} alt="Instructor Logo" className="experience-logo" />

            <div className="experience-text">
              <p className="experience-title">
                <strong>Math Instructor, Guideline Academic Care</strong>
              </p>
              <p className="experience-duration">Duration: Sep 2024– Dec 2024</p>
              <ul>
                <li>Prepared and delivered lessons</li>
                <li>Monitored student progress</li>
                <li>Provided extra academic support</li>
              </ul>
            </div>
          </div>

          {/* RMA */}
          <div className="experience-item">
            <img src={archiveLogo} alt="RMA Logo" className="experience-logo" />

            <div className="experience-text">
              <p className="experience-title">
                <strong>Archive Secretary, Robo Mechatronics Association (RMA), CUET</strong>
              </p>
              <p className="experience-duration">Duration: Aug 2023– Aug 2024</p>
              <ul>
                <li>Organized meetings and records</li>
                <li>Assisted in workshops and events</li>
                <li>Managed documentation</li>
              </ul>
            </div>

            <ImageSlider images={[rma1, rma2, rma3]} />
          </div>

          {/* NSF */}
          <div className="experience-item">
            <img src={financeLogo} alt="Finance Logo" className="experience-logo" />

            <div className="experience-text">
              <p className="experience-title">
                <strong>Finance Secretary, NSF, CUET</strong>
              </p>
              <p className="experience-duration">Duration: May 2023– Aug 2024</p>
              <ul>
                <li>Managed budgets and reports</li>
                <li>Monitored fund allocation</li>
                <li>Coordinated with vendors</li>
              </ul>
            </div>

            <ImageSlider images={[nsf1, nsf2]} />
          </div>
        </div>
      </div>
    </div>
  );
}
