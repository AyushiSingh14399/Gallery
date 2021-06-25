import axios from 'axios';

const baseUrl = "https://www.flickr.com/services/rest";

const apiKey = "9c2e4a838bae27f445c1f241e07c3de8";
const format = "json";
const getPhotos = "flickr.photos.getRecent";
const searchPhotos = "flickr.photos.search";


async function GetRecentPhotos(page) {
    const response = await axios.get(`${baseUrl}/?method=${getPhotos}&api_key=${apiKey}&page=${page}&format=${format}&nojsoncallback=1`);
    return response.data.photos;
}


async function SearchQuery(query, page) {
    const response = await axios.get(`${baseUrl}/?method=${searchPhotos}&api_key=${apiKey}&page=${page}&tags=${query}&text=${query}&format=json&nojsoncallback=1`);
    return response.data.photos;
}

export { GetRecentPhotos, SearchQuery };