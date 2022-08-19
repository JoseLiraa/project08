import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ buttonTitle, action }) => {
	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.8}
				onPress={action}
			>
				<Text style={styles.textButton}>{buttonTitle}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Button;
