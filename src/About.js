import React from 'react'
import './styles/style.css'

const About = () => {
  return (
    <section class="bg-img" id="about">
        <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8">
                    <h2>關於本網站</h2>
                    <p class="lead">我們希望提供一個使用者友善的流浪動物回報平台可以即時且視覺化的呈現台灣各地的流浪動物資訊鼓勵全民一起參與流浪動物議題，提供更多元的資訊</p>
                    <ul>
                        <li>Clickable nav links that smooth scroll to page sections</li>
                        <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                        <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                        <li>Minimal custom CSS so you are free to explore your own unique design options</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About