import React from "react";
import "./ManageCloudeTechstack.css";

/* Icons */
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAndroid,
  FaApple,
} from "react-icons/fa";

import { SiMongodb, SiPostgresql, SiMysql } from "react-icons/si";

const techStackData = [
  {
    title: "Frontend",
    icon: <FaCode />,
    tech: [<FaReact />, <FaAngular />, <FaVuejs />],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    tech: [<FaNodeJs />, <FaPython />, <FaJava />],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    tech: [<SiMongodb />, <SiPostgresql />, <SiMysql />],
  },
  {
    title: "Mobile",
    icon: <FaMobileAlt />,
    tech: [<FaReact />, <FaAndroid />, <FaApple />],
  },
];

const ManageCloudeTechstack = () => {
  return (
    <section className="mcts-wrapper">
      <div className="mcts-grid">
        {techStackData.map((item, index) => (
          <div className="mcts-card" key={index}>
            <div className="mcts-main-icon">{item.icon}</div>

            <h4 className="mcts-title">{item.title}</h4>

            <div className="mcts-icons">
              {item.tech.map((icon, i) => (
                <span className="mcts-icon" key={i}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManageCloudeTechstack;
