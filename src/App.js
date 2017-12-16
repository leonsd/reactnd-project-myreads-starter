import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Shelf from './components/Shelf'
import Search from './components/Search'
import Spinner from './components/Spinner'
import * as BooksAPI from './utils/BooksAPI'

class BooksApp extends Component {
  state = {
    books: [],
    loading: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(results => {
      this.setState({ books: results })
    })
  }

  updateShelf = (book, shelf) => {
    this.setState({ loading: true })

    BooksAPI.update(book, shelf).then(data => {
      book.shelf = shelf

      this.setState(state => (
        state.books = state.books.filter(b => b.id !== book.id).concat([book])
      ))

      this.setState({ loading: false })
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
        <Spinner loading={this.state.loading}/>
        <Route exact path="/" render={() => (
          <Shelf
            shelfs={shelfs}
            onUpdateShelf={this.updateShelf}
          />
        )}/>
        <Route exact path="/search" render={() => (
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