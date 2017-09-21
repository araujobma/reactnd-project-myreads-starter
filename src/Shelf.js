import React from 'react'
import Book from './Book'
import './App.css'

class Shelf extends React.Component {



	render(){
	  return(
	   <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           {this.props.myBookShelf.filter((book)=> (book.shelf === this.props.shelf))
           .map((book)=> (
            <li key={book.id}>
              <Book 
               book={book}
               changeBookShelf={this.props.changeBookShelf}
              />       
            </li>
           ))} 
          </ol>
        </div>
       </div>



	  )	
	}

}

export default Shelf;