import { createGlobalStyle } from 'styled-components'
import responsive from './responsive'

const themeOne = {
  primaryBg: 'hsl(222, 26%, 31%)',
  secondaryBg: 'hsl(223, 31%, 20%)',
  screenBg: 'hsl(224, 36%, 15%)',
  primaryButton: 'hsl(30, 25%, 89%)',
  secondaryButton: 'hsl(225, 21%, 49%)',
  actionButton: 'hsl(6, 63%, 50%)',
  mainText: 'hsl(0, 0%, 100%)',
  primaryButtonText: 'hsl(221, 14%, 31%)',
  secondaryButtonText: 'hsl(0, 0%, 100%)',
}

const themeTwo = {
  primaryBg: 'hsl(0, 0%, 90%)',
  secondaryBg: 'hsl(0, 5%, 81%)',
  screenBg: 'hsl(0, 0%, 93%)',
  primaryButton: 'hsl(45, 7%, 89%)',
  secondaryButton: 'hsl(185, 42%, 37%)',
  actionButton: 'hsl(25, 98%, 40%)',
  mainText: 'hsl(60, 10%, 19%)',
  primaryButtonText: 'hsl(60, 10%, 19%)',
  secondaryButtonText: 'hsl(0, 0%, 100%)',
}

const themeThree = {
  primaryBg: 'hsl(268, 75%, 9%)',
  secondaryBg: 'hsl(268, 71%, 12%)',
  screenBg: 'hsl(268, 71%, 12%)',
  primaryButton: 'hsl(268, 47%, 21%)',
  secondaryButton: 'hsl(281, 89%, 26%)',
  actionButton: 'hsl(176, 100%, 44%)',
  mainText: 'hsl(52, 100%, 62%)',
  primaryButtonText: 'hsl(52, 100%, 62%)',
  secondaryButtonText: 'hsl(0, 0%, 100%)',
}

export const themes = [
  themeOne,
  themeTwo,
  themeThree
]

export const defaultTheme = {
  primaryFont: 'Spartan',
}

export const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
svg {
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
html {
  box-sizing: border-box;
  font: normal 600 150%/1.5 '${defaultTheme.primaryFont}', sans-serif;
  ${responsive.md(`
    font-size: 200%;
  `)}
}
body {
  overflow-x: hidden;
  position: relative;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  outline: none;
}
a {
  color: inherit;
  text-decoration: none;
}
`