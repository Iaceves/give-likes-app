import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../app.module.css";

const Slider = () => {
  return (
    <div>
      <Carousel className={styles.carouselContainer}>
        <Carousel.Item className={styles.carouselItems}>
          <img
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/48/1006/325/batman-the-dark-knight-returns-batman-dc-comics-wallpaper-preview.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItems}>
          <img
            className="d-block w-100"
            src="https://www.pixelstalk.net/wp-content/uploads/images5/4K-Batman-Wallpaper-Free-Download.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItems}>
          <img
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/819/892/850/batman-4k-high-resolution-wallpaper-preview.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItems}>
          <img
            className="d-block w-100"
            src="https://wallup.net/wp-content/uploads/2016/03/09/338916-Batman-Batman_logo-video_games-Batman_Arkham_Origins-748x421.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
