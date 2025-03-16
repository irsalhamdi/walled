import { Button } from '@mui/material';

export const ButtomCustom = ({
 disabled,
    color,
    fontColor,
    reponsiveWidth,
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
    <Button data-testid={'button-custome'}
      component="label"
      style={customeStyle({
        color,
        disabled,
        isbold,
        borderRadius,
        outline,
        fontColor,
        fontSize,
        padding,
        width,
        reponsiveWidth,
        display,
        gap,
        fontFamily,
        ...style,
      })}
      disabled={disabled}
      onClick={disabled ? () => null : onClick}
    >
      <>{positionIcon === 'left' && icon}</>
      {label}
      {children}
       <>{positionIcon === 'right' && icon}</>
    </Button>
  );
};

const customeStyle = (props) => ({
  gap: props?.gap,
  fontFamily: props?.fontFamily,
  display: props?.display,
  backgroundColor: props.disabled
    ? "#929393"
    : props?.outline
    ? 'white'
    : props.color,
  border: `1px solid ${props.disabled ? "#929393": props?.color}`,
  borderRadius: props.borderRadius ?? "10px",
  fontWeight: props.isbold
    ? "700"
    : "400",
  fontSize: props.fontSize ?? "1rem",
  color: props?.outline ? props?.color : props?.fontColor ?? 'white',
  '&:hover': {
    backgroundColor: props?.outline
      ? 'white'
      : props?.disabled
      ? "#929393"
      : props?.color,
    opacity: 0.75,
  },
  ' &.MuiDisabled': {
    background: "#929393",
    color: 'white',
  },
  textTransform: 'capitalize',
  padding: props?.padding,
  cursor: props?.disabled ? 'default' : 'pointer',
  marginTop: 'auto',
  width: "100%",
});
