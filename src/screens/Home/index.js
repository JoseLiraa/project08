import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import Publications from './components/Publication';
import { theColors } from '@themes';
import styles from './styles';
import Card from '@components/Card';
import { axiosData } from '@api';
import { postQuery } from '@constants';

const Home = () => {
	const { t, i18n } = useTranslation();

	const [postList, setPostList] = useState([]);
	const [loadingIndicator, setLoadingIndicator] = useState(true);

	useEffect(() => {
		const GetPost = async () => {
			const IdsResponse = await axiosData({
				method: 'get',
				url: postQuery,
			});
			const postArray = [];
			postArray.push(IdsResponse.data);
			setPostList(postArray);
			setLoadingIndicator(false);
		};
		GetPost();
	}, []);

	console.log(postList[0].length);
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
				renderItem={({ item }) => <Card key={keyExtractor} item={item} />}
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
