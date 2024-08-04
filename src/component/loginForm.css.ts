import { globalStyle, style } from "@vanilla-extract/css";

export const form = style({
  display: "flex",
  flexDirection: "column",
});

globalStyle(`${form} > div`, {
  marginBottom: 10,
});

globalStyle(`${form} > div > label`, {
  display: "block",
  fontSize: 12,
});
