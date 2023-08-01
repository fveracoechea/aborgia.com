import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./vars.css";

globalStyle("html, body", {
  fontFamily: "'Lora', serif",
  fontWeight: theme.fontWeight.normal,
  fontSize: "16px",
  fontStyle: "normal",
  margin: 0,
  padding: 0,
  opacity: 1,
});

globalStyle("body", {
  minHeight: "100vh",
  maxWidth: "100vw",
  color: theme.color.text.dark,
});

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

// Firefox scrollbar styling
globalStyle(".customScroll", {
  scrollbarWidth: "thin",
  scrollbarColor: `${theme.color.grey.light} ${theme.color.grey.light} `,
});

// Webkit & Blink scrollbar styling
globalStyle(".customScroll::-webkit-scrollbar", {
  width: 5,
});

globalStyle(".customScroll::-webkit-scrollbar-track", {
  background: theme.color.grey.light,
});

globalStyle(".customScroll::-webkit-scrollbar-thumb", {
  backgroundColor: theme.color.grey.light,
});
