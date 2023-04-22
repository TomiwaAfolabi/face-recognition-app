import React from "react";
import Tilt from "react-parallax-tilt";
import "./logo.css";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" scale={1}>
        <div
          style={{
            width: "150px",
            height: "150px",
            cursor: "pointer",
          }}
        >
          <h1>React Parallax Tilt 👀</h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
