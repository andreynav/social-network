export const getUserSchemeData = (data) => {
	return [
		{ itemName: 'users.fullName', itemData: data.name },
		{ itemName: 'users.status', itemData: data.status },
		{ itemName: 'users.id', itemData: data.id },
		{ itemName: 'users.city', itemData: data.city }
	]
}
