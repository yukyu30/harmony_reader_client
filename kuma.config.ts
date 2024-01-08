import { createTheme } from '@kuma-ui/core';

const theme = createTheme({
  //https://ionicframework.com/docs/theming/color-generator
  colors: {
    primary: '#55B8BB', // --ion-color-primary
    'primary-dark': '#4ba2a5', // --ion-color-primary-shade
    'primary-light': '#66bfc2', // --ion-color-primary-tint
    secondary: '#3dc2ff', // --ion-color-secondary
    'secondary-dark': '#36abe0', // --ion-color-secondary-shade
    'secondary-light': '#50c8ff', // --ion-color-secondary-tint
    tertiary: '#5260ff', // --ion-color-tertiary
    'tertiary-dark': '#4854e0', // --ion-color-tertiary-shade
    'tertiary-light': '#6370ff', // --ion-color-tertiary-tint
    success: '#2dd36f', // --ion-color-success
    'success-dark': '#28ba62', // --ion-color-success-shade
    'success-light': '#42d77d', // --ion-color-success-tint
    warning: '#ffc409', // --ion-color-warning
    'warning-dark': '#e0ac08', // --ion-color-warning-shade
    'warning-light': '#ffca22', // --ion-color-warning-tint
    danger: '#eb445a', // --ion-color-danger
    'danger-dark': '#cf3c4f', // --ion-color-danger-shade
    'danger-light': '#ed576b', // --ion-color-danger-tint
    light: '#f4f5f8', // --ion-color-light
    'light-dark': '#d7d8da', // --ion-color-light-shade
    'light-light': '#f5f6f9', // --ion-color-light-tint
    medium: '#92949c', // --ion-color-medium
    'medium-dark': '#808289', // --ion-color-medium-shade
    'medium-light': '#9d9fa6', // --ion-color-medium-tint
    dark: '#222428', // --ion-color-dark
    'dark-dark': '#1e2023', // --ion-color-dark-shade
    'dark-light': '#383a3e', // --ion-color-dark-tint
    text: '#3F3F3F',
    'text-dark': '#fff',
    'text-light': '#3F3F3F',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  spacings: {
    sm: '0.5em',
    md: '1em',
    lg: '3em',
  },
  radii: {
    md: '0.5rem',
    full: '9999px',
  },
  components: {
    Button: {
      defaultProps: {
        variant: 'success',
        boxSizing: 'border-box',
        borderRadius: 'radii.md',
        width: 'auto',
        height: '2.5rem',
        justifyContent: 'center',
        fontWeight: 500,
        fontSize: '1rem',
        paddingX: '0.75rem',
      },
      variants: {
        primary: {
          bg: 'colors.primary',
          color: 'colors.text-dark',
          border: 'none',
          _hover: {
            bg: 'colors.primary-light',
          },
        },
        success: {
          bg: 'colors.primary',
          color: 'colors.text-dark',
          border: 'none',
          _hover: {
            bg: 'colors.primary-light',
          },
        },
        danger: {
          bg: 'colors.danger',
          color: 'colors.text-dark',
          border: 'none',
          _hover: {
            bg: 'colors.danger-light',
          },
        },
        warning: {
          bg: 'colors.warning',
          color: 'colors.text-dark',
          border: 'none',
          _hover: {
            bg: 'colors.waring-light',
          },
        },
        transparent: {
          bg: 'transparent',
          color: 'colors.text',
          border: 'none',
          _hover: {
            bg: 'colors.light',
          },
        },
        outlined: {
          bg: 'white',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'colors.light-dark',
          color: 'colors.text',
          _hover: {
            bg: 'colors.light',
          },
        },
      },
    },
    Image: {
      variants: {
        avatar: {
          borderRadius: 'radii.full',
          border: '3px solid',
          borderColor: 'transparent',
          width: '2.5rem',
          height: '2.5rem',
          _hover: {
            borderColor: 'colors.light',
          },
        },
      },
    },
    Text: {
      defaultProps: {
        color: 'colors.text',
      },
    },
  },
});

type UserTheme = typeof theme;

declare module '@kuma-ui/core' {
  export interface Theme extends UserTheme {}
}

export default theme;
