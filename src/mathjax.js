window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["[$]", "[/$]"],
      ["\\(", "\\)"],
    ],
  },
  svg: {
    fontCache: "global",
  },
};

(() => {
  const script = document.createElement("script");
  script.src = `node_modules/mathjax/es5/tex-mml-chtml.js`;
  script.async = true;
  document.head.appendChild(script);
})();
