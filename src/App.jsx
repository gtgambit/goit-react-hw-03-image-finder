import { Component } from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Loader } from './components/Loader/Loader';
import { Button } from './components/Button/Button';
import { Modal } from './components/Modal/Modal';
import { FetchPhotos } from 'Services/Api';
import css from './App.module.css';

export class App extends Component {
  state = {
    page: 1,
    photos: [],
    query: null,
    btnShow: false,
    largeImageUrl: null,
    isLoader: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      if (!this.state.query) {
        alert('введіть щось');
        return;
      }
      this.setState({ isLoader: true });
      const data = await FetchPhotos(this.state.query, this.state.page);
      this.setState({ isLoader: false });
      if (!data.hits.length) {
        alert('нема таких фото');
        return;
      }
      if (this.state.page === Math.ceil(data.totalHits / 12)) {
        this.setState({ photos: data.hits, btnShow: false });
        alert('Фото скінчились');
        return;
      }
      this.setState({
        photos: [...this.state.photos, ...data.hits],
        btnShow: true,
      });
    }
  }

  onFormSubmit = query => {
    this.setState({ query, photos: [], page: 1 });
  };

  onButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onClickOpenModal = largeImageUrl => {
    this.setState({ largeImageUrl });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar searchBar={this.onFormSubmit} />
        <ImageGallery
          imageGallery={this.state.photos}
          onClickOpenModal={this.onClickOpenModal}
        ></ImageGallery>
        {this.state.isLoader && <Loader />}
        {this.state.btnShow && <Button onButtonClick={this.onButtonClick} />}
        {this.state.largeImageUrl && (
          <Modal
            onClickOpenModal={this.onClickOpenModal}
            largeImageUrl={this.state.largeImageUrl}
          />
        )}
      </div>
    );
  }
}
