import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { Dashboard } from './components/Dashboard'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Sistema PDV',
          value: -1000,
          type: 'withdraw',
          category: 'Compra',
        },
      ]
    })
  },
})

export function App() {
  return (
    <>
      <Header></Header>
      <Dashboard></Dashboard>
      <GlobalStyle></GlobalStyle>
    </>
  )
}
