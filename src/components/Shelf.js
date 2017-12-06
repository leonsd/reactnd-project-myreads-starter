import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Shelf extends Component {
  render() {
    const { currentlyReading, wantToRead, read } = this.props.shelfs
    const onUpdateShelf = this.props.onUpdateShelf;

    return(
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <Book books={currentlyReading} onUpdateShelf={onUpdateShelf}/>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want To Read</h2>
                <div className="bookshelf-books">
                  <Book books={wantToRead} onUpdateShelf={onUpdateShelf}/>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <Book books={read} onUpdateShelf={onUpdateShelf}/>
                </div>
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

export default Shelf