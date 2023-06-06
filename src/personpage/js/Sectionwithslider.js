import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'popper.js';
import '../plugins/bootstrap/bootstrap.min.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/style.css';
import Side from './Side.js';

const ImagesPost = [
  require("../images/post/post-1.jpg"),
  require("../images/post/post-2.jpg"),
  require("../images/post/post-3.jpg"),
  require("../images/post/animal-01.jpg"),
];

const settings = {
  dots: true, // 顯示圓點指示器
  infinite: true, // 無限循環
  slidesToShow: 1, // 一次顯示幾張圖片
  slidesToScroll: 1, // 一次滾動幾張圖片
  autoplay: true,          // 啟用自動播放
  autoplaySpeed: 1000,
};



function Section() {
  return (
    <section>
      <Side />
      <div className="custom-block">
        <div className="order-2 order-lg-2 mb-5 p-3 mb-lg-0">
          <article className="row mb-5 border-color m-3">
            <h4 className="col-12 post-title p-3">[暱稱]在[地點]發現了新的動物資訊!!</h4>
            <div className="col-6">
              <div className="post-slider">
                <img loading="lazy" src={ImagesPost[0]} className="img-fluid" alt="post-thumb" />
              </div>
            </div>
            <div className="col-6">
              <div className="post-slider">
              <Slider {...settings}>
                  <img loading="lazy" src={ImagesPost[0]} className="img-fluid" alt="post-thumb" />
                  <img loading="lazy" src={ImagesPost[1]} className="img-fluid" alt="post-thumb" />
                  <img loading="lazy" src={ImagesPost[2]} className="img-fluid" alt="post-thumb" />
                  <img loading="lazy" src={ImagesPost[3]} className="img-fluid" alt="post-thumb" /> 
              </Slider>
              </div>
            </div>
          </article>
          <article className="row mb-5 border-color m-3">
            <h4 className="col-12 post-title p-3">[暱稱]在[地點]發現了新的動物資訊!!</h4>
            <div className="col-6">
              <div className="post-slider">
                <img loading="lazy" src={ImagesPost[1]} className="img-fluid" alt="post-thumb" />
              </div>
            </div>
            <div className="col-6">
              <div className="post-slider">
              <Slider {...settings}>
                  <img loading="lazy" src={ImagesPost[0]} className="img-fluid" alt="post-thumb" />
                  <img loading="lazy" src={ImagesPost[1]} className="img-fluid" alt="post-thumb" />
                  <img loading="lazy" src={ImagesPost[2]} className="img-fluid" alt="post-thumb" />
                  <img loading="lazy" src={ImagesPost[3]} className="img-fluid" alt="post-thumb" /> 
              </Slider>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Section;
