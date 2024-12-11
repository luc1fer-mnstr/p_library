import React from 'react'
import './about.css'

import user1 from '../assets/user1.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'
import user6 from '../assets/user6.jpg'

const creators = [
  { name: "John Doe", role: "Frontend Developer", image: user1 },
  { name: "Jane Smith", role: "Backend Developer", image: user3 },
  { name: "Anna Brown", role: "UI/UX Designer", image: user4 },
  { name: "Mike Johnson", role: "Project Manager", image: user5 },
  { name: "Emily Davis", role: "Tester", image: user6 },
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
