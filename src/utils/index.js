import { postQuery } from '@constants';

export const randomNumber = number => {
	if (number) {
		return Math.floor(Math.random() * number) + 1;
	}
	return null;
};
export const getPath = id => {
	if (id) {
		const coment = '/comments';
		const concatPath = `${postQuery}/${id}${coment}`;
		return concatPath;
	}
	return null;
};
