import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Md. Mamunur Rahman</h2>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/education">Educational Background</NavLink>
        <NavLink to="/research">Undergraduate Research</NavLink>
        <NavLink to="/design">Solid Works Designs </NavLink>
        <NavLink to="/publications">Publications & Conferences </NavLink>
        <NavLink to="/experience">Industrial Experiences</NavLink>
        <NavLink to="/about">About Me </NavLink>
        
      </nav>
    </div>
  );
}
