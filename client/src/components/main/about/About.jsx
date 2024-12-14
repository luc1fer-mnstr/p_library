import React from 'react'
import './about.css'

import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'


const creators = [
  { name: "Kyaw Lin", role: "Frontend Developer", image: user1 },
  { name: "Khaing Zin Thet", role: "UI/UX Designer", image: user2 },
  { name: "Phyo Wai Aung", role: "UI/UX Designer", image: user3 },
  { name: "Yan Naing Kyaw", role: "Project Manager", image: user4 },
  { name: "Wai Yan Min", role: "Backend Developer", image: user5 },
  { name: "Paul Lee", role: "DevOps Engineer", image: user1 },
  { name: "Sophia Miller", role: "Full Stack Developer", image: user3},
  { name: "Oliver Wilson", role: "Database Administrator", image: user4 },
];


function About() {
  return (
    <section className="about-section">
  <h1 className="about-heading">About Our Library</h1>
  <p className="about-description">
    This online library is exclusively created for PIU students by Batch 1 IT students. Explore, learn, and grow with ease!
  </p>

  <div className="creator-grid">
    {creators.map((creator, index) => (
      <div key={index} className="creator-card">
        <div className="image-wrapper">
          <img src={creator.image} alt={creator.name} className="creator-image" />
        </div>
        <h3>{creator.name}</h3>
        <p>{creator.role}</p>
      </div>
    ))}
  </div>

  <p className="acknowledgment">
    Special thanks to our mentors and the PIU IT Department for their guidance and support.
  </p>
</section>

  )
}

export default About
