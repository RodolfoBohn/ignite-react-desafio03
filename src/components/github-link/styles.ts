import styled from "styled-components";

export const GithubLinkWrapper = styled.a`
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