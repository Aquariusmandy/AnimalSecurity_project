import React from 'react'
import './styles/style.css'

const Header = () => {
  return (
    <header class="bg-primary bg-gradient text-dark">
        <div class="container px-4 text-center">
            <h1 class="fw-bolder">歡迎來到本流浪動物救援網站</h1>
            <p class="lead">小小的一步讓動物得到更好的照顧</p>
            <a class="btn btn-lg btn-light" href="#about">開始瀏覽！</a>
        </div>
    </header>
  )
}

export default Header