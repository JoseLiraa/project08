import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import styles from './styles';
import DropShadow from 'react-native-drop-shadow';

const Comment = ({ item }) => {
	const { t, i18n } = useTranslation();

	return (
		<DropShadow style={styles.shadowProp}>
			<View style={styles.container}>
				<View style={styles.idContainer}>
					<View style={styles.userId}>
						<Text style={styles.head}>{t('DetailPost.postId')}: </Text>
						<Text style={styles.result}>{item.postId}</Text>
					</View>
					<View style={styles.userId}>
						<Text style={styles.head}>{t('DetailPost.userEmail')}: </Text>
						<Text style={styles.result}>{item.email}</Text>
					</View>
					<View style={styles.userId}>
						<Text style={styles.head}>id: </Text>
						<Text style={styles.result}>{item.id}</Text>
					</View>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.title}>{item.name}</Text>
					<Text style={styles.description}>{item.body}</Text>
				</View>
			</View>
		</DropShadow>
	);
};
export default Comment;
