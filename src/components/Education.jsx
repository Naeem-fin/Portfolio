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
        <img src={cuetLogo} alt="CUET Logo" className="edu-logo" />
        <div className="edu-info">
          <h4>B.Sc. in Mechanical Engineering</h4>
          <p>CUET, Bangladesh (2019 – 2024)</p>
          <p>CGPA: 3.61 / 4.00 | Rank: 21 / 177 (Top 11.9%)</p>
        </div>
      </div>

      <div className="education-item">
        <img src={gccLogo} alt="GCC Logo" className="edu-logo" />
        <div className="edu-info">
          <h4>Higher Secondary Certificate (HSC)</h4>
          <p>Gazipur Cantonment College (2016 – 2018)</p>
          <p>GPA: 5.00 / 5.00 | Science Group</p>
        </div>
      </div>
    </div>
  );
}
