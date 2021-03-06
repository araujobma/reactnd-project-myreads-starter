import React from 'react'
import './App.css'

class Book extends React.Component {



  render(){
    return(
     <div className="book">
      <div className="book-top">
        { this.props.book.imageLinks ?       
          <div className="book-cover" 
           style={{ width: 128, height: 193,
           backgroundImage: 'url('+ this.props.book.imageLinks.thumbnail +')' }}>
          </div>
        : <div className="book-cover" 
           style={{ width: 128, height: 193,
           backgroundImage: 'url(http://via.placeholder.com/128x193?text=NoCover)' }}>
          </div>

        }
        <div className="book-shelf-changer">
          <select id={this.props.book.id} 
           onChange={this.props.changeBookShelf}
           value={this.props.book.shelf ? this.props.book.shelf : "none"}
          >
            <option value="only label" disabled>Move to...</option>
            {(this.props.book.shelf === "currentlyReading") ? 
              (<option value="currentlyReading"> Currently Reading &#10003;</option>)
              : (<option value="currentlyReading"> Currently Reading</option>)
            }
            {(this.props.book.shelf === "wantToRead") ? 
              (<option value="wantToRead"> Want to Read &#10003;</option>)
              : (<option value="wantToRead"> Want to Read </option>)
            }
            {(this.props.book.shelf === "read") ? 
              (<option value="read"> Read &#10003;</option>)
              : (<option value="read"> Read</option>)
            }
            {(this.props.book.shelf === undefined) ? 
              (<option value="none"> None &#10003;</option>)
              : (<option value="none"> None</option>)
            }
          </select>
        </div>
      </div>
      <div className="book-title">{this.props.book.title}</div>
      <div className="book-authors">
       {this.props.book.authors ? this.props.book.authors.join('\n') : ''}
      </div>
     </div>



    ) 
  }

}

export default Book;