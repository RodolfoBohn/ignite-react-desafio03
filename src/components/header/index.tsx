import { HeaderWrapper } from "./styles"
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"

export const Header = () => {
  return <HeaderWrapper>
    <Link to='/'>
      <img src={logo}/>
    </Link>
  </HeaderWrapper>
}