import "./Education.css"; 
import cuetLogo from "../images/cuet.webp";
import gccLogo from "../images/gcc_logo.png";

export default function Education() {
  return (
    <div className="education-page">
      {/* Heading with background */}
      <div className="education-heading">
        <h2>Education</h2>
      </div>

      {/* Education Items */}
      <div className="education-item">
        <a href="https://cuet.ac.bd/" target="_blank" rel="noopener noreferrer">
          <img src={cuetLogo} alt="CUET Logo" className="edu-logo-cuet" />
        </a>
        <div className="edu-info">
          <h4>B.Sc. in Mechanical Engineering</h4>
          <p>CUET, Bangladesh (2019 – 2024)</p>
          <p>CGPA: 3.61 out of 4.00</p>
        </div>
      </div>

      <div className="education-item">
        <a href="https://www.gccbof.edu.bd/" target="_blank" rel="noopener noreferrer">
          <img src={gccLogo} alt="GCC Logo" className="edu-logo-gcc" />
        </a>
        <div className="edu-info">
          <h4>Higher Secondary Certificate (HSC)</h4>
          <p>Gazipur Cantonment College (2016 – 2018)</p>
          <p>GPA: 5.00 out of 5.00 | Science Group</p>
        </div>
      </div>
    </div>
  );
}
