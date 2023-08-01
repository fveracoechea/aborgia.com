import { keyframes } from "@vanilla-extract/css";

export const scaleIn = keyframes({
  "0%": {
    opacity: 0,
    transform: " scale(0.9)",
  },
  "100%": {
    opacity: 1,
    transform: " scale(1)",
  },
});

export const scaleOut = keyframes({
  "0%": {
    opacity: 1,
    transform: "scale(1)",
  },
  "100%": {
    opacity: 0,
    transform: "scale(0.9)",
  },
});
