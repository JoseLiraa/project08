import React from 'react';
import { View } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import styles from './styles';
import Extrator from '@components/Extractor';

const Home = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Extrator />
		</View>
	);
};

export default Home;
