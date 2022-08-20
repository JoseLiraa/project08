import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import styles from './styles';
import DropShadow from 'react-native-drop-shadow';

const Card = () => {
	const { t, i18n } = useTranslation();

	return (
		<DropShadow style={styles.shadowProp}>
			<View style={styles.container}>
				<View style={styles.idContainer}>
					<View style={styles.userId}>
						<Text>{t('home.userId')}:</Text>
						<Text>4</Text>
					</View>
					<View style={styles.id}>
						<Text>id:</Text>
						<Text>4</Text>
					</View>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.title}>
						nesciunt iure omnis dolorem tempora et accusantium
					</Text>
					<Text style={styles.description}>
						consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem
						ut quam aut nobis\net est aut quod aut provident voluptas autem
						voluptas
					</Text>
				</View>
			</View>
		</DropShadow>
	);
};
export default Card;
