import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  padding: 1rem;
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.secondaryBg};
  gap: .5rem;
  flex: 1 1 auto;
`