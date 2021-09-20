import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes, defaultTheme, GlobalStyle } from './style'

import '@fontsource/spartan/600.css'
import '@fontsource/spartan/900.css'

import Screen from './components/Screen'
import Key from './components/Key'
import Board from './components/Board'
import Layout from './components/Layout'
import Header from './components/Header'
import Toggler from './components/Toggler'

function App() {
  const [currentTheme, setCurrentTheme] = useState(0)
  const [currentOperator, setCurrentOperator] = useState(null)
  const [lastOperator, setLastOperator] = useState(null)
  const [currentNumber, setCurrentNumber] = useState(null)
  const [lastNumber, setLastNumber] = useState(null)
  const [isFinished, setIsFinished] = useState(null)

  const setNumber = (number) => {
    if (!currentOperator) {
      if (number === '.' && currentNumber && `${currentNumber}`.includes('.')) {
        return
      }
      setCurrentNumber(currentNumber && !isFinished ? `${currentNumber}${number}` : `${number}`)
      setIsFinished(false)
    } else if (!lastNumber) {
      setLastNumber(currentNumber)
      setCurrentNumber(number)
      setLastOperator(currentOperator)
      setCurrentOperator(null)
    } else {
      switch (lastOperator) {
        case '+':
          setLastNumber(+lastNumber + +currentNumber)
          break

        case '-':
          setLastNumber(+lastNumber - +currentNumber)
          break

        case '/':
          setLastNumber(+lastNumber / +currentNumber)
          break

        case '*':
          setLastNumber(+lastNumber * +currentNumber)
          break
      }
      setCurrentNumber(number)
      setLastOperator(currentOperator)
      setCurrentOperator(null)
    }
  }

  const del = () => {
    if (currentNumber) {
      setCurrentNumber(`${currentNumber}`.slice(0, -1))
    }
  }

  const reset = () => {
    setCurrentOperator(null)
    setCurrentNumber(null)
    setLastNumber(null)
    setLastOperator(null)
  }

  const operate = (operator) => {
    if (currentNumber) {
      switch (operator) {
        case '+':
          setCurrentOperator('+')
          break

        case '-':
          setCurrentOperator('-')
          break

        case '/':
          setCurrentOperator('/')
          break

        case '*':
          setCurrentOperator('*')
          break

      }
    } else if (operator === '-') {
      setCurrentNumber('-')
    }
  }

  const result = () => {
    switch (lastOperator) {
      case '+':
        setCurrentNumber(+lastNumber + +currentNumber)
        break

      case '-':
        setCurrentNumber(+lastNumber - +currentNumber)
        break

      case '/':
        setCurrentNumber(+lastNumber / +currentNumber)
        break

      case '*':
        setCurrentNumber(+lastNumber * +currentNumber)
        break
    }
    setLastNumber(null)
    setLastOperator(null)
    setIsFinished(true)
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...themes[currentTheme], ...defaultTheme }}>
        <Layout>
          <Header>
            <Toggler length={themes.length} currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
          </Header>
          <Screen>
            {currentNumber}
          </Screen>
          <Board>
            <Key onClick={() => setNumber(7)} isNumber={true}>7</Key>
            <Key onClick={() => setNumber(8)} isNumber={true}>8</Key>
            <Key onClick={() => setNumber(9)} isNumber={true}>9</Key>
            <Key onClick={del} isOperator={true}>DEL</Key>
            <Key onClick={() => setNumber(4)} isNumber={true}>4</Key>
            <Key onClick={() => setNumber(5)} isNumber={true}>5</Key>
            <Key onClick={() => setNumber(6)} isNumber={true}>6</Key>
            <Key onClick={() => operate('+')} isOperator={true}>+</Key>
            <Key onClick={() => setNumber(1)} isNumber={true}>1</Key>
            <Key onClick={() => setNumber(2)} isNumber={true}>2</Key>
            <Key onClick={() => setNumber(3)} isNumber={true}>3</Key>
            <Key onClick={() => operate('-')} isOperator={true}>-</Key>
            <Key onClick={() => setNumber('.')} isNumber={true}>.</Key>
            <Key onClick={() => setNumber(0)} isNumber={true}>0</Key>
            <Key onClick={() => operate('/')} isOperator={true}>/</Key>
            <Key onClick={() => operate('*')} isOperator={true}>x</Key>
            <Key onClick={reset} isOperator={true} style={{ gridColumn: '1 / 3' }}>RESET</Key>
            <Key onClick={result} isFinal={true} style={{ gridColumn: '3 / 5' }}>=</Key>
          </Board>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
