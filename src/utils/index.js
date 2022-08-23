export const userId = Math.floor(Math.random() * 10) + 1;
export const getPath = id => {
	if (id) {
		const coment = '/comments';
		const concatPath = `${id}${coment}`;
		return concatPath;
	}
	return null;
};
