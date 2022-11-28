import About from '../components/About';
import HeaderQuestions from '../components/HeaderQuestions';
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js"
import { gsap } from "gsap";
import { useEffect } from 'react';

const Home = () => {
  // const toggle =()=>{
  // }


  useEffect(() => {
    const tl = gsap.timeline({defaults:{ease:"power1.out"}});
    tl.to(".hiddenText", {y: "0", duration: 1, stagger:0.2})
    tl.to(".slider", {y: "-100%", duration: 1, delay: 0.5})
    tl.to(".sliderNote", {y: "-100%", duration: 1, delay: -.7})

    tl.to(".kwtI", {x: "-250px", duration:0.4, opacity:1})
    tl.to(".kwtI", {x: "-220px", duration:0.2,})

    tl.to(".kwtIII", {x: "250px", duration:0.4, opacity:1})
    tl.to(".kwtIII", {x: "220px", duration:0.2,})
  })

  
  
  return (
    <>
    <div className='sliderNote'>
    <div className='hideText'><p className='hiddenText'>KONKURS</p></div>
    <div className='hideText'><p className='hiddenText'>WIEDZY</p></div>
    <div className='hideText'><p className='hiddenText'>TECHNICZNEJ</p></div>
    </div>
    <div className='slider'></div>
      <div className="header" id="header">
        <div className="header_elements">
          <div className="kwt">
            <div className='kwtI'><h1>K</h1></div>
            <div className='kwtII'><h1>W</h1></div>
            <div className='kwtIII'><h1>T</h1></div>
          </div>
          <div className='desc'>
            <p>DOŁĄCZ DO KONKURSU I SPRAWDŹ SWOJĄ WIEDZĘ Z WYBRANEJ PRZEZ CIEBIE DZIEDZINY!</p>
          </div>
          <div className='header_button'>
            <div className="sign">
              <Link to={"/join"}>
                <div className="button">
                  <p>Dołącz</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <About />
      <HeaderQuestions />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"
      integrity="sha512-H6cPm97FAsgIKmlBA4s774vqoN24V5gSQL4yBTDOY2su2DeXZVhQPxFK4P6GPdnZqM9fg1G3cMv5wD7e6cFLZQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"></script>
    </>
  );
};

export default Home;