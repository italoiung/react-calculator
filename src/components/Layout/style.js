import styled from 'styled-components'

export const Main = styled.main`
  background-color: ${({ theme }) => theme.primaryBg};
  display: flex;
  height: 100vh;
  padding: 1rem;
`

export const Container = styled.div`
  width: 25rem;
  height: 30rem;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
`