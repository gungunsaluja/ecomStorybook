// Typography Design Tokens
export const typography = {
  josefinSans: {
    name: 'Josefin Sans',
    description: 'Full Typeface',
    fontFamily: 'Josefin Sans, sans-serif',
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  lato: {
    name: 'Lato',
    description: 'Regular',
    fontFamily: 'Lato, sans-serif',
    weights: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },
} as const;
