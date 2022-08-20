import { StyleSheet } from 'react-native';
import { theColors } from '@themes';

const styles = StyleSheet.create({
	buttonContainer: {
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 50,
	},
	button: {
		backgroundColor: theColors.green,
		width: '100%',
		padding: 15,
		borderRadius: 15,
		alignItems: 'center',
		borderColor: theColors.white,
		borderWidth: 1,
	},
	textButton: {
		color: theColors.white,
		fontWeight: 'bold',
		fontSize: 16,
	},
});

export default styles;
