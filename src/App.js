import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'

class BooksApp extends Component {
  state = {
    currentlyReading: [],
    wantToRead:       [],
    read:             []
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      let books = {
        currentlyReading: [],
        wantToRead:       [],
        read:             [],
      }

      data.forEach(book => {
        switch (book.shelf) {
          case "currentlyReading":
            books.currentlyReading.push(book)
            break;
          case "wantToRead":
            books.wantToRead.push(book)
            break;
          case "read":
            books.read.push(book)
            break;
          default:
            break;
        }
      });

      this.setState({
        currentlyReading: books.currentlyReading,
        wantToRead:       books.wantToRead,
        read:             books.read
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            books={this.state}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp