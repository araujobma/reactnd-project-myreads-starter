import React from 'react'
import './App.css'
import Book from './Book'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'



class Search extends React.Component {
  state ={
    searchResult: [],
    searchTerm: ""
  }

    

  searchBook = (event)=>{
    this.setState({
      searchTerm: event.target.value
    });
    
    
    if(event.target.value === ""){
        this.setState({
        searchResult: [] 
      });
    }else{
      BooksAPI.search(event.target.value ,20).then((results)=>{
        try{
        if (results.length > 0){
          let idxBookFound;
          this.props.myBookShelf.forEach((book)=>{
            idxBookFound = results.findIndex((result)=>(result.id === book.id))
            if(idxBookFound !== -1){
              results[idxBookFound] = book;
            }
          
          });
          if(this.state.searchTerm !== ""){
            this.setState({
              searchResult: results
            });
          }
        }else{
          if(this.state.searchTerm !== ""){
            this.setState({
              searchResult: results
            });
          }
        }
        }catch(err){
          this.setState({searchResult: []});
        }
       

      });

    }  

  }

  componentWillReceiveProps(nextProps){
   let idxBookFound;
   let results = this.state.searchResult;
   nextProps.myBookShelf.forEach((book)=>{
     idxBookFound = results.findIndex((result)=>(result.id === book.id))
     if(idxBookFound !== -1){
       results[idxBookFound] = book;
     }
        
   });
   
   this.setState({
    searchResult: results
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
                 value={this.state.searchTerm}
                 onChange={this.searchBook}/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
               {this.state.searchResult.map((result)=> (
                <li key={result.id}>
                 <Book 
                  book={result}
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


export default Search;