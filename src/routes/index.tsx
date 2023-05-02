import {Routes, Route} from 'react-router-dom'
import { DefaultLayout } from '../layouts/default-layout'
import { Home } from '../pages/home'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}