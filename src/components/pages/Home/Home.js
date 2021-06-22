import React from 'react';
import {NavLink} from 'react-router-dom';
import HomeCarousel from './HomeCarousel';

function Home() {
    return (
        <div className="bodyLayout">
              <h3>Home</h3>
              <HomeCarousel/>
        </div>
    );
}

export default Home;