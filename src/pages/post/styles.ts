import styled from "styled-components";

export const PostPageWrapper = styled.div``

export const ContentWrapper = styled.div`
  padding: 2.5rem 2rem;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.blue};
  }
`