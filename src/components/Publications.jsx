import "./Publications.css";

export default function Publications() {
  return (
    <div className="publications-page">
      {/* Heading */}
      <div className="publications-heading">
        <h2>Publications & Conferences</h2>
      </div>

      {/* Journal Articles Box */}
      <div className="publications-box">
        <h4>Journal Articles (Under Review)</h4>

        <div className="paper-box">
          <strong>Optimization and Benchmarking of Fin Geometries for Enhanced Passive Cooling in Renewable Energy Systems Toward Achieving SDG 7.</strong>
          <div className="authors">Md. Mamunur Rahman, Md. Fardim Hasan Emon, Anup Karmakar, Md. Mahbubul Alam.</div>
          <div className="details">— Renewable Energy (Q1), Status: Under Review</div>
        </div>

        <div className="paper-box">
          <strong>Iron and Cobalt Catalysts for Ammonia Decomposition: Alloy Synergies, Support Effects, and Promoter Strategies.</strong>
          <div className="authors">Md. Mamunur Rahman, Md. Shaib Hossain, Md. Abdullah AR Rifat, Asfat Kabir Sifat, M. Nasiruzzaman Shaikh.</div>
          <div className="details">— The Chemical Record (Q1), Status: Under Review</div>
        </div>

        <div className="paper-box">
          <strong>Mechanistic Understanding of Nickel-Based Catalysts for Ammonia Decomposition toward Efficient Hydrogen Generation.</strong>
          <div className="authors">M.A. Shadab Siddiqui, Md. Mamunur Rahman, Md. Shaib Hossain, Syed Asim Ali, Shoaib Mahmud, Jahril Fauzan Nur, Fahad Alam, Mohd Yousuf Khan, Abuzar Khan, M. Nasiruzzaman Shaikh.</div>
          <div className="details">— The Chemical Record (Q1), Status: Under Review</div>
        </div>

        <div className="paper-box">
          <strong>Machine Learning-Driven Optimization of Ammonia Decomposition Catalysts: A Multi-Model Comparative Study with Hyperparameter Tuning and Synthetic Data Augmentation.</strong>
          <div className="authors">M.A. Shadab Siddiqui, Radif Uddin Ahmed, Sabbir Alom Shuvo, Md. Shaib Hossain, Shoaib Mahmud, Md. Mamunur Rahman, Wahid Billah, Mst. Nusrat Yasmin, Fahad Alam, M. Nasiruzzaman Shaikh.</div>
          <div className="details">— International Journal of Hydrogen Energy (Q1), Status: Under Review</div>
        </div>
      </div>

      {/* Conference Paper Box */}
      <div className="publications-box">
        <h4>Conference Paper</h4>

        <div className="paper-box">
          <strong>Design and Fabrication of a One Shell Pass and Two Tube Pass Heat Exchanger.</strong>
          <div className="authors">Golam Saklayen, Bodius Salam, Md. Fardim Hasan Emon, Md. Mamunur Rahman.</div>
          <div className="details">— International Conference on Mechanical Engineering and Renewable Energy-2025, CUET, Status: Accepted</div>
        </div>
      </div>
    </div>
  );
}
