import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { theColors } from '@themes';
import styles from './styles';
import Card from '@components/Card';

const List = ({ postList, userList, loadingIndicator }) => {
	return (
		<>
			<FlatList
				contentContainerStyle={styles.list}
				data={postList[0]}
				keyExtractor={item => item.id}
				numColumns={1}
				initialNumToRender={10}
				maxToRenderPerBatch={10}
				renderItem={({ item }) => (
					<Card
						item={item}
						userList={userList[0]}
						id={item.userId}
						button={true}
					/>
				)}
				ListEmptyComponent={() => (
					<>
						{loadingIndicator && (
							<ActivityIndicator
								color={theColors.green}
								size="large"
								style={styles.activityIndicator}
							/>
						)}
					</>
				)}
			/>
		</>
	);
};

export default List;
