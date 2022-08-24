import React, { useState, useEffect } from 'react';
import { postQuery, usersQuery } from '@constants';
import List from '@screens/Home/components/List';
import { randomNumber } from '@utils';
import { Get, Post } from '@api/action.js';

const Extrator = () => {
	const [postList, setPostList] = useState([]);
	const [userList, setUserList] = useState(['']);
	const [loadingIndicator, setLoadingIndicator] = useState(true);

	useEffect(() => {
		GetPost();
	}, []);

	const GetPost = async () => {
		const IdsResponse = await Get(postQuery);
		const usersResponse = await Get(usersQuery);
		setPostList(IdsResponse);
		setUserList(usersResponse);
		setLoadingIndicator(false);
	};

	const getUserId = randomNumber(10);

	const adding = async (title, description) => {
		if (title === '' || description === '') {
			alert('Please type something!');
		} else {
			const sendPost = await Post(postQuery, {
				title,
				body: description,
				userId: getUserId,
			});
			setPostList(postList => [sendPost, ...postList]);
		}
	};
	console.log(postList);
	return (
		<>
			<List
				postList={postList}
				userList={userList}
				loadingIndicator={loadingIndicator}
				adding={adding}
			/>
		</>
	);
};
export default Extrator;
