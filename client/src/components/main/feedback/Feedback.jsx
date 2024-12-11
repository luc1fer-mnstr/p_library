import { useState } from 'react';
import './feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit feedback (for now just a message)
    setMessage("Thank you for your feedback!");
    setFeedback('');
    setRating(0);
    setName('');
  };

  return (
    <section className="feedback-section">
      <div className="feedback-container">
        <h2 className="section-title">We Value Your Feedback</h2>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="feedback-form">
          <label className="form-label" htmlFor="name">Your Name (Optional)</label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          
          <label className="form-label" htmlFor="rating">Rate Us (1 to 5)</label>
          <input
            type="number"
            id="rating"
            className="form-input"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            placeholder="1 to 5"
          />

          <label className="form-label" htmlFor="feedback">Your Feedback</label>
          <textarea
            id="feedback"
            className="form-input"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here"
          ></textarea>

          <button type="submit" className="submit-button">Submit Feedback</button>
        </form>

        {/* Display success message */}
        {message && <p className="success-message">{message}</p>}

        {/* Testimonials (optional) */}
        <div className="testimonials">
          <p>"This platform is amazing, it really helps me stay organized!" - User 1</p>
          <p>"Great job on the design and functionality. Well done!" - User 2</p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
