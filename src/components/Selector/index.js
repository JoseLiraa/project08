import React from 'react';
import { useTranslation } from 'react-i18next';
import SwitchSelector from 'react-native-switch-selector';
import { theColors } from '../../themes';
const Selector = () => {
	const { t, i18n } = useTranslation();

	const languages = [
		{ label: 'English', value: 'en' },
		{ label: 'Spanish', value: 'es' },
	];

	return (
		<SwitchSelector
			initial={0}
			textColor={theColors.subTitle} //
			selectedColor={theColors.white}
			buttonColor={theColors.green}
			backgroundColor={theColors.gray2}
			options={languages}
			onPress={language => {
				i18n.changeLanguage(language);
			}}
		/>
	);
};
export default Selector;
