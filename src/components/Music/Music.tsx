import { compose } from '@reduxjs/toolkit'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const Music = () => {
	const { t } = useTranslation()

	return <div>{t('music.title')}</div>
}

export default compose(withAuthRedirect)(Music)
