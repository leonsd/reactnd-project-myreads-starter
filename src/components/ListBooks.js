import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SelectShelf from './SelectShelf'

class ListBooks extends Component {
  render() {
    const currentlyReading = this.props.books.currentlyReading
    const wantToRead       = this.props.books.wantToRead
    const read             = this.props.books.read

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReading.map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${book.imageLinks.thumbnail})`
                            }}>
                          </div>
                          <div className="book-shelf-changer">
                            <SelectShelf shelf={book.shelf}/>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map((author, index) => (
                          <div key={index} className="book-authors">{author}</div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantToRead.map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${book.imageLinks.thumbnail})`
                            }}>
                          </div>
                          <div className="book-shelf-changer">
                           <SelectShelf shelf={book.shelf}/>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map((author, index) => (
                          <div key={index} className="book-authors">{author}</div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {read.map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${book.imageLinks.thumbnail})`
                            }}>
                          </div>
                          <div className="book-shelf-changer">
                            <SelectShelf shelf={book.shelf}/>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        {book.authors.map((author, index) => (
                          <div key={index} className="book-authors">{author}</div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks