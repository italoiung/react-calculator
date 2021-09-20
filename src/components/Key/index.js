import { Button } from './style'

const Key = ({ children, ...props }) =>
  <Button {...props}>
    {!!children && children}
  </Button>

export default Key