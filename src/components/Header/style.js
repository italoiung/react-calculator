import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5rem;
`

export const Title = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.mainText};
`