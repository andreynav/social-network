const colorGoldDark = '#ffc300'
const colorGoldLight = '#25b09b'
const colorError = '#E3242B'
const colorLike = '#0009'

export const light = {
	bgColorPrimary: '#DCDCDC',
	bgColorSecondary: '#fff',
	borderPrimary: 'darkgray',
	borderSecondary: colorGoldLight,
	colorPrimary: '#000000e6',
	colorSecondary: colorGoldLight,
	colorLoader: colorGoldLight,
	colorLike: colorLike,
	colorError: colorError
}

export const dark = {
	bgColorPrimary: '#22272e',
	bgColorSecondary: '#2d333b',
	borderPrimary: '#444c56',
	borderSecondary: colorGoldDark,
	colorPrimary: '#adbac7',
	colorSecondary: colorGoldDark,
	colorLoader: colorGoldDark,
	colorLike: colorLike,
	colorError: colorError
}

export type LightT = Record<keyof typeof light, string>
export type DarkT = Record<keyof typeof dark, string>
