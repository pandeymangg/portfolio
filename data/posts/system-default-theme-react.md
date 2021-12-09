---
title: Determining the system default theme in react
date: 8 December 2021
description: This post is a guide for determining the system default theme in react.
---

Recently, I decided to refactor one of my previous projects, and wanted to make a dark theme for it. I wanted to use the user's system default theme for the default theme of my web app. So, I made a custom hook that determines the default theme of the user.

### How to determine the default system theme?

We can check the default theme by determining the value of the `prefers-color-scheme` media query. It gives the value of the theme that the user has selected for their system.

`@media (prefers-color-scheme: light)` can be used for determining light theme and similarly, `@media (prefers-color-scheme: dark)` can be used for determining dark theme.

We'll check the value of this media query using the `window.matchMedia` function in javascript (react in this case). This can be easily achieved using the code snippet below:

```js
const darkThemeMatch = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (darkThemeMatch) // Default theme is set to dark.
else // Default theme is set to light.
```

**useDefaultTheme hook**

```js
import { useEffect, useState } from "react";

export const useDefaultTheme = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [currentTheme, setCurrentTheme] = useState(getCurrentTheme());

  const matchListener = (e) => {
    const theme = e.matches ? "dark" : "light";
    setCurrentTheme(theme);
  };

  useEffect(() => {
    const darkThemeMatch = window.matchMedia("(prefers-color-scheme: dark)");

    darkThemeMatch.addEventListener("change", matchListener);
    return () => darkThemeMatch.removeEventListener("change", matchListener);
  }, []);

  return currentTheme;
};
```

In this hook, we first check the value of the default theme and store it in a state variable. Then, in the useEffect hook, we are listening for change events on the `prefers-color-scheme` media query. We're doing this to listen and react to any changes in the user's system theme. Whenever the system theme changes, we set the current theme equal to the user's new theme. Lastly, in the cleanup of the useEffect hook, we remove the change event listener on the media query.
