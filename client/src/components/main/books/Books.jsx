import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import Rating from 'react-rating-stars-component'; // Install this package to enable star ratings
import './books.css'

// images
import jsbook from '../assets/js.jpg'
import reactbook from '../assets/react.jpg'
import cssbook from '../assets/node.png'
import databook from '../assets/data.jpg'
import mlbook from '../assets/ml.jpg'
import edubook from '../assets/education.jpg'
import anatomybook from '../assets/anatomy.jpg'
import nursingbook from '../assets/nursing.jpg'


const BookSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [books] = useState([
        { id: 1, name: 'JavaScript Basics', author: 'John Doe', category: 'Programming', rating: 4, coverImage: jsbook, downloadLink: '/books/js-basics.pdf' },
        { id: 2, name: 'React for Beginners', author: 'Jane Smith', category: 'Programming', rating: 5, coverImage: reactbook, downloadLink: '/books/react-beginners.pdf' },
        { id: 3, name: 'Node JS', author: 'Johnathom Wealer', category: 'Programming', rating: 3, coverImage: cssbook, downloadLink: '/books/advanced-css.pdf' },
        { id: 4, name: 'Data Science Handbook', author: 'Sarah Brown', category: 'Data Science', rating: 4, coverImage: databook, downloadLink: '/books/data-science.pdf' },
        { id: 5, name: 'Machine Learning 101', author: 'Michael White', category: 'Data Science', rating: 5, coverImage: mlbook, downloadLink: '/books/machine-learning.pdf' },
        { id: 6, name: 'Teacher Development', author: 'Susan', category: 'Literature', rating: 5, coverImage: edubook, downloadLink: '/books/machine-learning.pdf' },
        { id: 7, name: 'Anatomy & Physiology', author: 'Anne Waugh', category: 'Literature', rating: 5, coverImage: anatomybook, downloadLink: '/books/machine-learning.pdf' },
        { id: 8, name: 'Nursing', author: 'Michael White', category: 'Literature', rating: 5, coverImage: nursingbook, downloadLink: '/books/machine-learning.pdf' },
        // Add more books as needed
    ]);

    const categories = ['All', 'Programming', 'Data Science', 'Design', 'Literature'];

    // Filter books based on category and search query
    const filteredBooks = books.filter(book => 
        (selectedCategory === 'All' || book.category === selectedCategory) && 
        (book.name.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <section className="book-section">
            <div className="container">
                {/* Search and Category Filter */}
                <div className="filter-bar">
                    <input
                        type="text"
                        placeholder="Search books by name or author..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="search-input"
                    />
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="category-select"
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                {/* Book Cards */}
                <div className="book-grid">
                    {filteredBooks.map(book => (
                        <div key={book.id} className="book-card">
                            <div className="book-cover">
                                <img src={book.coverImage} alt={book.name} />
                            </div>
                            <div className="book-details">
                                <h3 className="book-title">{book.name}</h3>
                                <p className="book-author">by {book.author}</p>
                                
                                {/* Star Rating */}
                                <div className="rating">
                                    <Rating
                                        count={5}
                                        value={book.rating}
                                        edit={false} // Set this to true if you want users to be able to rate
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                
                                <a href={book.downloadLink} download>
                                    <button className="download-btn">
                                        <FaDownload className="download-icon" /> Download
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookSection;
