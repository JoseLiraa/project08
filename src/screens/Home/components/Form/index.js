import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { theColors } from '@themes';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import Button from '@components/Button';
import Input from '@components/Input';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Form = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { t, i18n } = useTranslation();

	return (
		<View style={styles.container}>
			<Input
				maxLength={76}
				placeholder={t('home.title')}
				value={email}
				onChangeText={setEmail}
				icon={<Entypo name="keyboard" size={20} color={theColors.green} />}
			/>
			<Input
				multiline
				maxLength={230}
				placeholder={t('home.description')}
				value={password}
				onChangeText={setPassword}
				icon={
					<MaterialCommunityIcons
						name="comment-text-outline"
						size={20}
						color={theColors.green}
					/>
				}
			/>
			<Button buttonTitle={t('home.buttonTitle')} action={''} />
		</View>
	);
};
export default Form;
