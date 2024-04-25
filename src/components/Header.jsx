import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">AOS Yapılacaklar</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Giriş
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Üye ol
          </Link>
        </li>
      </ul>
    </header>
  );
}
