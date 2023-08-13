const defaultTheme = require('tailwindcss/defaultTheme');

// https://www.color-hex.com/color/4682a9
// https://colorhunt.co/palette/f6f4eb91c8e4749bc24682a9

const primary = { main: '#4682A9', light: '#6a9bba', dark: '#386887' };
const success = '#46a99f';
const error = '#a94682';
const warning = '#a96d46';
const info = '#4651a9';
const dark = '#152732';
const white = '#F6F4EB';
const grey = '#b6c6d0';

function hexToRgbA(hex, transparency = 1) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + `,${transparency ?? 1})`
    );
  }

  throw new Error(`Bad Hex -  hex passed in: ${hex}`);
}

function lightenColor(color, percent) {
  var num = parseInt(color.replace('#', ''), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;

  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1)}`;
}

const theme = {
  ...defaultTheme,
  colors: {
    transparent: 'transparent',
    inherit: 'inherit',
    current: 'currentColor',
    dark,
    white,
    transparentLight5: hexToRgbA(white, 0.5),
    transparentLight6: hexToRgbA(white, 0.6),
    transparentLight7: hexToRgbA(white, 0.7),
    transparentLight8: hexToRgbA(white, 0.8),
    transparentLight3: hexToRgbA(white, 0.38),
    transparentLight: hexToRgbA(white, 0.2),
    transparentDark: hexToRgbA(dark, 0.2),
    transparentDark5: hexToRgbA(dark, 0.5),
    transparentDark6: hexToRgbA(dark, 0.6),
    transparentDark7: hexToRgbA(dark, 0.7),
    transparentDark8: hexToRgbA(dark, 0.8),
    transparentPrimary: hexToRgbA(primary.main, 0.2),
    transparentPrimary05: hexToRgbA(primary.dark, 0.5),
    disabled: 'rgba(0, 0, 0, 0.38)',

    // grey: '#BDBDBD',
    // greyLight: '#EEEEEE',
    // greyDark: '#616161',

    primary: primary.main,
    primaryLight: primary.light,
    primaryDark: primary.dark,
    grey,
    greyLight: lightenColor(grey, 20),
    greyDark: lightenColor(grey, -20),
    error,
    errorLight: lightenColor(error, 20),
    errorDark: lightenColor(error, -20),
    success,
    successLight: lightenColor(success, 20),
    successDark: lightenColor(success, -20),
    warning,
    warningLight: lightenColor(warning, 20),
    warningDark: lightenColor(warning, -20),
    info,
    infoLight: lightenColor(info, 20),
    infoDark: lightenColor(info, -20),
  },
  fontFamily: {
    serif: ['var(--font-lora)', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
    sans: defaultTheme.fontFamily.sans,
    mono: defaultTheme.fontFamily.mono,
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

module.exports = theme;
