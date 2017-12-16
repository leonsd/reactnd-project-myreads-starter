import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

const Shelf = (props) => {
  const { shelfs, onUpdateShelf } = props

  return(
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfs.map(shelf => (
              <div key={shelf.name} className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                  <Book books={shelf.books} onUpdateShelf={onUpdateShelf}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default Shelf