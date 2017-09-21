import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link,Route,Switch,Redirect} from 'react-router-dom'
import Search from './Search'
import Shelf from './Shelf'

class BooksApp extends React.Component {
  state = {
    myBookShelf: [] 
  }

  componentDidMount(){

    BooksAPI.getAll().then((response)=>{
      this.setState({
        myBookShelf: response
      });
    });

  }

  changeBookShelf = (event)=>{
    const selectedShelf = event.target.value;
    const id = event.target.id;
    BooksAPI.update({id: id}, selectedShelf)
    .then(()=>{
      BooksAPI.getAll().then((response)=>{
        this.setState({
          myBookShelf: response
        });
      });
    });

  }

  render() {
    return (
      <div className="app">

       <Switch>  

        <Route path="/search" render={()=>(
            < Search myBookShelf={this.state.myBookShelf} changeBookShelf={this.changeBookShelf} />
            ) 
          } 
        />

        <Route exact path="/" render={()=>(      
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

                <Shelf 
                 myBookShelf={this.state.myBookShelf}
                 changeBookShelf={this.changeBookShelf}
                 shelfTitle={"Currently Reading"}
                 shelf={"currentlyReading"}
                />

                <Shelf 
                 myBookShelf={this.state.myBookShelf}
                 changeBookShelf={this.changeBookShelf}
                 shelfTitle={"Want to Read"}
                 shelf={"wantToRead"}
                />

                <Shelf 
                 myBookShelf={this.state.myBookShelf}
                 changeBookShelf={this.changeBookShelf}
                 shelfTitle={"Read"}
                 shelf={"read"}
                />
                
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
               Add a book
              </Link>
            </div>
         </div>
        )} />

        <Redirect from="/" to="/" />

       </Switch> 
      </div>
    )
  }
}

export default BooksApp
