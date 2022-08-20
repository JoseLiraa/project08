import axios from 'axios';

export const axiosData = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
});
