import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageUrl,
  tags,
  onClick,
}) => {
  const getLargeImageUrl = () => {
    onClick(largeImageUrl);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        className={css.ImageGalleryItemImg}
        alt={tags}
        onClick={getLargeImageUrl}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onImageClick: PropTypes.func,
  tags: PropTypes.string,
};
