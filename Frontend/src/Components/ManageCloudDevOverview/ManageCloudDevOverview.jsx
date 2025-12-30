import React from "react";
import "./ManageCloudDevOverview.css";
import { FaDownload } from "react-icons/fa";

const ManageCloudDevOverview = () => {
  return (
    <section className="mcdo-wrapper">
      {/* LEFT CONTENT */}
      <div className="mcdo-content">
        <h2 className="mcdo-heading">Our Approach</h2>

        <p className="mcdo-description">
          At TechXen IT Solutions, we take a client-centric approach to software
          development, focusing on scalability, security, and performance.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Beatae optio expedita in
          deleniti? Consectetur quas esse quos amet in eos dolores enim
          laudantium ipsam asperiores, nihil suscipit officiis, fuga natus.
        </p>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="mcdo-sidebar">
        <div className="mcdo-card">
          <h4 className="mcdo-card-title">Download Brochure</h4>

          <p className="mcdo-card-text">
            With a commitment to excellence, our team is here to empower your
            business.
          </p>

          <a href="/brochure.pdf" className="mcdo-btn mcdo-btn-primary">
            <FaDownload /> PDF Download
          </a>

          <a href="/brochure.docx" className="mcdo-btn mcdo-btn-outline">
            <FaDownload /> DOC Download
          </a>
        </div>
      </aside>
    </section>
  );
};

export default ManageCloudDevOverview;
