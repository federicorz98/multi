<img src="https://storage.googleapis.com/fermi-static-public-i602vo3ia2xahyxjwfue/multi-repo-cover.png" alt="Multi cover" >

[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=0-1&node-type=canvas&t=5o2ZW8hufmY7Ekps-0)
[![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

`Multi` is a **customizable**, **scalable** design system for [React](https://es.react.dev/) applications, built on top of [Material UI](https://mui.com/material-ui/). This library provides a cohesive set of components, themes, and utilities ready to use that allow developers to build consistent user interfaces with minimal setup.

## Prerequisites

- [MUI](https://mui.com/versions/) 6 or greater
- [Github package installation prerequisites](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)

## Setup Instructions

1.  Install the Package:

```bash
npm install @estudiogallo/multi@1.0.0
```

2.  Add the Inter font by inserting the following line in your HTML `<head>`:

```html
<link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet" />
```

3. In your main JavaScript or TypeScript file, import the styles:

```js
import '@EstudioGallo/multi/dist/index.css';
```

4. Init MUI license [1^]. You must call the `initLicenseKey()` function before React renders the first component in your app:

```js
initLicenseKey();
```

5. Replace the MUI `ThemeProvider` with the `MuiThemeProvider` from @EstudioGallo. Update your imports and components as follows:

```js
import { MultiThemeProvider } from '@EstudioGallo/multi';

<MuiThemeProvider>{children}</MuiThemeProvider>;
```

[1^]: https://mui.com/x/introduction/licensing
