import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from "./brain1.png";
import "./logo.css";


const Logo = () => {
    return (
       
     <Tilt className='parallax-effect-glare-scale
                      perspective={500}
                      glareEnable={true}
                      glareMaxOpacity={0.45}
                      scale={1.02}'>
        <div className="inner-element">
            <img src={brain} alt='logo'/>
        </div>
  </Tilt>        
    );
}


export default Logo;