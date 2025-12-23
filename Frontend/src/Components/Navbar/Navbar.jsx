import React, { useState } from "react";
import "./Navbar.css";
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";
import logo from "../../assets/cloud.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="nav-wrapper">
        <nav className="navbar">
          {/* Logo */}
          <div className="nav-logo">
            <a href="/">
              <img src={logo} alt="CloudXSecure Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-menu desktop-menu">
            <li className="nav-item">
              <a href="#">Home</a> <FiChevronDown />
            </li>

            <li className="nav-item">
              <a href="#">Pages</a> <FiChevronDown />
            </li>

            <li className="nav-item">
              <a href="#">Services</a> <FiChevronDown />
            </li>

            <li className="nav-item dropdown-parent">
              <a href="#">Case Study</a> <FiChevronDown />
              <ul className="dropdown">
                <li><a href="#">Case Study</a></li>
                <li><a href="#">Case Details</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown-parent">
              <a href="#">Blogs</a> <FiChevronDown />
              <ul className="dropdown">
                <li><a href="#">Our Blogs</a></li>
                <li><a href="#">Blog Sidebar</a></li>
                <li><a href="#">Blog Details</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* CTA */}
          <button className="nav-cta">
            Get In Touch
            <HiArrowUpRight />
          </button>

          {/* Mobile Toggle */}
          <div className="mobile-toggle" onClick={() => setMenuOpen(true)}>
            <FiMenu />
          </div>
        </nav>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src={logo} alt="logo" />
          <FiX onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="mobile-nav">
          <li><a href="#">Home</a></li>

          <li onClick={() => toggleDropdown("pages")}>
            Pages <FiChevronRight />
          </li>

          <li onClick={() => toggleDropdown("services")}>
            Services <FiChevronRight />
          </li>

          <li onClick={() => toggleDropdown("case")}>
            Case Study <FiChevronRight />
          </li>

          {activeDropdown === "case" && (
            <div className="mobile-sub">
              <a href="#">Case Study</a>
              <a href="#">Case Details</a>
            </div>
          )}

          <li onClick={() => toggleDropdown("blog")}>
            Blogs <FiChevronRight />
          </li>

          {activeDropdown === "blog" && (
            <div className="mobile-sub">
              <a href="#">Our Blogs</a>
              <a href="#">Blog Sidebar</a>
              <a href="#">Blog Details</a>
            </div>
          )}

          <li><a href="#">Contact</a></li>
        </ul>

        <button className="mobile-cta">
          Get In Touch <HiArrowUpRight />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
