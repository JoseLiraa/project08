import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const DetailPost = ({ route }) => {
	const { item } = route.params;

	return (
		<View style={styles.container}>
			<Text>Aqui</Text>
		</View>
	);
};

export default DetailPost;
