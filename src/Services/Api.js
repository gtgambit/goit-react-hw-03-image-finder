import axios from 'axios';

export const FetchPhotos = async (searchQuery, page) => {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      q: searchQuery,
      page: page,
      key: '31174976-e4ea20c1e3f3139c1b6ab1378',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return data;
};
