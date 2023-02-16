import React, {useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { ReorderRounded } from "@mui/icons-material";

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  },
    [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderRounded />
        </button>
      </div>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/experience">Expèrience</Link>
      </div>
    </div>
  );
}
