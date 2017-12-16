import React from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

const Books = (props) => {
  const { books, onUpdateShelf } = props
  books.sort(sortBy('title'))

  return(
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`
                }}>
              </div>
              <div className="book-shelf-changer">
                <select value={book.shelf ? book.shelf : "none"} onChange={(e) => onUpdateShelf(book, e.target.value)}>
                  <option value="no" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors ? book.authors.map((author, index) => (
              <div key={index} className="book-authors">{author}</div>
            )) : ''}
          </div>
        </li>
      ))}
    </ol>
  )
}

Books.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
}

export default Books