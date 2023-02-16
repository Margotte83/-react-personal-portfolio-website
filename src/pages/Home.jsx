import React from "react";
import { GitHub } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Marjorie Ngoupende</h2>
        <div className="avatar">
          <Avatar
            alt="Photo Marjorie Ngoupende "
            src="https://res.cloudinary.com/defpadn0s/image/upload/v1675612991/marjorie-2022_bfpsuw.jpg"
            sx={{ width: 200, height: 200 }}
          />
        </div>
        <div className="prompt">
          <p>
            Développeuse Blockchain, <br></br>Expertise NFT et Smart Contract
          </p>
          <a
            href="https://www.linkedin.com/in/marjorie-ngoupende-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="mailto: marjorie.ngoupende@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Email />
          </a>
          <a
            href="https://github.com/Margotte83 "
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Blockchain</h2>
            <span>
              Solidity | Web3Js -EtherJs | Ganache | Truffle- hardhat | Alchemy
              - Infura
            </span>
          </li>
          <li className="item">
            <h2>Front-end</h2>
            <span>
              PHP | JavaScript | ReactJs | StyledComponents | TypeScript | Vite
              | NPM-YARN | Bootstrap | Sass | MaterialUI | Materialize
            </span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>NodeJs | MysQL | MongoDB | GraphQL | Docker</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
