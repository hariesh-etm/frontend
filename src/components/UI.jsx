import React from "react";
import { theme } from "../theme";

export const Card = ({ children }) => (
  <div
    className={`${theme.colors.white} ${theme.radius.card} ${theme.shadow.card} ${theme.padding.card}`}
  >
    {children}
  </div>
);

export const ButtonSolid = ({ children }) => (
  <button
    className={`${theme.colors.accentBg} ${theme.colors.white} ${theme.fonts.body} font-semibold ${theme.radius.button} ${theme.padding.button} hover:bg-teal/90 transition`}
  >
    {children}
  </button>
);

export const ButtonGhost = ({ children }) => (
  <button
    className={`border border-navy text-navy ${theme.fonts.body} font-semibold ${theme.radius.button} ${theme.padding.button} hover:bg-navy hover:text-white transition`}
  >
    {children}
  </button>
);

export const Wordmark = () => (
  <h1 className={`${theme.fonts.headline} text-3xl text-navy lowercase`}>
    toglac
  </h1>
);

export const Favicon = () => (
  <div
    className={`w-10 h-10 flex items-center justify-center ${theme.radius.card} ${theme.colors.primaryBg} ${theme.colors.white} ${theme.fonts.headline} text-lg`}
  >
    tg
  </div>
);
