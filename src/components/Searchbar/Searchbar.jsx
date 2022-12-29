import css from './Searchbar.module.css';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchBar(event.target.elements[1].value.trim());
    this.setState({ searchQuery: event.target.elements[1].value });
    event.target.reset();
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormBtn}>
            <span className={css.SearchFormBtnLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
