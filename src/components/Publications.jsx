import "./Publications.css";

export default function Publications() {
  return (
    <div className="publications-page">
      {/* Heading */}
      <div className="publications-heading">
        <h2>Publications</h2>
      </div>

      {/* Journal Articles Box */}
      <div className="publications-box">
        <h4>Journal Articles (Under Review)</h4>
        <ul>
          <li>
            <strong>Md. Mamunur Rahman, et al.</strong><br />
            Optimization and Benchmarking of Fin Geometries for Enhanced Passive
            Cooling in Renewable Energy Systems Toward Achieving SDG 7.<br />
            — Energy Conversion and Management (Q1)
          </li>
          <li>
            <strong>Md. Mamunur Rahman, et al.</strong><br />
            Iron and Cobalt Catalysts for Ammonia Decomposition: Alloy Synergies,
            Support Effects, and Promoter Strategies.<br />
            — The Chemical Record (Q1)
          </li>
          <li>
            <strong>Siddiqui, M.A., Rahman, M.M., et al.</strong><br />
            — The Chemical Record (Q1)
          </li>
          <li>
            <strong>Siddiqui, M.A., et al., Rahman, M.M.</strong><br />
            — International Journal of Hydrogen Energy (Q1)
          </li>
        </ul>
      </div>

      {/* Conference Paper Box */}
      <div className="publications-box">
        <h4>Conference Paper</h4>
        <p>
          <strong>Md. Mamunur Rahman, et al.</strong><br />
          Design and Fabrication of a One Shell Pass and Two Tube Pass Heat
          Exchanger.<br />
          — ICMERE 2025, CUET (Accepted)
        </p>
      </div>
    </div>
  );
}
