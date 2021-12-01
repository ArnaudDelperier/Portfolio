import { useEffect } from 'react';
import './Home.css';

import Header from './Header';

function Home() {

  useEffect(() => {
    document.addEventListener("mousemove", background);
    const elemBackground = document.querySelector("#background");

    document.addEventListener("mousemove", parallax);
    const elemParallax = document.querySelector("#parallax");


    function background(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.001}% ${50 - (_mouseY - _h) * 0.001}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.007}% ${50 - (_mouseY - _h) * 0.007}%`;
        let x = `${_depth2}, ${_depth1}`;
        elemBackground.style.backgroundPosition = x;
    }

    function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.002}% ${50 - (_mouseY - _h) * 0.005}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.075}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.2}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      elemParallax.style.backgroundPosition = x;
  }
  }, [])

  return (
    <div className="home">
      <div id="background">
      <Header />
        <div id="parallax">
          <div className="title">Web Developer</div>
          <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae id harum, iusto porro tempore provident ipsam repellendus? Tempora modi laudantium impedit incidunt recusandae atque quam reiciendis vel ipsum laboriosam. Assumenda!</div>
        </div>
      </div>
    </div>
  );
}

export default Home;