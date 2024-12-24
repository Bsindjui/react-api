import axios from 'axios';

const API_BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = '59a491c2939460d6f8396b5a10d5c597';

export const fetchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        apikey: API_KEY,
        s: searchTerm,
      },
    });
    return response.data.Search; 
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
