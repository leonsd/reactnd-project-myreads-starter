import React, { Component } from 'react'

class SelectShelf extends Component {
  render() {
    const shelf          = this.props.shelf
    let wantToRead       = ""
    let currentlyReading = ""
    let read             = ""
    let none             = ""

    switch (shelf) {
      case "currentlyReading":
        currentlyReading = "selected"
        break;
      case "wantToRead":
        wantToRead = "selected"
        break;
      case "read":
        read = "selected"
        break;
      default:
        none = "selected"
        break;
    }

    return(
      <select>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading" selected={currentlyReading}>Currently Reading</option>
        <option value="wantToRead" selected={wantToRead}>Want to Read</option>
        <option value="read" selected={read}>Read</option>
        <option value="none" selected={none}>None</option>
      </select>
    )
  }
}

export default SelectShelf