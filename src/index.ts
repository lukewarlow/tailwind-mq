export function mediaQueries() {
	return function ({ addVariant }) {
		addVariant('transparency-reduce', '@media (prefers-reduced-transparency: reduce)');
		addVariant('transparency-safe', '@media (prefers-reduced-transparency: no-preference)');
		addVariant('inverted-colors', '@media (inverted-colors: inverted)');
		addVariant('data-reduce', '@media (prefers-reduced-data: reduce)');
		addVariant('contrast-custom', '@media (prefers-contrast: custom)');
		addVariant('noscript', '@media (scripting: none)');
		addVariant('scripting', '@media (scripting: enabled)');
		addVariant('scripting-initial', '@media (scripting: initial-only)');
		addVariant('update-none', '@media (update: none)');
		addVariant('update-slow', '@media (update: slow)');
		addVariant('update-fast', '@media (update: fast)');
		addVariant('overflow-block-none', '@media (overflow-block: none)');
		addVariant('overflow-block-scroll', '@media (overflow-block: scroll)');
		addVariant('overflow-block-optional-paged', '@media (overflow-block: optional-paged)');
		addVariant('overflow-block-paged', '@media (overflow-block: paged)');
		addVariant('overflow-inline-none', '@media (overflow-inline: none)');
		addVariant('overflow-inline-scroll', '@media (overflow-inline: scroll)');
		addVariant('sdr', '@media (dynamic-range: standard)');
		addVariant('hdr', '@media (dynamic-range: high)');
		addVariant('srgb', '@media (color-gamut: srgb)');
		addVariant('p3', '@media (color-gamut: p3)');
		addVariant('rec2020', '@media (color-gamut: rec2020)');
	};
}
