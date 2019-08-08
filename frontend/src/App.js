import React, {Component} from 'react';
import './App.css';
import Books from './components/Books'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    };
  }
  

 async componentDidMount(){
   fetch('http://127.0.0.1:8000/api/books/')
    .then(res => res.json())
    .then(books => this.setState({books}))
 }

  render() {
    const {books} = this.state;
    return (
      <div className="App">
        <h2>Welcome to Book Search Engine</h2>
        <Books books={books}/>        
      </div>
    );
  }

}

export default App;
