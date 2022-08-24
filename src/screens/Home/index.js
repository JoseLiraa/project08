import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import styles from './styles';
import Extrator from '@components/Extractor';

const Home = () => {
	const { t, i18n } = useTranslation();

	return (
		<View style={styles.container}>
			<Header />
			<Form />
			<Text style={styles.subTitle}>{t('home.subTitle')}</Text>
			<Extrator />
		</View>
	);
};

export default Home;
