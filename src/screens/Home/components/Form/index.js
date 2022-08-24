import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { theColors } from '@themes';
import { useTranslation } from 'react-i18next';
import { randomNumber } from '@utils';
import styles from './styles';
import Button from '@components/Button';
import Input from '@components/Input';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { axiosData } from '@api';
import { postQuery } from '@constants';

const Form = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { t, i18n } = useTranslation();

	const getUserId = randomNumber(10);

	const adding = () => {
		if (title === '' || description === '') {
			alert('Please type something!');
		} else {
			const SendPost = async () => {
				const sendResponse = await axiosData({
					method: 'post',
					url: postQuery,
					data: {
						title,
						body: description,
						getUserId,
					},
				});
				console.log(sendResponse.data);
			};
			SendPost();
		}
	};

	return (
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
			<Button buttonTitle={t('home.buttonTitle')} action={adding} />
		</View>
	);
};
export default Form;
