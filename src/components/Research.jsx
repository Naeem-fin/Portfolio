import "./Research.css"; 

export default function Research() {
  return (
    <div className="research-page">
      {/* Heading with background color */}
      <div className="research-heading">
        <h2>Undergraduate Research</h2>
      </div>

      {/* Box 1: Undergraduate Thesis */}
      <div className="research-box">
        <h4>Undergraduate Thesis</h4>
        <p>
          <strong>Enhancing Heat Transfer Rate by Optimizing Fin Shapes and Parameters using CFD Analysis</strong>
        </p>
        <p>
          <strong>Supervisor:</strong> Dr. Md. Mahbubul Alam
        </p>
        <p>Apr 2023 – May 2024</p>
        <ul>
          <li>Investigated heat dissipation for annular, rectangular, and hexagonal fins using CFD.</li>
          <li>Identified annular fins (2 mm thickness) achieving the highest heat transfer coefficient (15.4 W/m²).</li>
          <li>Demonstrated the impact of fin geometry and thickness on thermal performance.</li>
        </ul>
      </div>

      {/* Box 2: Research Interests */}
      <div className="research-box">
        <h4>Research Interests</h4>
        <ul>
          <li>Computational Fluid Dynamics (CFD)</li>
          <li>Thermal Transport Phenomena</li>
          <li>Energy Systems Analysis</li>
          <li>Multiphysics Numerical Modeling</li>
          <li>Energy Materials Engineering</li>
          <li>Advanced Manufacturing Engineering</li>
        </ul>
      </div>
    </div>
  );
}
