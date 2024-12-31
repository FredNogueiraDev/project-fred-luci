import { createGlobalStyle } from 'styled-components';

import OutfitRegularTtf from '../assets/fonts/Outfit/static/Outfit-Regular.ttf';
import OutfitMediumTtf from '../assets/fonts/Outfit/static/Outfit-Medium.ttf';
import OutfitSemiboldTtf from '../assets/fonts/Outfit/static/Outfit-SemiBold.ttf';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Outfit';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${OutfitRegularTtf}') format('truetype');
  }

  @font-face {
    font-family: 'Outfit';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${OutfitMediumTtf}') format('truetype');
  }

  @font-face {
    font-family: 'Outfit';
    font-weight: 600;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${OutfitSemiboldTtf}') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Outfit, sans-serif;
  }

  body {
    background: #fafafa;
    color: #333;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }
`;
