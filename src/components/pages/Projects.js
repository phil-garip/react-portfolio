import React from 'react';
import Footer from '../Footer';
import cowboyBoot from '../../images/cowboy-boot.jpg'
import lipStick from '../../images/lipstick.jpg'
import rainbows from '../../images/rainboNeon.jpg'
import nytOrNot from '../../images/Screen-Shot-2021-05-03-at-10.10.47-AM.jpg'

export default function Projects() {
  return (
    <div className="container">
    <h1>Projects</h1>
    <div className="container d-flex flex-wrap justify-content-center">
    <div className="card m-2">
        <img src={nytOrNot} className="card-img-top" alt="placeholder" width="500" height="500" />
        <div className="card-body">
            <p>Project 1 Title</p>
            <a href="https://github.com/willsha90/NYTBestSellerProject" className="card-link">Github</a>
        </div>
      </div>
    <div className="card m-2">
        <img src={cowboyBoot} className="card-img-top" alt="neon cowboy boot" width="200" height="auto"/>
        <div className="card-body">
            <p>Project 1 Title</p>
            <a href="#" className="card-link">Github</a>
        </div>
      </div>
      <div className="card m-2">
        <img src={lipStick} className="card-img-top" alt="placeholder" />
        <div className="card-body">
            <p>Project 1 Title</p>
            <a href="#" className="card-link">Github</a>
        </div>
      </div>
      <div className="card m-2">
        <img src={rainbows} className="card-img-top" alt="placeholder" width="500" height="500" />
        <div className="card-body">
            <p>Project 1 Title</p>
            <a href="#" className="card-link">Github</a>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
