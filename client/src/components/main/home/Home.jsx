import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

// video/image
import banner from '../assets/banner.mp4'
import get1 from '../assets/get1.mp4'
import get2 from '../assets/get2.mp4'
import book from '../assets/book.jpg'


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
          <span className="get1">Lorem Ipsum is simply dummy text of <br/><br/> the printing and typesetting industry.</span>
        </div>
        <div className="div2 flex">
          <video src={get2} autoPlay loop muted></video>
          <span className="get1">Lorem Ipsum is simply dummy text of <br/><br/> the printing and typesetting industry.</span>

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
            <img src={book} alt="Book Name" />
            <div className="details flex">
              <h3>Book Title</h3>
              <span>Author</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={book} alt="Book Name" />
            <div className="details flex">
              <h3>Book Title</h3>
              <span>Author</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={book} alt="Book Name" />
            <div className="details flex">
              <h3>Book Title</h3>
              <span>Author</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={book} alt="Book Name" />
            <div className="details flex">
              <h3>Book Title</h3>
              <span>Author</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={book} alt="Book Name" />
            <div className="details flex">
              <h3>Book Title</h3>
              <span>Author</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={book} alt="Book Name" />
            <div className="details flex">
              <h3>Book Title</h3>
              <span>Author</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={book} alt="Book Name" />
            <div className="details flex">
              <h3>Book Title</h3>
              <span>Author</span>
              <br/>
              <Link to="/home/books">Get Now</Link>
            </div>
          </div>
          <div className="items flex">
            <img src={book} alt="Book Name" />
            <div className="details flex">
              <h3>Book Title</h3>
              <span>Author</span>
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
