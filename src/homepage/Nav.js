import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/style.css'


const Nav = ({PageIndex, setIndex,PageTest,setTest}) => {

  const changePagetoTest = () =>{
    setIndex(false)
    setTest(true)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container px-4">
            <a class="navbar-brand" href="#page-top">流浪動物網站</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><Link class="nav-link" to="/get_MapData">點位地圖</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/report">回報表單</Link></li>
                    <li class="nav-item"><Link class="nav-link" to="/person">個人頁</Link></li>
                    <li class="nav-item" ><Link class="nav-link" to="/login">登入</Link></li>
                </ul>
            </div>
        </div>
</nav>
  );
};

export default Nav