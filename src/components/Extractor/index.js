import React, { useState, useEffect } from 'react';
import { postQuery, usersQuery } from '@constants';
import List from '@screens/Home/components/List';
import { Get } from '@api/action.js';

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
		const postArray = [];
		const usersArray = [];
		postArray.push(IdsResponse);
		usersArray.push(usersResponse);
		setPostList(postArray);
		setUserList(usersArray);
		setLoadingIndicator(false);
	};
	return (
		<List
			postList={postList}
			userList={userList}
			loadingIndicator={loadingIndicator}
		/>
	);
};
export default Extrator;
