import "./Research.css";

export default function Research() {
  return (
    <div className="research-page">
      {/* Heading with background color */}
      <div className="research-heading">
        <h2>Undergrade Research</h2>
      </div>

      {/* Box 1: Undergraduate Thesis */}
      <div className="research-box">
        <h4>Undergraduate Thesis</h4>
        <p>
          <strong>Enhancing Heat Transfer Rate by Optimizing Fin Shapes and
          Parameters Using CFD</strong>
        </p>
        <p>
          This research investigated annular, rectangular, and hexagonal fin
          geometries with equal surface areas using CFD simulations. Results
          demonstrated that annular fins with 2 mm thickness achieved the
          highest heat transfer coefficient (15.4 W/m²K), highlighting the
          effectiveness of geometry-driven optimization for passive thermal
          systems.
        </p>
        <p>
          <strong>Supervisor:</strong> Dr. Md. Mahbubul Alam, Professor, CUET
        </p>
      </div>
      {/* Box 2: Research Interests */}
      <div className="research-box">
        <h4>Research Interests</h4>
        <ul>
          <li>Computational Fluid Dynamics (CFD)</li>
          <li>Thermal Management & Heat Transfer</li>
          <li>Energy Systems</li>
          <li>Hydrogen Energy</li>
          <li>Advanced Manufacturing</li>
        </ul>
      </div>

    </div>
  );
}
