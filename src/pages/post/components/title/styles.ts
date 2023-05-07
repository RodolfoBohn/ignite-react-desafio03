import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  padding: 2rem;
  background: ${props => props.theme.profile};
  border-radius: 10px;
  margin-top: -5rem;
`

export const ReturnLink = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  &>span {
    color: ${props => props.theme.blue};
    font-weight: bold;
    font-size: 0.75rem;
  } 
  &> svg{
    color: ${props => props.theme.blue};
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TitleText = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${props => props.theme.title};
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
`

export const DetailsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`

export const DetailsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &>svg {
    color: ${props => props.theme.label};
  }

  &>span {
    color: ${props => props.theme.span};
  }
` 