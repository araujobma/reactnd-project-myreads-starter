import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'



class Search extends React.Component {
  state ={
    searchResult: []
  }

  searchBook = (event)=>{
    
    BooksAPI.search(event.target.value ,20).then((response)=>{
      console.log(response);
      this.setState({
        searchResult: response
      });
    });
    
    
       
  }

  render(){
    return(
          <div className="search-books">
            <div className="search-books-bar">
              
              <Link className="close-search" to="/">
                Close
              </Link>
              
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author"
                onChange={this.searchBook}/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
               {this.state.searchResult.map((result)=> (
              <li key={result.id}>
                 <div className="book">
                   <div className="book-top">
                     <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ result.imageLinks.thumbnail +')' }}></div>
                     <div className="book-shelf-changer">
                       <select value={result.shelf}>
                         <option value="none" disabled>Move to...</option>
                         <option value="currentlyReading">Currently Reading </option>
                         <option value="wantToRead">Want to Read </option>
                         <option value="read">Read </option>
                         <option value="none">None </option>
                       </select>
                     </div>
                   </div>
                   <div className="book-title">{result.title}</div>
                   <div className="book-authors">{result.authors}</div>
                 </div>
                </li>
               ))}
              </ol>
            </div>
          </div>
    )      
  }        
}          


export default Search;