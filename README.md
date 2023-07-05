# TailwindCSS Media Query Plugin

[![npm](https://img.shields.io/npm/v/tailwind-mq.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-mq)

This plugin generates variants for various media queries not covered by TailwindCSS out of the box.

## Installation

Add to your project via:

```bash
# Install using npm
npm install -D tailwind-mq

# Install using yarn
yarn add -D tailwind-mq
```

Add it to the plugins array of your Tailwind config. Call the functions for the utilities you want to use.

```js
const { mediaQueries } = require('tailwind-mq');

plugins: [
	mediaQueries(), // no options to configure
]
```

## Features

If you want a media query to be added to this plugin please open an issue or PR.

### [`forced-colors`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)

- `forced-colors`: A variant for `@media (forced-colors: active)`.

### [`prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)

- `contrast-custom`: A variant for `@media (prefers-contrast: custom)`.

- `contrast-more` and `contrast-less` variants already exist in TailwindCSS itself.

### [`prefers-reduced-transparency`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency)

- `transparency-reduce`: A variant for `@media (prefers-reduced-transparency: reduce)`.
- `transparency-safe`: A variant for `@media (prefers-reduced-transparency: no-preference)`.

These are the "wrong" way round to match the existing motion variants inside of TailwindCSS.

### [`prefers-reduced-data`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data)

- `data-reduce`: A variant for `@media (prefers-reduced-data: reduce)`.

### [`inverted-colors`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors)

- `inverted-colors`: A variant for `@media (inverted-colors: inverted)`.

## License

This project is licensed under the [MIT License](https://github.com/lukewarlow/tailwind-mq/blob/master/LICENSE).
