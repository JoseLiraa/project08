import { StyleSheet } from 'react-native';
import { theColors } from '@themes';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		borderWidth: 1,
		borderColor: theColors.gray2,
		height: '12%',
	},
	selector: {
		marginVertical: '12%',
		marginHorizontal: '25%',
		width: '50%',
	},
	text: {
		textAlign: 'center',
		margin: 20,
	},
});

export default styles;
