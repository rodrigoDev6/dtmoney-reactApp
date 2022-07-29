import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      padding: 1rem 1.5rem;
      font-weight: 400;
      text-align: left;
    }

    td {
      background-color: var(--shape);
      padding: 1.25rem 1.5rem;
      color: var(--text-body);
      font-weight: 400;
      border: 0;
      border-radius: 5px;

      :first-child {
        color: var(--text-title);
      }
      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`
