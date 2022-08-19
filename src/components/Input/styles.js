import { StyleSheet } from 'react-native';
import { theColors } from '@themes';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	inputsContainer: {
		width: '80%',
	},
	singleInputContainer: {
		backgroundColor: theColors.white,
		marginTop: 24,
		borderRadius: 10,
		borderColor: theColors.white,
		borderWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		padding: 5,
	},
	input: {
		width: '90%',
		padding: 12,
	},
});

export default styles;
