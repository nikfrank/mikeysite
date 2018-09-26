import React, { Component } from "react";
import { Parallax } from 'react-parallax';

const PLayer = pg => (
  <div style={{ height: 10000, paddingTop: 5000 }}>
    <img style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    }} src='https://theundefeated.com/wp-content/uploads/2017/03/biggie_still.jpg?w=696'/>
    

    <svg viewBox="0 0 16 16" style={{
      height: 100,
      width: 100,
      position: 'fixed',
      top: (pg * 50 * Math.sin(25*pg) + 30)+'vh',
      left: (((pg - .5)*2) * 80) + 'vw',
      display: pg > 0.9 ? 'none' : '',
    }}>
      <circle fill="none" stroke="red" cx="8" cy="8" r="6"/>
      <path fill="none" stroke="red" d="M 8 0 L 8 6.5"/>
      <path fill="none" stroke="red" d="M 0 8 L 6.5 8"/>
      <path fill="none" stroke="red" d="M 8 9.5 L 8 16"/>
      <path fill="none" stroke="red" d="M 9.5 8 L 16 8"/>
    </svg>
    
  </div>
);



const ParallaxStuff = pg => (
  <div style={{ height: 10000 }}>
    <div style={{ position: 'fixed', top: '50vh', left: (100*pg - 50)+'vw' }}>
      {pg}
    </div>
  </div>
);

class Home extends Component {
  
  render() {
    return (
      <Parallax strength={200} renderLayer={PLayer} bgImage='none'/>
    )
  }
}
export default Home;
