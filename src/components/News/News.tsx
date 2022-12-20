import { compose } from '@reduxjs/toolkit'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const News = () => {
	const { t } = useTranslation()

	return <div>{t('news.title')}</div>
}

export default compose(withAuthRedirect)(News)
