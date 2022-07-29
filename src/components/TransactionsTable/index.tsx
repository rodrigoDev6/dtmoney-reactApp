import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Venda</td>
            <td>12/01/2022</td>
          </tr>
          <tr>
            <td>Caixa de ovos</td>
            <td className="withdraw">R$ -15,00</td>
            <td>Alimentação</td>
            <td>17/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
