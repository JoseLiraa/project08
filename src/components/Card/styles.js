import { StyleSheet } from 'react-native';
import { theColors } from '@themes';

const styles = StyleSheet.create({
	shadowProp: {
		shadowColor: theColors.black,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.4,
		shadowRadius: 5,
	},
	container: {
		backgroundColor: theColors.white,
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
	result: {
		fontWeight: 'bold',
		color: theColors.gray,
	},
	head: {
		color: theColors.gray,
	},
});

export default styles;
