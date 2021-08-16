import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../images/resume_sample1.jpeg";
import img2 from "../../../images/resume_sample2.jpeg";
import Home from "../Home/Home"

const HomeCarousel = () => {
        return (
            <Carousel>
                <Home></Home>
            </Carousel>
            
        )
}

export default HomeCarousel;

