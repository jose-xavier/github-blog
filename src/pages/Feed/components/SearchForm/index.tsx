import { usePost } from '../../../../hooks/usePost'
import { InputInfo, SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export function SearchForm() {
  const { issues } = usePost()
  const { fetchSearchIssues } = usePost()

  console.log(fetchSearchIssues)

  const searchFormSchema = z.object({
    query: z.string(),
  })

  type SearchFormInputs = z.infer<typeof searchFormSchema>

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchIssues(data: SearchFormInputs) {
    fetchSearchIssues(data.query)

    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <InputInfo>
        <strong>Publicações</strong>
        <span>{`${issues.length} publicações`}</span>
      </InputInfo>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
