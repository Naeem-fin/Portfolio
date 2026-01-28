import "./Design.css";

// Import design images
import d1 from "../images/cad1.jpeg";
import d2 from "../images/cad2.jpeg";
import d3 from "../images/cad3.jpeg";
import d4 from "../images/cad4.jpeg";
import d5 from "../images/cad5.jpeg";
import d6 from "../images/cad6.jpeg";
import d7 from "../images/cad7.jpeg";
import d8 from "../images/cad8.jpeg";

export default function Design() {
  return (
    <div className="design-page">
      {/* Heading */}
      <div className="design-heading">
        <h2>CAD Portfolio</h2>
      </div>

      {/* Description */}
      <div className="design-intro">
        <p>
          This section showcases selected SolidWorks models created as part of my
          self-learning journey to build proficiency in 3D modeling and assembly.
          The projects demonstrate experience with part modeling, assemblies, 
          surface features, symmetry, and basic material application across 
          mechanical, product, and concept designs.
        </p>
        <p><strong>Tools Used</strong></p>
        <ul>
          <li>SolidWorks 2016 for Part Modeling, Assemblies, and Surface Features</li>
          <li>Basic Rendering</li>
        </ul>
      </div>

      {/* Design Gallery */}
      <div className="design-grid">
        <DesignCard
          img={d1}
          title="Winged Rotor Assembly"
          description="• Curved blade modeling and surface features
• Assembly alignment and symmetry control"
        />
        <DesignCard
          img={d2}
          title="Acoustic Guitar Assembly"
          description="• Part modeling and full assembly
• Simple materials and fitting details"
        />
        <DesignCard
          img={d3}
          title="Lamborghini Aventador Model"
          description="• Exterior body modeling
• Basic assembly and materials"
        />
        <DesignCard
          img={d4}
          title="Iron Man Helmet Model"
          description="• Curved surface modeling
• Part fitting and materials"
        />
        <DesignCard
          img={d5}
          title="Cooling Fan Assembly"
          description="• Blade modeling and hub design
• Assembly fitting and simple materials"
        />
        <DesignCard
          img={d6}
          title="CoC-Inspired Building Model"
          description="• Block-style part modeling and full assembly
• Simple materials and layout details"
        />
        <DesignCard
          img={d7}
          title="Shuttlecock Model"
          description="• Patterned features and symmetry
• Basic part detailing"
        />
        <DesignCard
          img={d8}
          title="Flywheel Generator Model"
          description="• Part modeling and assembly
• Simple component layout"
        />
      </div>
    </div>
  );
}

/* Card Component */
function DesignCard({ img, title, description }) {
  return (
    <div className="design-card">
      <img src={img} alt={title} />
      <div className="design-card-info">
        <h4>{title}</h4>
        <p style={{ whiteSpace: "pre-line" }}>{description}</p>
      </div>
    </div>
  );
}
