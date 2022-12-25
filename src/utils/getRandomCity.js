const cities = [
	'Minsk',
	'New York',
	'Paris',
	'Berlin',
	'London',
	'Praga',
	'Sidney',
	'Vena',
	'Brno',
	'Vilnus',
	'Dubai',
	'Moscow',
	'Kiev',
	'Grodno',
	'Vitebsk',
	'Brest',
	'Gomel',
	'Las Vegas',
	'Los Angeles'
]

export const getRandomCity = () => {
	return cities[Math.floor(Math.random() * cities.length)]
}
