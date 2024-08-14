import { globalStyle, keyframes, style } from "@vanilla-extract/css";

const enter = keyframes({
  "0%": {
    transform: "translate(0, 50px)",
    opacity: 0,
  },
  "100%": {
    transform: "traslate(0, 0)",
    opacity: 1,
  },
});

const exit = keyframes({
  "0%": {
    transform: "traslate(0, 0)",
    opacity: 1,
  },
  "100%": {
    transform: "translate(0, 50px)",
    opacity: 0,
  },
});

export const listItem = style({
  display: "inline-block",
  margin: 10,
});

export const toastRoot = style({
  vars: {
    "--toast-margin-bottom": "24px",
  },
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  zIndex: 100,
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  marginBottom: "var(--toast-margin-bottom)",
});

export const toast = style({
  display: "flex",
  justifyContent: "center",
  opacity: 0,
  marginTop: 5,
  width: "100%",
  minWidth: 300,
  maxWidth: 680,
  padding: "15px 14px 12px",
  lineHeight: 1.47,
  fontSize: "1.1rem",
  color: "#ffffff",
  backgroundColor: "rgba(17, 17, 17, 0.95)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
  borderRadius: 5,
  selectors: {
    "&.enter": {
      animation: `${enter} 0.5s ease-out forwards`,
    },
    "&.show": {
      transform: "translateY(0)",
      opacity: 1,
    },
    "&.exit": {
      animation: `${exit} 0.5s ease-out forwards`,
    },
  },
});

globalStyle(`${toast} p`, {
  lineHeight: 1.47,
  fontSize: "1.1rem",
  textAlign: "center",
});

globalStyle(`${toast} b`, {
  fontWeight: 700,
  color: "#03c75a",
});
