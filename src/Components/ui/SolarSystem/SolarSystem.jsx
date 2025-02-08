import React, { useEffect, useState } from "react";
import styles from "./SolarSystem.module.css";

const SolarSystem = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [isPaused, setIsPaused]=useState(false);

  useEffect(() => {
    
  }, [hoveredPlanet])
  const planets = [
    {
      name: ".NET Core",
      orbit: { width: 100 },
      circle: { cx: 10, cy: 20, r: 10, color: "#512BD4", distance: 50 },
      text: { x: 12, y: 24, fontSize: 10, color: "white" },
      duration: "8s",
      info: ".NET Core: 85%",
    },
    {
      name: "JS",
      orbit: { width: 150 },
      circle: { cx: 10, cy: 20, r: 10, color: "#F7DF1E", distance: 75 },
      text: { x: 12, y: 24, fontSize: 16, color: "white" },
      duration: "12s",
      info: "JavaScript: 90%",
    },
    {
      name: "TS",
      orbit: { width: 200 },
      circle: { cx: 10, cy: 20, r: 10, color: "#3178C6", distance: 100 },
      text: { x: 12, y: 24, fontSize: 16, color: "white" },
      duration: "16s",
      info: "TypeScript: 75%",
    },
  ];

  return (
    <div 
      className={styles.solarSystem} 
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
      style={{ "--animation-state": isPaused ? "paused" : "running" }}>
      <div className={styles.sun}></div>
      
      {planets.map((planet, index) => (
        <Orbit key={`orbit-${index}`} orbit={planet.orbit} />
      ))}

      {planets.map((planet, index) => (
        <Planet
          key={`planet-${index}`}
          planet={planet}
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
          <text x={text.x} y={text.y} fontSize={text.fontSize} fill={text.color} style={{ fontWeight: "bold" }}>
            {planet.name}
          </text>
        </svg>
      </div>
  );
};

export default SolarSystem;
