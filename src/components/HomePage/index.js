import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const HomePage = () => {
  // Slider settings for the main heading carousel
  const mainHeadingSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Slider settings for the card carousel
  const cardCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      <nav className="nav-bar">
        <CgProfile className="icon" />
        <GiHamburgerMenu className="icon" />
      </nav>
      <h1 className="name">Hii Joy</h1>

      {/* Main Heading Carousel */}
      <Slider {...mainHeadingSettings}>
        {/* Add more main heading slides here */}
      </Slider>

      {/* Card Carousel */}
      <div className="card-carousel">
        <Slider {...cardCarouselSettings}>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/avengers-img.png"
              alt="movie"
              className="movie-image"
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/the-intern-img.png"
              alt="movie"
              className="movie-image"
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/karwaan-img.png"
              alt="movie"
              className="movie-image"
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/war-img.png"
              alt="movie"
              className="movie-image"
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/yes-man-img.png"
              alt="movie"
              className="movie-image"
            />
          </div>
          {/* Add more card slides here */}
        </Slider>
      </div>
      <div className="description-container">
        <h1 className="about-movies">About Movies OOT Platform</h1>
        <p className="description">
          OTT stands for “over-the-top” and refers to technology (OTT services
          or platforms) that delivers streamed content via internet-connected
          devices. In mobile marketing, OTT is often discussed specifically
          within the context of video content.
        </p>
        <Link to="/">
          <button className="logout-button" type="button">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
