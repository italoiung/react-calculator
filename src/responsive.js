const responsive = {}

const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

Object.entries(breakpoints).forEach(([breakpoint, value]) => {
  responsive[breakpoint] = (content) => `
    @media (min-width: ${value}px) {
      ${content}
    }
  `
})

export default responsive