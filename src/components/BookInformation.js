import React, { Component } from 'react'

class BookInformation extends Component {
  componentWillMount() {
    console.log(this.props)
    // const book = this.props.location.state.book
    // console.log(book)
  }

  render() {
    return(
      <div className="book-information-container">
        <div>Description</div>
      </div>
    )
  }
}

export default BookInformation