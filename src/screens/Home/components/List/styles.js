import { StyleSheet } from 'react-native';
import { theColors } from '@themes';

const styles = StyleSheet.create({
	list: {
		paddingBottom: 40,
	},
	activityIndicator: {
		flex: 1,
		marginVertical: '50%',
	},
	subTitle: {
		color: theColors.subTitle,
		fontSize: 18,
		fontWeight: 'bold',
		marginHorizontal: 20,
		marginTop: 20,
		marginBottom: 8,
	},
	container: {
		height: 300,
		alignItems: 'center',
		backgroundColor: theColors.gray3,
		borderBottomColor: theColors.gray,
		borderBottomWidth: 1,
	},
});

export default styles;
