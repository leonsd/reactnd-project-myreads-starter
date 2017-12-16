import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'

class SearchBooks extends Component {
  state = {
    books: []
  }

  onUpdateQuery = (query) => {
    const books = this.state.books

    if (query.trim()) {
      this.searchBooks(query)
    } else if (books.length > 0) {
      this.setState({ books: [] })
    }
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then(results => {
      if (results.length) {
        const books = this.props.books.filter(book => book.shelf !== undefined)

        results = results.map(b => {
          books.find(book => (
            book.id === b.id ? b = book : false
          ))

         return b
        })
      }

      this.setState({ books: results.length ? results : [] })
    })
  }

  render() {
    const { onUpdateShelf } = this.props

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="500" handler="onChange">
              <input onChange={(e) => this.onUpdateQuery(e.target.value)} type="text" placeholder="Search by title or author"/>
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <Book books={this.state.books} onUpdateShelf={onUpdateShelf}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks