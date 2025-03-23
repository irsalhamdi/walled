import { Button } from '@mui/material';

export const ButtomCustom = ({
  disabled,
  color,
  fontColor,
  responsiveWidth,
  isbold,
  label,
  onClick,
  borderRadius,
  fontSize,
  outline,
  padding,
  width,
  icon,
  display,
  gap,
  fontFamily,
  children,
  positionIcon,
  style,
}) => {
  return (
    <Button
      data-testid="button-custome"
      component="label"
      disabled={disabled}
      onClick={disabled ? () => null : onClick}
      sx={{
        gap,
        fontFamily,
        display,
        backgroundColor: disabled
          ? '#929393'
          : outline
          ? 'white'
          : color,
        border: `1px solid ${disabled ? '#929393' : color}`,
        borderRadius: borderRadius ?? '10px',
        fontWeight: isbold ? 700 : 400,
        fontSize: fontSize ?? '1rem',
        color: outline ? color : fontColor ?? 'white',
        textTransform: 'capitalize',
        padding,
        width: width ?? '100%',
        marginTop: 'auto',
        cursor: disabled ? 'no-drop' : 'pointer',
        ...style,

        '&:hover': {
          backgroundColor: outline
            ? 'white'
            : disabled
            ? '#929393'
            : color,
          opacity: 0.75,
        },

        '&.Mui-disabled': {
          backgroundColor: '#929393',
          color: 'white',
          cursor: 'no-drop !important', 
        },
      }}
    >
      {positionIcon === 'left' && icon}
      {label}
      {children}
      {positionIcon === 'right' && icon}
    </Button>
  );
};
