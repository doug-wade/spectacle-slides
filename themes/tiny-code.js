import nightOwl from "react-syntax-highlighter/dist/esm/styles/prism/night-owl.js";

export default {
    ...nightOwl,
    'code[class*="language-"]': {
      ...nightOwl['code[class*="language-"]'],
      fontSize: ".5em",
    },
    'pre[class*="language-"]': {
      ...nightOwl['pre[class*="language-"]'],
      lineHeight: ".5",
    },
  };
  