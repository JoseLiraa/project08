import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
	View,
	Text,
	FlatList,
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import { theColors } from '@themes';
import styles from './styles';
import Card from '@components/Card';
import { axiosData } from '@api';
import { postQuery, usersQuery } from '@constants';

const Home = () => {
	const { t, i18n } = useTranslation();

	const [postList, setPostList] = useState([]);
	const [userList, setUserList] = useState(['']);
	const [loadingIndicator, setLoadingIndicator] = useState(true);

	useEffect(() => {
		const GetPost = async () => {
			const IdsResponse = await axiosData({
				method: 'get',
				url: postQuery,
			});
			const usersResponse = await axiosData({
				method: 'get',
				url: usersQuery,
			});
			const postArray = [];
			const usersArray = [];
			postArray.push(IdsResponse.data);
			usersArray.push(usersResponse.data);
			setPostList(postArray);
			setUserList(usersArray);
			setLoadingIndicator(false);
		};
		GetPost();
	}, [loadingIndicator]);

	const keyExtractor = (item, index) => `${item}-${index}`;

	return (
		<View style={styles.container}>
			<Header />
			<Form />
			<Text style={styles.subTitle}>{t('home.subTitle')}</Text>
			<FlatList
				contentContainerStyle={styles.list}
				data={postList[0]}
				keyExtractor={keyExtractor}
				numColumns={1}
				initialNumToRender={10}
				maxToRenderPerBatch={10}
				renderItem={({ item }) => (
					<Card
						key={keyExtractor}
						item={item}
						userList={userList[0]}
						id={item.userId}
					/>
				)}
				ListEmptyComponent={() => (
					<>
						{loadingIndicator && (
							<ActivityIndicator
								color={theColors.green}
								size="large"
								style={styles.activityIndicator}
							/>
						)}
					</>
				)}
			/>
		</View>
	);
};

export default Home;
