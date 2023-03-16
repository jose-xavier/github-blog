import { InputInfo, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <InputInfo>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </InputInfo>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
