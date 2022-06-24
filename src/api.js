const axios = require('axios').default;
axios.defaults.baseURL = 'https://pixabay.com/api/'

const API_KEY ='28211530-9aacd352b3f11c956fdc5a9f9';

async function fetchImages(query, page, perPage) {
    const response = await axios.get(
      `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
    )
    return response
  }

export { fetchImages }