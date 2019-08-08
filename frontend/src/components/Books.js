import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            filtered: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount(){
        this.setState({
            filtered: this.props.books
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            filtered: nextProps.books 
        });
    }

    handleChange(e){
        let bookList = []
        let newList = []
        if(e.target.value!==""){
            bookList = this.props.books;
            newList = bookList.filter(book => {
                const low = book.name.toLowerCase();
                const lowAuthor = book.author.toLowerCase();
                const lowPublisher = book.publisher.toLowerCase();
                const lowDescription = book.description.toLowerCase();
                const filter = e.target.value.toLowerCase();
                if(low.includes(filter)){
                    return low.includes(filter)
                }
                else if(lowAuthor.includes(filter)){
                    return(lowAuthor.includes(filter))
                }
                else if(lowPublisher.includes(filter)){
                    return(lowPublisher.includes(filter))
                }
                else if(lowDescription.includes(filter)){
                    return(lowDescription.includes(filter))
                }
            });
        }
        else{
            newList = this.props.books;
        }
        this.setState({
            filtered: newList
        });
    }

    render() {
        return (
            <div className="container searchEngine">
                <div>
                    <input  type="text" 
                            className="form-control" 
                            placeholder="Type anything..."
                            onChange={this.handleChange}
                    />
                </div>
                <div className="result">
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Author</th>
                            <th scope="col">Description</th>
                            <th scope="col">Publisher</th>
                        </tr>
                        </thead>
                        {this.state.filtered.map(item =>(
                            <tbody key={item.id}>
                            <tr>
                            <th>{item.name}</th>
                            <th>{item.author}</th>
                            <th>{item.description}</th>
                            <th>{item.publisher}</th>
                            </tr>
                        </tbody>
                        ))}
                    </table>
                </div>

            </div>
                
        )
    }
}

Books.propTypes = {
    books: PropTypes.array.isRequired
}

export default Books;
