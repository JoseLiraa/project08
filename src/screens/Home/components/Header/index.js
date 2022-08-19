import React from 'react';
import { View } from 'react-native';
import Selector from '@src/components/Selector';
import styles from './styles';

const Header = () => {
	return (
		<View style={styles.header}>
			<View style={styles.selector}>
				<Selector />
			</View>
		</View>
	);
};

export default Header;
