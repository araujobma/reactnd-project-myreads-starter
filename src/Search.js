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
                       <select defaultValue={result.shelf}>
                         <option defaultValue="none" disabled>Move to...</option>
                         {(result.shelf === "currentlyReading") ? 
                           (<option defaultValue="currentlyReading"> Currently Reading &#10003;</option>)
                           : (<option defaultValue="currentlyReading"> Currently Reading</option>)
                         }
                         {(result.shelf === "wantToRead") ? 
                           (<option defaultValue="wantToRead"> Want to Read &#10003;</option>)
                           : (<option defaultValue="wantToRead"> Want to Read </option>)
                         }
                         {(result.shelf === "read") ? 
                           (<option defaultValue="read"> Read &#10003;</option>)
                           : (<option defaultValue="read"> Read</option>)
                         }
                         {(result.shelf === undefined) ? 
                           (<option defaultValue="none"> None &#10003;</option>)
                           : (<option defaultValue="none"> None</option>)
                         }
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