import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Passport Size Photo Hadsaw kakazai .jpg'




const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Hadsaw Kakazai" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            A year experience as an associate software engineer, worked in a diverse fields.
            I worked as MERN stack developer @ Fastech Systems, where I have learned react and node.js
            with hands-on experience in identifying web-based user interactions along with designing and
            implementing highly-responsive user interface components by deploying React concepts. Furthermore, I worked 
            as a student researcher @ NTNU University, Norway. I got a chance to work on deep learning projects, 
            Human Activity Recongination with belt sensor dataset. In this project I used CNN for feature learning along with Transformer Encoder 
            with BiLSTM branch.

          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
