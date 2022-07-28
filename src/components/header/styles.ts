import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
  height: 13.5rem;
`

export const Content = styled.div`
  max-width: 70rem;
  margin: auto;
  padding: 2rem 0.5rem;

  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  background-color: var(--blue-light);
  padding: 12px 32px;

  font-weight: 600;
  color: var(--shape);

  border-radius: 5px;
  border: none;
`
