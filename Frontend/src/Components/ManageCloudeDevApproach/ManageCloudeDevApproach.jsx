import React from 'react';
import './ManageCloudeDevApproach.css';

const tags = [
  'Software Development',
  'Cloud',
  'It Solution',
  'Data Analytics Service',
  'Technology',
  'Custom Development',
  'Cyber Security',
  'Consulting Service',
];

const ManageCloudeDevApproach = () => {
  return (
    <section className="mcda-section">
      {/* LEFT CONTENT */}
      <div className="mcda-content">
        <h2 className="mcda-title">Our Approach</h2>

        <p className="mcda-text">
          At TechXen IT Solutions, we take a client-centric approach to software
          development, prioritizing your unique requirements and objectives.
          Our process begins with a thorough understanding of your business
          goals, target audience, and technical specifications. We then
          collaborate closely with you at every stage of the development cycle
          to ensure that the final product exceeds your expectations.
        </p>

        <div className="mcda-columns">
          <div>
            <h3>Custom Development</h3>
            <p>
              Our team specializes in developing custom software solutions
              tailored to address your specific business challenges. Whether
              you need a web application, mobile app, or enterprise solution,
              we deliver scalable and secure products.
            </p>
          </div>

          <div>
            <h3>Development Services</h3>
            <p>
              From initial concept and design to development, testing, and
              deployment, we offer comprehensive full-cycle development
              services to ensure a seamless and efficient development process.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="mcda-sidebar">
        <h4 className="mcda-sidebar-title">Tags</h4>

        <div className="mcda-tags">
          {tags.map((tag, index) => (
            <span className="mcda-tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default ManageCloudeDevApproach;
