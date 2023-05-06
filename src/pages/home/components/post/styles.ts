import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostWrapper = styled(Link)`
  padding: 2rem;
  border-radius: 10px;
  background: ${props => props.theme.post};
  width: 26rem;
  height: 16.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-decoration: none;
  color: inherit;
`

export const PostTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const PostTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme.title};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
`

export const PostDateCounter = styled.span`
  white-space: nowrap;
  align-self: flex-start;
  font-size: 0.875rem;
  color: ${props => props.theme.span};
`

export const PostContent = styled.p`
  overflow: hidden;
  // Abaixo adiciona 3 pontinhos, porém como aparece parte da linha não fica legal, 
  // então assumirei outra estratégia de cortar com 4 linha de texto
  /* text-overflow: ellipsis; */
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`