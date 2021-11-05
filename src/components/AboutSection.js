import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className='decription'>
        <div className='title'>
          <div className='hide'>
            <h2>We work to make</h2>
          </div>
          <div className='hide'>
            <h2>
              your <span>dreams</span>come
            </h2>
          </div>
          <div className='hide'>
            <h2>true</h2>
          </div>
        </div>
        <p>Contact us for any internet site idea you have</p>
        <button>Contact us</button>
      </div>
      <div className='image'>
        <img src={home1} alt='camera man' />
      </div>
    </div>
  );
};
export default AboutSection;
