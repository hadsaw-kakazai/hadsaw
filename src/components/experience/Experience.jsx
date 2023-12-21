import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import IMG1 from "../../assets/fastech_systems_logo.jpg"
import IMG2 from "../../assets/logo-ntnu.png"
import IMG3 from "../../assets/youpalgroup_logo.jpg"

const Experience = () => {
 
  const experience = [
    {
      id:  1,
      job_title:"Student Researcher",
      company_title : "NTNU University",
      location:"Gjovik, Norway",
      date: "8 Aug 2023 - 15 Dec 2023",
      description:"As a researcher at NTNU, my focus lies in Neurological Disorder Classification. I specialize in data processing and employ machine learning algorithms to enhance diagnostic precision. My strengths include adept report writing and documentation, ensuring the transparency of research methodologies. I excel in presenting and communicating complex findings to diverse audiences, contributing to the advancement of understanding and addressing neurological disorders",
      img:IMG2


    },
    {
      id:  2,
      job_title:"Web Developer",
      company_title : "FasTech Systems",
      location:"Sukkur, Sindh",
      date: "8 July 2023 - 8 Aug 2023",
      description:"As a Web Developer, I've executed end-to-end web solutions using the MERN stack. Specializing in React.js, I've designed intuitive interfaces and dynamic front-end applications. Additionally, I've built robust back-end services with Node.js, Express, and MongoDB for efficient database management, ensuring seamless integration between front-end and back-end components",
      img:IMG1


    },
    {
      id:  3,
      job_title:"UX Designer",
      company_title : "Youpal Group",
      location:"Remote",
      date: "1 April 2023 - 1 May 2023",
      description:"As a UX Designer at Youpal Group, I contributed my expertise to various projects, specializing in UI/UX design. With a focus on creating seamless and intuitive user experiences, I played a pivotal role in enhancing the overall design aesthetics. My responsibilities included collaborating with cross-functional teams to translate user needs into visually appealing and functional interfaces. Through my work at Youpal Group, I actively contributed to elevating the user experience across diverse projects.",
      img:IMG3


    }
  ]

  return (
    <>
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Associate Software Engineer</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React , Redux-toolkit</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Machine Learning</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Research/ Journal Writing</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Tailwind</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Typescript</h4>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section >
      <div id='experience_company'>
        <div className='logo_div'>
          <img src={experience[0].img} alt='ntnu'/>
        </div>
        <div className='detail_div'>
          <h2>{experience[0].job_title}</h2>
          <h3>{experience[0].company_title}</h3>
          <span>{experience[0].location}, {experience[0].date}</span>
          
          <p>{experience[0].description}</p>
          
          
        </div>
        
      </div>

      <div id='experience_company'>
        <div className='logo_div'>
          <img src={experience[1].img} alt='ntnu'/>
        </div>
        <div className='detail_div'>
          <h2>{experience[1].job_title}</h2>
          <h3>{experience[1].company_title}</h3>
          <span>{experience[1].location}, {experience[1].date}</span>
       

          <p>{experience[1].description}</p>
          
          
        </div>
        
      </div>


      <div id='experience_company'>
        <div className='logo_div'>
          <img src={experience[2].img} alt='ntnu'/>
        </div>
        <div className='detail_div'>
          <h2>{experience[2].job_title}</h2>
          <h3>{experience[2].company_title}</h3>
          <span>{experience[2].location}, {experience[2].date}</span>
          
          <p>{experience[2].description}</p>
          
          
        </div>
        
      </div>
    </section>
    </>
    
  )
}

export default Experience