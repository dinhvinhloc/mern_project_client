import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../images/resume_sample1.jpeg";
import img2 from "../../../images/resume_sample2.jpeg";

const HomeCarousel = () => {
        return (
            <Carousel>
                <div className="thumbView2">
                    <img src={img1} alt="img1" class="carouselImg"/>
                    <p className="legend">New Grad Resume</p>
                </div>
                <div className="thumbView2">
                    <img src={img2} alt="img2" class="carouselImg"/>
                    <p className="legend">General Resume</p>
                </div>
            </Carousel>
        );
}

export default HomeCarousel;

