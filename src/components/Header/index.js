import { Container, Title } from './style'

const Header = ({ children }) =>
  <Container>
    <Title>Calc</Title>
    {children}
  </Container>

export default Header