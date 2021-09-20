import { Container } from './style'

const Screen = ({ children }) =>
  <Container>
    {!!children && children}
  </Container>

export default Screen