import React, { Component } from 'react';
import BookList from '../bookList/bookList';
import PrintType from '../printType/printType';
import BookType from '../bookType/bookType';
import createURL from '../createURL';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      search: '',
      printType: '',
      bookType: ''
    };
  }

  setSearchTerm = term => {
    this.setState({
      search: term
    });
  };

  bookSearch = event => {
    event.preventDefault();
    //create url with api key, search term, and filters with custom method.
    const url = createURL(
      this.state.search,
      this.state.printType,
      this.state.bookType
    );
    //call fetch with data
    fetch(url, {
      method: 'GET',
      apiKey: 'AIzaSyC6agItGuK0kT0qzGZxhr5P8_M0CCvKVPk',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data =>
        data.items.map(items => {
          const book = {
            title: items.volumeInfo.title,
            author: items.volumeInfo.authors,
            image: items.volumeInfo.imageLinks.smallThumbnail,
            price: items.saleInfo.saleability,
            description: items.volumeInfo.description
          };

          this.setState({ books: [...this.state.books, book] });
          return book;
        })
      );
    //return books from api to state
  };
  bookTypeFilter = filter => {
    this.setState({ bookType: filter });
  };

  printTypeFilter = filter => {
    this.setState({ printType: filter });
  };

  render() {
    return (
      <React.Fragment>
        <section>
          <form>
            <label htmlFor='search'>Search:</label>
            <input
              type='text'
              name='search'
              onChange={event => this.setSearchTerm(event.target.value)}
            />
            <button type='submit' onClick={event => this.bookSearch(event)}>
              Search
            </button>
          </form>
        </section>
        <section>
          <PrintType printFilter={filter => this.printTypeFilter(filter)} />
          <BookType bookFilter={filter => this.bookTypeFilter(filter)} />
        </section>
        <BookList books={this.state.books} />
      </React.Fragment>
    );
  }
}

export default Search;
