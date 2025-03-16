export const styles = {
  border: {
    default: '1px solid #e2e8f0',
    v1: '1px solid #D3D4D4',
    second: '1px solid #C4C4C4',
    white: '1px solid #EAEBEB',
  },
  borderRadius: {
    card: '0.75rem', // 12 px
    table: '1rem',
    small: '0.5rem', // 8px
    medium: '1rem', // 16px
    large: '2rem', // 32px
  },
  boxShadow: {
    table: '0px 16px 30px rgba(119, 119, 119, 0.1)',
    card: '0px 2px 12px rgba(0, 81, 155, 0.12);',
    cardV2: '0px 0px 21px -2px rgba(193, 212, 239, 0.6);',
    cardV3: '0px 2px 12px rgba(0, 81, 155, 0.12)',
    cardV4: '0px 4px 10px 0px rgba(119, 119, 119, 0.1)',
  },
  color: {
    primary: '#00529C', // Blue Bold
    secondary: '#f3f4f6', // Gray soft
    warning: '#F47104',
    disabled: '#929393',
    red: '#E84040',
    green: '#27AE60',
    chroma: '#171A1C',
    blue: '#1078CA',
    light: '#F8F9F9',
  },
  font: {
    family: {
      bold: 'AvenirNextBold',
      normal: 'AvenirNext',
      BriDigitalTextLight: 'BriDigitalTextLight',
      BriDigitalText: 'BriDigitalText',
      BriDigitalTextMedium: 'BriDigitalTextMedium',
      BriDigitalTextSemiBold: 'BriDigitalTextSemiBold',
      BriDigitalTextBold: 'BriDigitalTextBold',
    },
    color: {
      gray: '#94a3b8', // Gray get from figma
      grayBold: '#73808C',
      white: '#FFFFFF',
      semantic: '#666666',
      darkGrey: '#292929',
    },
    size: {
      xs: '0.75rem',
      small: '0.875rem', // 14px
      medium: '1rem', // 16px
      preLarge: '1.125rem', // 18px
      semiLarge: '1.25rem', // 20px
      large: '1.5rem', // 24px
      extraLarge: '3rem',
    },
    weight: {
      bold: '700',
      semiBold: '600',
      medium: '500',
      normal: '400',
    },
  },
  padding: {
    xs: '0.625rem',
    small: '0.7rem 1rem',
    medium: '1.2rem',
    semiLarge: '1.5rem',
    large: '2rem',
    button: '0.5rem 2.5rem',
    buttonMenu: '0.1rem 1.2rem',
  },
  gap: {
    large: '3rem',
    medium: '1.25rem',
    semiMedium: '1.5rem',
    small: '0.75rem',
  },
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export const generateScrollbar = (props)=>({
  '&::-webkit-scrollbar': {
    width: props.width,
    height: props.height,
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 5px #a5acb8',
    borderRadius: '5px',
    background: 'white',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#CFCFCF',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#a5acb8',
  },
});