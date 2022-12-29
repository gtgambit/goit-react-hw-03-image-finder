import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { Component } from 'react';

export class Modal extends Component {
  handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClickOpenModal();
    }
  };

  onCloseModal = () => {
    this.props.onClickOpenModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModal);
  }

  onEscPress(event) {
    if (event.code === 'Escape') return;
  }

  render() {
    return (
      <div className={css.Overlay} onClick={this.handleBackdrop}>
        <div className={css.Modal}>
          <img src={this.props.largeImageUrl} alt="Amazing photos" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageUrl: PropTypes.string,
  onImageClick: PropTypes.func,
};
