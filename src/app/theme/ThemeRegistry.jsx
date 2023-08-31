"use client";

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });

const themeOptions = {
  // typography: {
  //   fontSize: 12,
  //   fontFamily: roboto.style.fontFamily,
  // },

  palette: {
    background: {
      // light background
      default: "#F6F1F2",
  
    },
    primary: {
      //main Brand color
      main: "#a09195",
      
    },
    text: {
      //main text colour
      primary: "#40363C",
    },

    

  },
};



const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
