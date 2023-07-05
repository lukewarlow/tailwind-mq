export function mediaQueries() {
	return function ({ addVariant }) {
		addVariant('transparency-reduce', '@media (prefers-reduced-transparency: reduce)');
		addVariant('transparency-safe', '@media (prefers-reduced-transparency: no-preference)');
		addVariant('inverted-colors', '@media (inverted-colors: inverted)');
		addVariant('data-reduce', '@media (prefers-reduced-data: reduce)');
		addVariant('forced-colors', '@media (forced-colors: active)');
		addVariant('contrast-custom', '@media (prefers-contrast: custom)');
	};
}
