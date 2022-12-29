import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imageGallery, onClickOpenModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {imageGallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageUrl={largeImageURL}
          onClick={onClickOpenModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  onImageClick: PropTypes.func,
};
