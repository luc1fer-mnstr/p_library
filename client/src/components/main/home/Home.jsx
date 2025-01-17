import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

// video/image
import banner from '../assets/banner2.mp4'
import get1 from '../assets/discover.mp4'
import get2 from '../assets/tool.mp4'
import jsbook from '../assets/js.jpg'
import reactbook from '../assets/react.jpg'
import cssbook from '../assets/css.jpg'
import databook from '../assets/data.jpg'
import mlbook from '../assets/ml.jpg'
import edubook from '../assets/education.jpg'
import anatomybook from '../assets/anatomy.jpg'
import nursingbook from '../assets/nursing.jpg'


const Home = () => {
  return (
    <>
    <header className="banner">
      <video src={banner} className="banner-video" autoPlay muted loop>
        Your browser does not support the video tag.
      </video>
      <div className="banner-content">
        <h1>Reading is my Passion</h1>
        <h3>Join the jounery</h3>
        <Link to='/home/books' className="btn">Get Started</Link>
      </div>
    </header>
    <div className="what flex">
        <h1>What you'll get</h1>
        <div className="div1 flex">
          <video src={get1} autoPlay loop muted></video>
          <span className="get1"> <h4>Discover Endless Knowledge</h4><br></br>
          Explore a vast collection of books, eBooks, and digital resources across diverse genres and topics.</span>
        </div>
        <div className="div2 flex">
          <video src={get2} autoPlay loop muted></video>
          <span className="get2"><h4>Tools for Your Success</h4><br/>
          Enjoy features like personalized recommendations, advanced search tools, and user-friendly platform.</span>
        </div>
         
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div5"></div>
        <div className="div6"></div>
    </div>
    <div className="latestBooks flex">
      <div className="title">
        <h3>Latest Interested Books</h3>
      </div>
      <div className="latestCard flex">
          <div className="items flex">
            <img src={jsbook} alt="Java Script" />
            <div className="details flex">
              <h3>Java Script</h3>
              <span>John Doe</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={reactbook} alt="Book Name" />
            <div className="details flex">
              <h3>React</h3>
              <span>Jane Smith</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={databook} alt="Book Name" />
            <div className="details flex">
              <h3>Data Science</h3>
              <span>Sarah Brown</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={mlbook} alt="Book Name" />
            <div className="details flex">
              <h3>Machine Learning</h3>
              <span>Micheal White</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={cssbook} alt="Book Name" />
            <div className="details flex">
              <h3>Advanced Css</h3>
              <span>Joe Brown</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={edubook} alt="Book Name" />
            <div className="details flex">
              <h3>Teacher Development</h3>
              <span>Susan</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={nursingbook} alt="Book Name" />
            <div className="details flex">
              <h3>Nursing</h3>
              <span>Michael White</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={anatomybook} alt="Book Name" />
            <div className="details flex">
              <h3>Anatomy</h3>
              <span>Anne Waugh</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
      </div>

      <div className="div3"></div>
      <div className="div4"></div>
      <div className="div5"></div>
      <div className="div6"></div>
    </div>
    </>
  );
};

export default Home;
