# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

The challenge was to create a calculator app that allows users to perform mathematical operations like addition, subtraction, multiplication, and division. Users should also be able to adjust the color theme of the app based on their preference. The bonus task was to check the user's initial theme preference using `prefers-color-scheme` and save any additional changes in the browser.

### Screenshot

![Calculator App Screenshot](./screenshot.jpg)

### Links

- Solution URL:(https://github.com/roodabeashoorpouri/calculator-frontendMentor.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- React - JavaScript library
- Styled Components - For styles

### What I learned

While working on this project, I gained experience in using React and managing state using hooks such as `useState`. I also improved my CSS skills, particularly in creating responsive layouts and styling components using CSS custom properties and class-based themes.

Here's an example of code I'm proud of:

```js
const toggleTheme = () => {
  const nextIndex = (themeIndex + 1) % themes.length;
  setThemeIndex(nextIndex);
};
```

This code snippet demonstrates the logic to toggle between different color themes. It calculates the next theme index based on the current index and the length of the theme array. The `setThemeIndex` function updates the state, causing the component to re-render with the new theme.

### Continued development

In future projects, I would like to further enhance my understanding of React and explore more advanced concepts such as context, routing, and state management libraries like Redux or MobX. I also plan to dive deeper into CSS methodologies and preprocessors to improve the maintainability and scalability of my styles.

### Useful resources

- [React Documentation](https://reactjs.org/) - The official documentation for React provides comprehensive information and guides for learning React.
- [Styled Components Documentation](https://styled-components.com/) - The documentation for Styled Components offers detailed explanations and examples of using this popular CSS-in-JS library.

## Author

- github - [roodabeashoorpouri](https://github.com/roodabeashoorpouri)
- Frontend Mentor - [@roodabeashoorpouri](https://www.frontendmentor.io/profile/roodabeashoorpouri)
- Twitter - [@sooroodeh](https://www.twitter.com/sooroodeh)

## Acknowledgments

I would like to acknowledge [Frontend Mentor](https://www.frontendmentor.io/) for providing this challenge and allowing me to practice and enhance my frontend development skills. Additionally, I would like to express my gratitude to the online developer community and various resources that have contributed to my learning journey.
