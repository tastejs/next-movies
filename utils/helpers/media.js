
import { createMedia } from '@artsy/fresnel';

const ExampleAppMedia = createMedia({
  /**
   * TODO: hardcoded
   * MEMO: should be matched with the theme
   */
  breakpoints: {
    sm: 0,
    md: 1300,
    lg: 1462.5,
    xl: 1500
  }
});

// Make styles for injection into the header of the page
export const mediaStyles = ExampleAppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = ExampleAppMedia;
