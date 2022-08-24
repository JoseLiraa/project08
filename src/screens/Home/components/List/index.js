import React, { useState } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import { theColors } from '@themes';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import Card from '@components/Card';
import Button from '@components/Button';
import Input from '@components/Input';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const List = ({ postList, userList, loadingIndicator, adding }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { t, i18n } = useTranslation();

	const add = () => {
		adding(title, description);
	};

	const keyExtractor = (item, index) => `${item}-${index}`;

	return (
		<>
			<View style={styles.container}>
				<Input
					maxLength={76}
					placeholder={t('home.title')}
					value={title}
					onChangeText={setTitle}
					icon={<Entypo name="keyboard" size={20} color={theColors.green} />}
				/>
				<Input
					multiline
					maxLength={150}
					placeholder={t('home.description')}
					value={description}
					onChangeText={setDescription}
					icon={
						<MaterialCommunityIcons
							name="comment-text-outline"
							size={20}
							color={theColors.green}
						/>
					}
				/>
				<Button buttonTitle={t('home.buttonTitle')} action={add} />
			</View>
			<Text style={styles.subTitle}>{t('home.subTitle')}</Text>
			<FlatList
				contentContainerStyle={styles.list}
				data={postList}
				keyExtractor={keyExtractor}
				numColumns={1}
				initialNumToRender={10}
				maxToRenderPerBatch={10}
				renderItem={({ item }) => (
					<Card
						item={item}
						userList={userList}
						id={item.userId}
						button={true}
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
		</>
	);
};

export default List;
