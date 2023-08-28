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
      // pink
      default: "#ffffff",
    },
    primary: {
      main: "#1976d2",
    },
    text: {
      primary: "#300000",
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
