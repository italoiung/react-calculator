import { Container, Option } from './style'

const Toggler = ({ length, currentTheme, setCurrentTheme }) =>
  <Container>
    {[...Array(length)].map((_, index) =>
      <Option isActive={currentTheme === index} onClick={() => setCurrentTheme(index)} key={index} />
    )}
  </Container>

export default Toggler