import { Main, Container } from './style'

const Layout = ({ children }) =>
  <Main>
    <Container>
      {children}
    </Container>
  </Main>

export default Layout