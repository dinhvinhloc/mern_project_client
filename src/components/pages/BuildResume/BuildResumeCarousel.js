import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../images/gradImage.png";
import img2 from "../../../images/resume2.jpg";

const BuildResumeCarousel = () => {
        return (
            <Carousel>
                <div>
                    <img src={img1} alt="img1" class="carouselImg"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt="img2" class="carouselImg"/>
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        );
}

export default BuildResumeCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
