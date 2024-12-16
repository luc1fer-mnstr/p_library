import React from 'react'
import './about.css'

import mission from '../assets/mission.mp4'
import vision from '../assets/mission.mp4'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'
import user6 from '../assets/user6.jpg'
import user7 from '../assets/user7.jpg'

const creators = [
  { name: "Phyo Wai Aung", role: "Project Manager", image: user3 },
  { name: "Wai Yan Min", role: "Fullstack Developer", image: user5 },
  { name: "Kyaw Lin", role: "Frontend Developer", image: user1 },
  { name: "Khaing Zin Thet", role: "Frontend Developer", image: user2 },
  { name: "Hon Saw", role: "Researcher", image: user6 },
  { name: "June June", role: "Tester", image: user7 },
  { name: "Yan Naing Kyaw", role: "Tester", image: user4 },
];


function About() {
  return (
    <section className="about-section">
      <h1 className="about-heading">Meet Our Creators</h1>
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
