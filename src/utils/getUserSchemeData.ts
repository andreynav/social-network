import { CityT } from './getRandomCity'

type DataT = {
  name: string
  status: string | ''
  id: number
  city: CityT
}

type ReturnedDataT = [
  { itemName: string; itemData: string },
  { itemName: string; itemData: string },
  { itemName: string; itemData: number },
  { itemName: string; itemData: CityT }
]

export const getUserSchemeData = (data: DataT): ReturnedDataT => {
  return [
    { itemName: 'users.fullName', itemData: data.name },
    { itemName: 'users.status', itemData: data.status },
    { itemName: 'users.id', itemData: data.id },
    { itemName: 'users.city', itemData: data.city }
  ]
}
