import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import Selector from '../../components/Selector';
import styles from './styles';

const Home = () => {
	const { t, i18n } = useTranslation();
	return (
		<View style={styles.container}>
			<Selector />
			<Text style={styles.text}>{t('home.welcome')} </Text>
		</View>
	);
};

export default Home;
