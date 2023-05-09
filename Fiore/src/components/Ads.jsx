import React from "react";
// import Bootstrap from "bootstrap";
// import Adspicture from "../assets/ads/Ads01.png";
// import Adspicture from "../assets/ads/Ads02.png";
// import Adspicture from "../assets/ads/Ads03.png";


function Ads() {
  return <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/ads/Ads01.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../assets/ads/Ads02.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="../assets/ads/Ads03.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

  </div>
}

export default Ads;
