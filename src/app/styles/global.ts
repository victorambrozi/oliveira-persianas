"use client";

import { createGlobalStyle } from 'styled-components';
import { IBM_Plex_Serif, IBM_Plex_Sans } from "next/font/google";
import { Colors } from '../@types/colors';


export const serifFont = IBM_Plex_Serif({
  weight: ['600', '700'],
  style: 'normal',
  subsets: ['latin']
})

export const sansFont = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600'],
  style: 'normal',
  subsets: ['latin']
})

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.10%;
    font-family: ${sansFont.style.fontFamily}
  }

  a {
    text-decoration: none;
    display: block;
  }

  ul {
    list-style: none;
  }
  
  img {
    display: block;
    max-width: 100%;
  }
`

export const colors: Colors = {
  greyOne: '#F7FAF8',
  greyTwo: '#E9EEEB',
  greyThree: '#CADBD1',
  greyFour: '#344039',
  greyFive: '#25312A',
  greyGradient: 'linear-gradient(180deg, rgba(247, 250, 248, 0.9) 0%, rgba(27, 38, 32, 0.9) 100%);',
  greySix: '#1B2620',
  redGradient: 'linear-gradient(92.63deg, #800000 0%, #990000 100%);',
}


export default GlobalStyle;