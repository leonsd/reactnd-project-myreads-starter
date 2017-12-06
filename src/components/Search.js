import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }

  onUpdateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.searchBooks(query)
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then(data => {
        this.setState({ books: data })
      })
    } else {
      this.setState({ books: [] })
    }
  }

  render() {
    const onUpdateShelf = this.props.onUpdateShelf

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange={(e) => this.onUpdateQuery(e.target.value)} type="text" placeholder="Search by title or author"/>
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