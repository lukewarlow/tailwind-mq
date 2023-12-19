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

### [`scripting`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scripting)

- `noscript`: A variant for `@media (scripting: none)`.
- `scripting`: A variant for `@media (scripting: enabled)`.
- `scripting-initial`: A variant for `@media (scripting: initial-only)`.

### [`update`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/update)

- `update-none`: A variant for `@media (update: none)`.
- `update-slow`: A variant for `@media (update: slow)`.
- `update-fast`: A variant for `@media (update: fast)`.

### [`overflow-block`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-block)

- `overflow-block-none`: A variant for `@media (overflow-block: none)`.
- `overflow-block-scroll`: A variant for `@media (overflow-block: scroll)`.
- `overflow-block-optional-paged`: A variant for `@media (overflow-block: optional-paged)`.
- `overflow-block-paged`: A variant for `@media (overflow-block: paged)`.

### [`overflow-inline`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-inline)

- `overflow-inline-none`: A variant for `@media (overflow-inline: none)`.
- `overflow-inline-scroll`: A variant for `@media (overflow-inline: scroll)`.

### [`dynamic-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/dynamic-range)

- `sdr`: A variant for `@media (dynamic-range: standard)`.
- `hdr`: A variant for `@media (dynamic-range: high)`.

### [`color-gamut`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut)

- `srgb`: A variant for `@media (color-gamut: srgb)`.
- `p3`: A variant for `@media (color-gamut: p3)`.
- `rec2020`: A variant for `@media (color-gamut: rec2020)`.

## Removed Features

### [`forced-colors`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)

- This was removed as it is now in TailwindCSS itself.

## License

This project is licensed under the [MIT License](https://github.com/lukewarlow/tailwind-mq/blob/master/LICENSE).
