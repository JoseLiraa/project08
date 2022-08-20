import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import styles from './styles';
import DropShadow from 'react-native-drop-shadow';

const Card = ({ item }) => {
	const { t, i18n } = useTranslation();

	return (
		<DropShadow style={styles.shadowProp}>
			<View style={styles.container}>
				<View style={styles.idContainer}>
					<View style={styles.userId}>
						<Text>{t('home.userId')}: </Text>
						<Text>{item.userId}</Text>
					</View>
					<View style={styles.id}>
						<Text>id: </Text>
						<Text>{item.id}</Text>
					</View>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.title}>{item.title}</Text>
					<Text style={styles.description}>{item.body}</Text>
				</View>
			</View>
		</DropShadow>
	);
};
export default Card;
