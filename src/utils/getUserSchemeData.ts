type DataT = {
	name: string
	status: string | ''
	id: number
	city: string
}

type ReturnedDataT = [
	{ itemName: string; itemData: string },
	{ itemName: string; itemData: string },
	{ itemName: string; itemData: number },
	{ itemName: string; itemData: string }
]

export const getUserSchemeData = (data: DataT): ReturnedDataT => {
	return [
		{ itemName: 'users.fullName', itemData: data.name },
		{ itemName: 'users.status', itemData: data.status },
		{ itemName: 'users.id', itemData: data.id },
		{ itemName: 'users.city', itemData: data.city }
	]
}
