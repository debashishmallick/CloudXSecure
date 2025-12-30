import React from 'react';
import './ManageCloudDevlopment.css';
import { FiSearch, FiChevronRight } from 'react-icons/fi';
import serviceImg from '../../assets/Mcloude/service-details-img.png'; // update image path if needed

const services = [
  'Software Development',
  'Consulting Service',
  'Cloud Solution',
  'Cyber Security',
  'Data Analytics',
  'Manage IT Services',
];

const ManageCloudDevlopment = () => {
  return (
    <section className="service-details">
      {/* LEFT CONTENT */}
      <div className="service-details__left">
        <img
          src={serviceImg}
          alt="Software Development"
          className="service-details__image"
        />

        <h2 className="service-details__title">Software Development</h2>

        <p className="service-details__description">
          Welcome to TechXen IT Solutions, your premier destination for
          comprehensive software development services. We deliver scalable,
          secure, and high-performance digital solutions tailored to your
          business goals.
        </p>
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="service-details__right">
        {/* Search */}
        <div className="service-search">
          <h4>Search by Keyword</h4>
          <div className="service-search__box">
            <input type="text" placeholder="Type keyword here" />
            <FiSearch />
          </div>
        </div>

        {/* Services List */}
        <div className="service-list">
          <h4>Our Services</h4>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <span>{service}</span>
                <FiChevronRight />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default ManageCloudDevlopment;
