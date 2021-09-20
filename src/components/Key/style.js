import styled from 'styled-components'
import { darken } from 'polished'

export const Button = styled.button`
  text-align: center;
  border-radius: .25rem;
  border: 0;
  font: inherit;
  cursor: pointer;
  ${({ isNumber, theme }) => isNumber && `
    background-color: ${theme.primaryButton};
    box-shadow: 0 .25rem ${darken(.15, theme.primaryButton)};
    color: ${theme.primaryButtonText};
  `}
  ${({ isOperator, theme }) => isOperator && `
    background-color: ${theme.secondaryButton};
    box-shadow: 0 .25rem ${darken(.15, theme.secondaryButton)};
    color: ${theme.secondaryButtonText};
    font-size: .5rem;
  `}
  ${({ isFinal, theme }) => isFinal && `
    background-color: ${theme.actionButton};
    box-shadow: 0 .25rem ${darken(.15, theme.actionButton)};
    color: ${theme.secondaryButtonText};
  `}
`