import axios from "axios";

const api = axios.create({
    baseURL: 'https://ada-movies-default-rtdb.firebaseio.com/'
});

export { api };