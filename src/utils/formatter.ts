import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function dateDistanceFormatter(data: string) {
  return formatDistanceToNow(new Date(data), {
    locale: ptBR,
    addSuffix: true,
  })
}
