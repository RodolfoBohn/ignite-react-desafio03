import styled from "styled-components";

export const FormWrapper = styled.div``

export const FormTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FormTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${props => props.theme.subtitle};
`

export const PostCounterText = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.span};
`

export const Form = styled.form`
  margin-top: 0.75rem;
  &>input {
    width: 100%;
    border: 1px solid ${props => props.theme.border};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background: ${props => props.theme.input};
    color: ${props => props.theme.label};
  }
`
