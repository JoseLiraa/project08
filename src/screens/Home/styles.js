import { StyleSheet } from 'react-native';
import { theColors } from '@themes';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theColors.gray3,
	},
	subTitle: {
		color: theColors.subTitle,
		fontSize: 18,
		fontWeight: 'bold',
		marginHorizontal: 20,
		marginTop: 20,
		marginBottom: 8,
	},
	list: {
		paddingBottom: 40,
	},
	activityIndicator: {
		flex: 1,
		marginVertical: '50%',
	},
});

export default styles;
