import React from 'react'
import '../styles/style.css'

const About = () => {
  return (
    <section class="bg-img" id="about">
        <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8 ">
                    <h2>關於本網站</h2>
                    <p class="lead">我們希望提供一個使用者友善的流浪動物回報平台可以即時且視覺化的呈現台灣各地的流浪動物資訊鼓勵全民一起參與流浪動物議題，提供更多元的資訊</p>
                    <ul>
                        <li>點擊回報表單即時回報受傷、結紮、走失動物諮詢</li>
                        <li>熱點地圖查看附近的回報案件</li>
                        <li>登入以儲存個人回報紀錄</li>
                        <li>個人回報紀錄可於個人頁面中查看</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About