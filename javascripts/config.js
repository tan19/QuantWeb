window.MathJax = {
  loader: {load: ['[tex]/boldsymbol']},
  tex: {
    packages: {'[+]': ['boldsymbol']},
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',
    macros: {
      bb: ["{\\textbf #1}", 1],      
      S: "\\boldsymbol{S}",      
      I: "\\boldsymbol{I}",
      X: "\\boldsymbol{X}",
      FF: "\\boldsymbol{F}",      
      r: "\\boldsymbol{r}",
      w: "\\boldsymbol{w}",            
      y: "\\boldsymbol{y}",
      0: "\\boldsymbol{0}",
      bSigma: "\\boldsymbol{\\Sigma}",
      bmu: "\\boldsymbol{\\mu}",
      bsigma: "\\boldsymbol{\\sigma}",
      bbeta: "\\boldsymbol{\\beta}",
      bepsilon: "\\boldsymbol{\\epsilon}",
      EEE: "\\mathbb{E}",
      RRR: "\\mathbb{R}",
      QQQ: "\\mathbb{Q}",
      Var: "\\mbox{Var}",      
      bm: ["\\boldsymbol #1", 1]
    }
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};