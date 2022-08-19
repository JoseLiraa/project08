import { StyleSheet } from 'react-native';
import { theColors } from '@themes';

const styles = StyleSheet.create({
	container: {
		backgroundColor: theColors.gray4,
		borderWidth: 1,
		borderColor: theColors.green,
		opacity: 0.7,
		width: '90%',
		borderRadius: 20,
		marginHorizontal: 20,
		marginVertical: 10,
	},
	idContainer: {
		flexDirection: 'row',
		marginHorizontal: 10,
		marginTop: 10,
		justifyContent: 'space-evenly',
	},
	userId: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	id: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	infoContainer: {
		marginVertical: 10,
		marginHorizontal: 10,
	},
	title: {
		marginVertical: 8,
		textAlign: 'left',
		color: theColors.subTitle,
		fontSize: 15,
		fontWeight: 'bold',
	},
	description: {
		textAlign: 'justify',
		color: theColors.subTitle,
		fontSize: 12,
	},
});

export default styles;
