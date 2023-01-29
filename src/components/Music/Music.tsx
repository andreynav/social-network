import { compose } from '@reduxjs/toolkit'
import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { useTranslation } from 'react-i18next'

const Music = () => {
	const { t } = useTranslation()

	return <div>{t('music.title')}</div>
}

export const MusicContainer = compose(withAuthRedirect)(Music)
