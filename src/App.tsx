import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { Dashboard } from './components/Dashboard'
import { createServer } from 'miragejs'
import Modal from 'react-modal'
import { useState } from 'react'

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

Modal.setAppElement('#root')
export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(
    false,
  )

  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true)
  }

  function handleCloseTransactionModal() {
    setNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      ></Header>

      <Dashboard></Dashboard>

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      >
        <h1>Modal aberta</h1>
      </Modal>

      <GlobalStyle></GlobalStyle>
    </>
  )
}
