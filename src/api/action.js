import { axiosData } from '.';

export const Get = path => {
	return axiosData
		.get(path)
		.then(res => res.data)
		.catch(err => console.log(err));
};

export const Post = (path, data) => {
	return axiosData
		.post(path, data)
		.then(res => res.data)
		.catch(err => console.log(err));
};
