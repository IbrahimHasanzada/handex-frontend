import { useTranslations } from 'next-intl'
import React from 'react'

const Header = () => {
    const t = useTranslations()
  return (
    <div>
      {t("header")}
    </div>
  )
}

export default Header
