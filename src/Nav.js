import React from 'react'
import './styles/style.css'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container px-4">
            <a class="navbar-brand" href="#page-top">流浪動物網站</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#about">熱點地圖</a></li>
                    <li class="nav-item"><a class="nav-link" href="#services">回報表單</a></li>
                    <li class="nav-item"><a class="nav-link" href="./test01/test01.html">個人頁</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">登入/登出</a></li>
                </ul>
            </div>
        </div>
</nav>
  );
};

export default Nav