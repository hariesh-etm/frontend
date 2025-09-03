import React from "react";
import { theme } from "../theme";

export const Hero = ({ goPro }) => (
  <section className="text-center py-20 bg-gray-100">
    <h1 className={`${theme.fonts.headline} text-4xl md:text-5xl text-navy font-bold mb-8`}>
      Earn credits. Enter the race. Win prizes.
    </h1>
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <button
        className={`${theme.colors.accentBg} ${theme.colors.white} ${theme.radius.button} ${theme.padding.button} hover:bg-teal/90 transition`}
        onClick={goPro}
      >
        Go Pro ($19)
      </button>
      <button className={`border border-navy text-navy ${theme.radius.button} ${theme.padding.button} hover:bg-navy hover:text-white transition`}>
        Join Free
      </button>
      <button className={`border border-teal text-teal ${theme.radius.button} ${theme.padding.button} hover:bg-teal hover:text-white transition`}>
        See Rules
      </button>
    </div>
  </section>
);
