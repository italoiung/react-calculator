import styled from 'styled-components'

export const Container = styled.div`
  padding: .25rem;
  display: flex;
  background-color: ${({ theme }) => theme.secondaryBg};
  border-radius: .5rem;
`

export const Option = styled.span`
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
  margin: 0 .1rem;
  cursor: pointer;
  ${({ isActive, theme }) => isActive && `
    background-color: ${theme.actionButton}
  `}
`