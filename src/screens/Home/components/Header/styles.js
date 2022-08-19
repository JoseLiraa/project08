import { StyleSheet } from 'react-native';
import { theColors } from '@themes';

const styles = StyleSheet.create({
	header: {
		borderWidth: 1,
		borderColor: theColors.gray2,
		height: '12%',
	},
	selector: {
		marginVertical: '12%',
		marginHorizontal: '15%',
		width: '70%',
	},
});

export default styles;
