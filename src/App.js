import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link,Route} from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    myBookShelf: [] 
  }

  componentDidMount(){

    BooksAPI.getAll().then((response)=>{
      this.setState({
        myBookShelf: response
      });
    });

  }

  render() {
    return (
      <div className="app">


        <Route path="/search" component={Search} />

        <Route exact path="/" render={()=>(      
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.state.myBookShelf.filter((book)=> (book.shelf === "currentlyReading"))
                     .map((result)=> (
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.state.myBookShelf.filter((book)=> (book.shelf === "wantToRead"))
                     .map((result)=> (
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.state.myBookShelf.filter((book)=> (book.shelf === "read"))
                     .map((result)=> (
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
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
               Add a book
              </Link>
            </div>
         </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
