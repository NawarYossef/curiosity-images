import axios from 'axios';

const xhr = axios.create();

const getSearchData = (day) => {
  const config = {
    method: 'GET',
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${day}&api_key=${process.env.VUE_APP_API_KEY}`,
  };
  return xhr(config);
};

const getInitialData = () => {
  const config = {
    method: 'GET',
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/?api_key=${process.env.VUE_APP_API_KEY}`,
  };
  return xhr(config);
};

export {
  getSearchData,
  getInitialData,
};
