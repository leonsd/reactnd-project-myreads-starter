import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Shelf from './components/Shelf'
import Search from './components/Search'
import * as BooksAPI from './utils/BooksAPI'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks() {
    BooksAPI.getAll().then(results => {
      this.setState({ books: results })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      book.shelf = shelf

      this.setState(state => (
        state.books = state.books.filter(b => b.id !== book.id).concat([book])
      ))
    })
  }

  render() {
    const shelfs = [
      { name: "Currently Reading", books: this.state.books.filter(book => book.shelf === "currentlyReading") },
      { name: "Want To Read", books: this.state.books.filter(book => book.shelf === "wantToRead") },
      { name: "Read", books: this.state.books.filter(book => book.shelf === "read") },
    ]

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Shelf
            shelfs={shelfs}
            onUpdateShelf={this.updateShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <Search
            books={this.state.books}
            onUpdateShelf={this.updateShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp