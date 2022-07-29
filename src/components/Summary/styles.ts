import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  align-items: center;
  justify-content: center;

  margin-top: -5rem;
`

export const Card = styled.div`
  background-color: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 5px;
  color: var(--text-title);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.5rem;
  }

  strong {
    display: block;
    font-size: 2rem;
    font-weight: 500;
  }

  :nth-child(2n) strong {
    color: var(--red);
  }
  :nth-child(3n) {
    background-color: var(--green);
    color: var(--shape);
  }
`
