import React from 'react';
import aboutimage from '../images/women2.jpg';

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <div className='image-wrapper'>
                <img src={aboutimage} alt="" />
            </div>
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Vel non viverra ligula odio ornare turpis mauris. 
               Odio aliquam, tincidunt ut vitae elit risus. 
               Tempor egestas condimentum et ac rutrum dui, odio.</p>
               <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About;
