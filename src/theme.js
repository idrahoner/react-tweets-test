export const theme = Object.freeze({
  space: {
    none: 0,
    xxxs: 8,
    xxs: 14,
    xs: 16,
    s: 18,
    sm: 20,
    m: 26,
    ml: 28,
    l: 48,
    xl: 62,
  },
  fontSize: { m: 18, l: 20 },
  colors: {
    primaryBg:
      "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
    secondaryBg: "#5736A3",
    regularButtonBg: "#EBD8FF",
    activeButtonBg: "#5CD3A8",
    accent: "#EBD8FF",
    primaryText: "#373737",
  },
  fonts: { primary: "Montserrat" },
  fontWeight: { medium: 500, bold: 600 },
  letterSpacing: { regular: 1.2 },
  sizes: {
    tweetWidth: "360px",
    tweetHeight: "480px",
    separatorWidth: "100%",
    separatorHeight: "8px",
    avatarFrame: "80px",
    buttonWidth: "196px",
    buttonHeight: "50px",
  },
  borders: [],
  borderWidth: [],
  borderStyles: [],
  radii: { tweet: "20px", button: "10px", avatarFrame: "13px", circle: "50%" },
  shadows: {
    tweet: "-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
    button: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
    separator:
      "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF",
    avatarFrame:
      "0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF",
  },
});
