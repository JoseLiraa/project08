import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import DropShadow from 'react-native-drop-shadow';
import { useNavigation } from '@react-navigation/native';

const Card = ({ item, userList, id }) => {
	const { t, i18n } = useTranslation();
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={() => navigation.navigate('DetailPost', { item })}
		>
			<DropShadow style={styles.shadowProp}>
				<View style={styles.container}>
					<View style={styles.idContainer}>
						<View style={styles.userId}>
							<Text style={styles.head}>{t('home.userId')}: </Text>
							<Text style={styles.result}>{item.userId}</Text>
						</View>
						<View style={styles.userId}>
							<Text style={styles.head}>{t('home.userName')}: </Text>
							<Text style={styles.result}>{userList[id]?.name}</Text>
						</View>
						<View style={styles.userId}>
							<Text style={styles.head}>id: </Text>
							<Text style={styles.result}>{item.id}</Text>
						</View>
					</View>
					<View style={styles.infoContainer}>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.description}>{item.body}</Text>
					</View>
				</View>
			</DropShadow>
		</TouchableOpacity>
	);
};
export default Card;
