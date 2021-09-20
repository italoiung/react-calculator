import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.screenBg};
  color: ${({ theme }) => theme.mainText};
  border-radius: .5rem;
  font-size: 1.5rem;
  white-space: nowrap;
  overflow-x: auto;
  margin-bottom: 1rem;
  flex: 0 0 3.5rem;
  line-height: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`