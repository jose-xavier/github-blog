import { usePost } from '../../../../hooks/usePost'
import { InputInfo, SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useBlog } from '../../../../hooks/useBlog'

export function SearchForm() {
  const { issues } = usePost()
  const { fetchSearchIssues } = useBlog()

  const searchFormSchema = z.object({
    query: z.string(),
  })

  type SearchFormInputs = z.infer<typeof searchFormSchema>

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchSearchIssues(data.query)

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
