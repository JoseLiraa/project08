import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import Card from '@components/Card';
import { theColors } from '@themes';
import styles from './styles';
import { axiosData } from '@api';
import { getPath } from '@utils';
import Comment from './components/comment';
import { useTranslation } from 'react-i18next';

const DetailPost = ({ route, navigation }) => {
	const { item, userList } = route.params;

	const { t, i18n } = useTranslation();

	const [commentList, setCommentList] = useState([]);
	const [loadingIndicator, setLoadingIndicator] = useState(true);

	const query = getPath(item.id);

	useEffect(() => {
		const GetComment = async () => {
			const CommentResponse = await axiosData({
				method: 'get',
				url: query,
			});
			const commentArray = [];
			commentArray.push(CommentResponse.data);
			setCommentList(commentArray);
			setLoadingIndicator(false);
		};
		GetComment();
	}, []);

	const keyExtractor = (item, index) => `${item}-${index}`;

	return (
		<View style={styles.container}>
			<Card
				key={item}
				item={item}
				userList={userList}
				id={item.userId}
				button={false}
			/>
			<Text style={styles.subTitle}>{t('DetailPost.subTitle')}</Text>
			<FlatList
				contentContainerStyle={styles.list}
				data={commentList[0]}
				keyExtractor={keyExtractor}
				numColumns={1}
				initialNumToRender={10}
				maxToRenderPerBatch={10}
				renderItem={({ item }) => <Comment key={keyExtractor} item={item} />}
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

export default DetailPost;
