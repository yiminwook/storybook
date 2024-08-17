import { globalStyle, style } from "@vanilla-extract/css";

export const modal = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100dvh",
  zIndex: 100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  ":last-of-type": {
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});

export const inner = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  position: "absolute",
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
  maxWidth: "calc(100vw - 80px)",
  maxHeight: "calc(100dvh - 80px)",
  minWidth: 250,
  border: "1px solid #242424",
  borderRadius: 6,
  backgroundColor: "#fff",
});

export const header = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid #cccccc",
});

export const title = style({
  margin: "0 20px",
  flexGrow: 1,
});

export const close = style({
  position: "relative",
  width: 40,
  height: 40,
  flex: "0 0 40px",
  textAlign: "center",
  selectors: {
    "&::before, &::after": {
      content: "",
      position: "absolute",
      width: 20,
      borderTop: "2px solid #333333",
      transformOrigin: "50% 1px",
      left: 10,
      top: 19,
    },
    "&::before": {
      transform: "rotate(45deg)",
    },
    "&::after": {
      transform: "rotate(-45deg)",
    },
  },
});

export const content = style({
  padding: 20,
});
export const footer = style({
  padding: "10px 20px",
  textAlign: "right",
});

globalStyle(`${footer} button`, {
  backgroundColor: "#cccccc",
  color: "#000000",
  // padding: "5px 10px",
  borderRadius: 2,
  fontWeight: 600,
  border: "1px solid black",
});
