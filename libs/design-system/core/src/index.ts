import { createStitches } from '@stitches/react';

const TypographyTypes = [
  'display',
  'headline',
  'title',
  'label',
  'body',
] as const;
export type TypographyType = typeof TypographyTypes[number];
export const TypographySizes = ['large', 'medium', 'small'] as const;
export type TypographySize = typeof TypographySizes[number];
type TypographyValue = `${TypographyType}-${TypographySize}`;

export const {
  styled,
  createTheme,
  getCssText,
  globalCss,
  theme: lightTheme,
} = createStitches({
  prefix: 'ds',
  theme: {
    fonts: {
      audiowide: "'Audiowide', cursive",
      roboto: "'Roboto', sans-serif",
    },
    fontWeights: {
      regular: 400,
      medium: 500,

      'display-large': '$regular',
      'display-medium': '$regular',
      'display-small': '$regular',

      'headline-large': '$regular',
      'headline-medium': '$regular',
      'headline-small': '$regular',

      'title-large': '$regular',
      'title-medium': '$medium',
      'title-small': '$medium',

      'label-large': '$medium',
      'label-medium': '$medium',
      'label-small': '$medium',

      'body-large': '$regular',
      'body-medium': '$regular',
      'body-small': '$regular',
    },
  },
  utils: {
    typography: (value: TypographyValue) => ({
      fontFamily: '$roboto',
      fontWeight: `$${value}`,
      fontSize: `$${value}`,
      lineHeight: `$${value}`,
      letterSpacing: `$${value}`,
    }),
  },
});

export const darkTheme = createTheme('dark-theme', {});

export const useGlobalCss = globalCss({
  /***
      The new CSS reset - version 1.7.3 (last updated 7.8.2022)
      GitHub page: https://github.com/elad2412/the-new-css-reset
      ***/

  /*
      Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
      - The "symbol *" part is to solve Firefox SVG sprite bug
      */
  '*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))':
    {
      all: 'unset',
      display: 'revert',
    },

  /* Preferred box-sizing value */
  '*,*::before,*::after': {
    boxSizing: 'border-box',
  },

  /* Reapply the pointer cursor for anchor tags */
  'a, button': {
    cursor: 'revert',
  },

  /* Remove list styles (bullets/numbers) */
  'ol, ul, menu': {
    listStyle: 'none',
  },

  /* For images to not be able to exceed their container */
  img: {
    maxWidth: '100%',
  },

  /* removes spacing between cells in tables */
  table: {
    borderCollapse: 'collapse',
  },

  /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
  'input, textarea': {
    '-webkit-user-select': 'auto',
  },

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea: {
    whiteSpace: 'revert',
  },

  /* minimum style to allow to style meter element */
  meter: {
    '-webkit-appearance': 'revert',
    appearance: 'revert',
  },

  /* reset default text opacity of input placeholder */
  '::placeholder': {
    color: 'unset',
  },

  /* fix the feature of 'hidden' attribute.
   display:'revert', revert to element instead of attribute */
  ':where([hidden])': {
    display: 'none',
  },

  /* revert for bug in Chromium browsers
   - fix for the content editable attribute will work properly.
   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
  ':where([contenteditable]:not([contenteditable="false"]))': {
    '-moz-user-modify': 'read-write',
    '-webkit-user-modify': 'read-write',
    overflowWrap: 'break-word',
    '-webkit-line-break': 'after-white-space',
    '-webkit-user-select': 'auto',
  },

  /* apply back the draggable feature - exist only in Chromium and Safari */
  ':where([draggable="true"])': {
    '-webkit-user-drag': 'element',
  },

  html: {
    fontFamily: '$roboto',
    fontWeight: '$regular',
    fontVariantNumeric: 'tabular-nums',
  },
  body: {
    margin: 0,
  },
});
