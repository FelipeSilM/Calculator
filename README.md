# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

<p align="center">
  <img src="https://github.com/FelipeSilM/Calculator/blob/master/src/img/app_screenshot.png" width="400px" title="hover text">
</p>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

When I did this challenge I've already studied about React, and improve some skils like js, html and css, but I never really put in practice yet. So that is my first work with this lib, and the process of search for answers new problems taught me to find solutions.

```js
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
  theme: 1
}
```

```js
clearDisplay() {
    this.setState({
      displayValue: '0',
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    })
  }
```

```js
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
```

### Continued development

Some of the future updates I should do are:

- Adjust the responsivity for mobile devices in landscape mode
- Save the theme the user selected

## Author

- Website - https://github.com/FelipeSilM
- Frontend Mentor - https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29
- Instagram- [@felipe_slm](https://www.instagram.com/felipe_slm/)
