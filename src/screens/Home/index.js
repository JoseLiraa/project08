import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import Publications from './components/Publication';
import styles from './styles';

const Home = () => {
	const { t, i18n } = useTranslation();

	return (
		<ScrollView style={styles.container}>
			<Header />
			<Form />
			<Publications />
		</ScrollView>
	);
};

export default Home;
