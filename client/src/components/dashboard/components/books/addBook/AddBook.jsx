import React, { useState } from 'react';
import './addBook.css';
import axios from 'axios';

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    
    axios.post('http://localhost:3002/dashboard/add-book',{
        bookName: bookName,
        author: author,
        type: type,
        file: file
    }).then(() => {
        console.log("New Book succefully added")
        setBookName('')
        setAuthor('')
        setType('')
        setFile(null)
    })
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <div className="form-group">
        <label htmlFor="bookName" className="form-label">
          Book Name
        </label>
        <input
          type="text"
          id="bookName"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="type" className="form-label">
          Type
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="form-select"
          required
        >
          <option value="">Choose option</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="comics">Comics</option>
          <option value="textbook">Textbook</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="file" className="form-label">
          Upload File
        </label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-input"
          required
        />
      </div>

      <div>
        <button type="submit" className="submit-btn">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddBook;
