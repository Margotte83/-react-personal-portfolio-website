import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/marjorie-ngoupende-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.instagram.com/web3_mindset/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://twitter.com/MarjorieN83"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
      </div>
      <p>© 2023 made with 💜 by Marjorie Ngoupende</p>
    </div>
  );
}
