import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container, Card } from './styles'

export function Summary() {
  return (
    <Container>
      <Card>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 17.400,00</strong>
      </Card>
      <Card>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>- R$ 1.259,00</strong>
      </Card>
      <Card>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$ 16.141,00</strong>
      </Card>
    </Container>
  )
}
