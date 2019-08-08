import React, { Component } from 'react'

export class BookItems extends Component {
    render() {
        return (
            <div>
                <p>{this.props.books.name}</p>
            </div>
        )
    }
}

export default BookItems
