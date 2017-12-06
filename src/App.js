import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Shelf from './components/Shelf'
import Search from './components/Search'
import * as BooksAPI from './utils/BooksAPI'

class BooksApp extends Component {
  state = {
      currentlyReading: [],
      wantToRead:       [],
      read:             []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks() {
    BooksAPI.getAll().then(data => {
      let books = {
        currentlyReading: [],
        wantToRead:       [],
        read:             []
      }

      for (const book of data) {
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
      }

      this.setState({
        currentlyReading: books.currentlyReading,
        wantToRead:       books.wantToRead,
        read:             books.read
      })
    })
  }

  updateShelf = (book, shelf) => {
    switch (book.shelf) {
      case "currentlyReading":
        this.setState((state) => ({
          currentlyReading: state.currentlyReading.filter((b) => b.id !== book.id)
        }))
        break;
        case "wantToRead":
        this.setState((state) => ({
          wantToRead: state.wantToRead.filter((b) => b.id !== book.id)
        }))
        break;
        case "read":
        this.setState((state) => ({
          read: state.read.filter((b) => b.id !== book.id)
        }))
        break;
      default:
        break;
    }

    book.shelf = shelf

    BooksAPI.update(book, shelf).then(data => {
      switch (book.shelf) {
        case "currentlyReading":
          this.setState((state) => ({
            currentlyReading: state.currentlyReading.concat([ book ])
          }))
          break;
        case "wantToRead":
          this.setState((state) => ({
            wantToRead: state.wantToRead.concat([ book ])
          }))
          break;
        case "read":
          this.setState((state) => ({
            read: state.read.concat([ book ])
          }))
          break;
        default:
          break;
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Shelf
            shelfs={this.state}
            onUpdateShelf={this.updateShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <Search
            books={this.state}
            onUpdateShelf={this.updateShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp