import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../plugins/bootstrap/bootstrap.min.css';
import '../css/style.css';
import $ from 'jquery';

const Header = () => {
  return (
    <header className="sticky-top bg-gray border-bottom border-default">
      <Navbar expand="lg" className="navbar-white">
        <h3>流浪動物網站</h3>
        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation">
          <i className="ti-menu"></i>
        </button>

        <div className="collapse navbar-collapse text-center" id="navigation">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="../index.html">回首頁</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">熱點地圖</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">動物回報</a>
            </li>
          </ul>

          {/* search */}
          <div className="search px-4">
            <button id="searchOpen" className="search-btn"><i className="ti-search"></i></button>
            <div className="search-wrapper">
              <form action="javascript:void(0)" className="h-100">
                <input className="search-box pl-4" id="search-query" name="s" type="search" placeholder="Type &amp; Hit Enter..." />
              </form>
              <button id="searchClose" className="search-close"><i className="ti-close text-dark"></i></button>
            </div>
          </div>

        </div>
      </Navbar>
    </header>
  );
};

export default Header;
