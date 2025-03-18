import { useMediaQuery } from '@mui/system';

export default function UseResponsive() {
    const screenSizeRevamp = {
      small: useMediaQuery("(max-width: 767px)"),
      medium: useMediaQuery("(max-width: 1023px)"),
      customMedium: useMediaQuery("(max-width: 1284px)"),
      large: useMediaQuery("(max-width: 1439px)"),
      extraLarge: useMediaQuery("(max-width: 1919px)"),
      extraExtra2k: useMediaQuery("(max-width: 2559px)"),
      extraExtra4k: useMediaQuery("(max-width: 3840px)"),
      extraExtraSize: useMediaQuery("(min-width: 3841px)"),
    };
  return {
    screenSizeRevamp,
  };
}