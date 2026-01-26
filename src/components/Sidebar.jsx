import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Md. Mamunur Rahman</h2>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/design">Design</NavLink>
        <NavLink to="/publications">Publications</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/about">About</NavLink>
        
      </nav>
    </div>
  );
}
