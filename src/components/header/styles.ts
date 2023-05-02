import styled from "styled-components";
import headerBg from '../../assets/header-bg.png'

export const HeaderWrapper = styled.header`
  height: 18.5rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 4rem;
`