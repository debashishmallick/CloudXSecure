import React from 'react';
import './ManageCloudHero.css';

const services = [
  '✺ Manage IT Services',
  '✺ Network Solution',
  '✺ Consulting Service',
  '✺ Software Development',
  '✺ Software Development',
  '✺ Cloud Solution',
  '✺ Cyber Security',
  '✺ Data Analytics',
];

const ManageCloudHero = () => {
  return (
    <section className="service-hero">
      {/* Background */}
      <div className="service-hero__bg" />

      {/* Content */}
      {/* <div className="service-hero__content">
        <h1 className="service-hero__title">Service Details Right</h1>

        <div className="service-hero__breadcrumb">
          <span className="home-icon">✦</span>
          <a href="/">Home</a>
          <span className="separator">›</span>
          <span>Service Details Right</span>
        </div>
      </div> */}

      {/* Infinite Marquee */}
      <div className="service-hero__marquee">
        <div className="marquee">
          <div className="marquee__track">
            {[...services, ...services].map((text, index) => (
              <span className="marquee__item" key={index}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageCloudHero;
