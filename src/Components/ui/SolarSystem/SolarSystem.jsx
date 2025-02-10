import React, { useEffect, useState } from "react";
import styles from "./SolarSystem.module.css";
import {SOLARSYSTEMCOLORS} from "./../../../utils/color"

const SolarSystem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const languages = [
    {
      name: "C#",
      color: SOLARSYSTEMCOLORS.cSharp,
      satellites: [
        { name: ".NET Core", color: SOLARSYSTEMCOLORS.core, info: ".NET Core: 85%" },
        { name: "ADO.NET", color: SOLARSYSTEMCOLORS.adoNet, info: "ADO.NET: 80%" },
      ],
    },
    {
      name: "JavaScript",
      color: SOLARSYSTEMCOLORS.javascript,
      satellites: [
        { name: "React.js", color: SOLARSYSTEMCOLORS.react, info: "React.js: 90%" },
        { name: "TypeScript", color: SOLARSYSTEMCOLORS.typescript, info: "TypeScript: 75%" },
      ],
    },
    {
      name: "PHP",
      color: SOLARSYSTEMCOLORS.php,
      satellites: [
        { name: "Laravel", color: SOLARSYSTEMCOLORS.laravel, info: "Laravel: 90%" },
      ],
    },
    {
      name: "SQL",
      color: SOLARSYSTEMCOLORS.sql,
      satellites: [
        { name: "SQL Server", color: SOLARSYSTEMCOLORS.sqlServer, info: "SQL Server: 85%" },
        { name: "MySQL", color: SOLARSYSTEMCOLORS.mySql, info: "MySQL: 75%" },
      ],
    },
    {
      name: "Libraries",
      color: SOLARSYSTEMCOLORS.library,
      satellites: [
        { name: "Matérial UI", color: SOLARSYSTEMCOLORS.materialui, info: "Matérial UI: 80%" },
        { name: "Bootstrap", color: SOLARSYSTEMCOLORS.bootstrap, bootstrap: "Bootstrap: 90%" },
        { name: "Redux", color: SOLARSYSTEMCOLORS.redux, info: "Redux: 85%" },
        { name: "Tailwind CSS", color: SOLARSYSTEMCOLORS.tailwind, info: "Tailwind CSS: 80%" },
        { name: "Framer Motion", color: SOLARSYSTEMCOLORS.framerMotion, info: "Framer Motion: 80%" },
      ],
    },
  ];

  const centralLanguage = languages[currentIndex] || "Unknown";
  const currentSatellites = languages[currentIndex]?.satellites || [];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [languages.length]); 

  return (
    <div
      className={styles.solarSystem}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ "--animation-state": isPaused ? "paused" : "running" }}
    >
      <div 
        className={styles.sun} 
        style={{ 
          "--color-sun":centralLanguage.color
        }}>
        <span>{centralLanguage.name}</span>
      </div>

      {currentSatellites.map((satellite, index) => (
        <Orbit key={`orbit-${index}`} orbit={{ width: index * 50 + 100}} />
      ))}

      {currentSatellites.map((satellite, index) => (
        <Planet
          key={`planet-${index}`}
          planet={{
            name: satellite.name,
            circle: { cx: 10, cy: 20, r: 10, color: satellite.color, distance: index * 25 + 50 },
            text: { x: 12, y: 24, fontSize: 10, color: "white" },
            duration: `${(index + 1) * 5}s`,
            info: satellite.info,
          }}
          onHover={setHoveredPlanet}
          onLeave={() => setHoveredPlanet(null)}
        />
      ))}

      {hoveredPlanet && (
        <div
          className={`${styles.tooltip} ${styles.visible}`}
          style={{ left: hoveredPlanet.text.x, top: hoveredPlanet.text.y }}
        >
          {hoveredPlanet.info}
        </div>
      )}
    </div>
  );
};


const Orbit = ({ orbit }) => {
  return (
    <div
      className={styles.planetOrbit}
      style={{
        width: `${orbit.width}px`,
        height: `${orbit.width}px`,
      }}
    ></div>
  );
};


const Planet = ({ planet, onHover, onLeave }) => {
  const { circle, text, duration } = planet;

  return (
    <div
      className={styles.planet}
      onMouseEnter={() => onHover(planet)}
      onMouseLeave={onLeave}
      style={{
        "--orbit-distance": `${circle.distance}px`,
        "--orbit-duration": duration,
      }}
    >
      <svg className={styles.icon}>
        <circle cx={circle.cx} cy={circle.cy} r={circle.r} fill={circle.color} />
        <text
          x={text.x}
          y={text.y}
          fontSize={text.fontSize}
          fill={text.color}
          style={{ fontWeight: "bold" }}
        >
          {planet.name}
        </text>
      </svg>
    </div>
  );
};

export default SolarSystem;