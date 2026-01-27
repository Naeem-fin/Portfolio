import "./Experience.css";

// Logos for each section
import zodiacLogo from "../images/Zodiac.png";
import aksLogo from "../images/AKS.png";
import instructorLogo from "../images/instructor.png";
import archiveLogo from "../images/archive.jpg";
import financeLogo from "../images/Finance.jpg";

export default function Experience() {
  return (
    <div className="experience-page">
      {/* Heading */}
      <div className="experience-heading">
        <h2>Industrial Experiences</h2>
      </div>

      {/* Box 1: Industrial Experience */}
      <div className="experience-box">
        <h4>Industrial Experience</h4>
        <div className="experience-info">
          {/* Zodiac */}
          <div className="experience-item">
            <a href="https://cphlbd.com/portfolio/zodiac-power-chittagong-ltd/" target="_blank" rel="noopener noreferrer">
              <img src={zodiacLogo} alt="Zodiac Logo" className="experience-logo" />
            </a>
            <div>
              <p className="experience-title"><strong>Zodiac Power Chittagong Ltd. – Mechanical Intern</strong></p>
              <p className="experience-duration">Duration: Jan 2023 – Apr 2023</p>
              <p>
                During my internship at Zodiac Power Chittagong Ltd., I gained hands-on exposure to:
              </p>
              <ul>
                <li>HFO-based power generation systems</li>
                <li>Operation and maintenance of boilers and furnaces</li>
                <li>Cooling towers and auxiliary systems</li>
              </ul>
            </div>
          </div>

          {/* Abul Khair Steel */}
          <div className="experience-item">
            <a href="https://abulkhairsteel.com/" target="_blank" rel="noopener noreferrer">
              <img src={aksLogo} alt="AKS Logo" className="experience-logo" />
            </a>
            <div>
              <p className="experience-title"><strong>Abul Khair Steel (AKS) – Industrial Visit</strong></p>
              <p className="experience-duration">Duration: Feb 2023</p>
              <p>
                During the industrial visit at Abul Khair Steel (AKS), I observed:
              </p>
              <ul>
                <li>Rolling and casting processes</li>
                <li>Metallurgical quality control methods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Box 2: Teaching & Leadership */}
      <div className="experience-box">
        <h4>Teaching & Leadership</h4>
        <div className="experience-info">
          {/* Instructor */}
          <div className="experience-item">
            <img src={instructorLogo} alt="Instructor Logo" className="experience-logo" />
            <div>
              <p className="experience-title"><strong>Math Instructor, Guideline Academic Care, Dhaka</strong></p>
              <p className="experience-duration">Duration: Jan 2022 – Dec 2022</p>
              <p className="experience-subtitle">Responsibilities:</p>
              <ul>
                <li>Prepared and delivered lessons for students</li>
                <li>Monitored student progress and performance</li>
                <li>Provided additional support to struggling students</li>
              </ul>
            </div>
          </div>

          {/* Archive Secretary */}
          <div className="experience-item">
            <img src={archiveLogo} alt="Archive Logo" className="experience-logo" />
            <div>
              <p className="experience-title"><strong>Archive Secretary, Robo Mechatronics Association (RMA)</strong></p>
              <p className="experience-duration">Duration: Mar 2022 – Dec 2022</p>
              <p className="experience-subtitle">Responsibilities:</p>
              <ul>
                <li>Organized meetings and maintained records</li>
                <li>Assisted in planning workshops and events</li>
                <li>Managed archives and documentation for the association</li>
              </ul>
            </div>
          </div>

          {/* Finance Secretary */}
          <div className="experience-item">
            <img src={financeLogo} alt="Finance Logo" className="experience-logo" />
            <div>
              <p className="experience-title"><strong>Finance Secretary, Narsingdi Students’ Forum (NSF), CUET</strong></p>
              <p className="experience-duration">Duration: Jan 2022 – Dec 2022</p>
              <p className="experience-subtitle">Responsibilities:</p>
              <ul>
                <li>Managed budgets and financial reports</li>
                <li>Monitored fund allocations for events</li>
                <li>Coordinated with vendors and sponsors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
