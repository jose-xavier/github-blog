import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { OutletContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  )
}
