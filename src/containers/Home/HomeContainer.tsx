import * as ROUTES from 'constants/routes'
import GridLayout from 'providers/layout/GridLayout'
import React from 'react'
import HomeGrid from './components'

const HomeContainer = () => {
  const way = [
    {
      url: ROUTES.ROOT_URL,
      title: 'Главная'
    }
  ]
  return (
    <GridLayout currentWay={'Акции'} way={way} titleBlock={'Индивидуальный проект Дома'}>
      <HomeGrid />
    </GridLayout>
  )
}

export default HomeContainer
