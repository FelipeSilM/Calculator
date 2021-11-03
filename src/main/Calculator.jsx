import React, { Component } from 'react';
import './Calculator.css';
import { setTheme1, setTheme2, setTheme3 } from '../funcs/themes';

import Logo from '../components/Logo';
import ThemeBar from '../components/ThemeBar';

import Display from '../components/Display'
import Button from '../components/Button'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
  theme: 1
}

export default class Calculadora extends Component {

  state = { ...initialState }

  constructor(props) {

    super(props)

    this.addDigit = this.addDigit.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
  }

  clearDisplay() {
    this.setState({
      displayValue: '0',
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    })
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '='
      const currentOperation = this.state.operation

      const values = [...this.state.values]
      switch (currentOperation) {
        case '+':
          values[0] = (values[0] + values[1])
          break;
        case '-':
          values[0] = (values[0] - values[1])
          break;
        case '/':
          values[0] = (values[0] / values[1])
          break;
        case 'x':
          values[0] = (values[0] * values[1])
          break;
      }
      values[1] = 0

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  addDigit(n) {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return
    }
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.') {
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({ values })
    }
  }

  removeDigit() {
    if (this.state.displayValue === '0' || this.state.clearDisplay) {
      return
    }
    const currentValue = this.state.displayValue
    const newValue = currentValue.length === 1 ? currentValue : currentValue.slice(0, -1)
    this.setState({ displayValue: newValue })


  }

  changeTheme(e) {
    if (this.state.theme === 0) {
      document.querySelector(e).classList.remove('f-end')
      document.querySelector(e).classList.add('f-start')
      setTheme1()
      this.setState({ theme: 1 })
    }
    if (this.state.theme === 1) {
      document.querySelector(e).classList.remove('f-start')
      document.querySelector(e).classList.add('center')
      setTheme2()
      this.setState({ theme: 2 })
    }
    if (this.state.theme === 2) {
      document.querySelector(e).classList.remove('center')
      document.querySelector(e).classList.add('f-end')
      setTheme3()
      this.setState({ theme: 0 })
    }
  }

  render() {
    return (
      <div className="calculator">
        <div className="header">
          <Logo />
          <ThemeBar click={this.changeTheme} />
        </div>
        <Display value={this.state.displayValue} />
        <div className="container-buttons">
          <Button nums label='7' click={this.addDigit}></Button>
          <Button nums label='8' click={this.addDigit}></Button>
          <Button nums label='9' click={this.addDigit}></Button>
          <Button resets label='DEL' click={() => this.removeDigit()}></Button>
          <Button nums label='4' click={this.addDigit}></Button>
          <Button nums label='5' click={this.addDigit}></Button>
          <Button nums label='6' click={this.addDigit}></Button>
          <Button nums label='+' click={this.setOperation}></Button>
          <Button nums label='1' click={this.addDigit}></Button>
          <Button nums label='2' click={this.addDigit}></Button>
          <Button nums label='3' click={this.addDigit}></Button>
          <Button nums label='-' click={this.setOperation}></Button>
          <Button nums label='.' click={this.addDigit}></Button>
          <Button nums label='0' click={this.addDigit}></Button>
          <Button nums label='/' click={this.setOperation}></Button>
          <Button nums label='x' click={this.setOperation}></Button>
          <Button resets double label='RESET' click={() => this.clearDisplay()}></Button>
          <Button nums double equals label='=' click={this.setOperation}></Button>
        </div>
      </div>
    )
  }

}
