import { Form, FormTitle, FormTitleWrapper, FormWrapper, PostCounterText } from "./styles"

export const SearchForm = () => {
  return (
    <FormWrapper>
      <FormTitleWrapper>
        <FormTitle>Publicações</FormTitle>
        <PostCounterText>6 publicações</PostCounterText>
      </FormTitleWrapper>
      <Form>
        <input type="text" placeholder="Buscar conteúdo" />
      </Form>
    </FormWrapper>
  )
}