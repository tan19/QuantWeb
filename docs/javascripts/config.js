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
      bA: "\\boldsymbol{A}",      
      bX: "\\boldsymbol{X}",
      bx: "\\boldsymbol{x}",
      bY: "\\boldsymbol{Y}",
      by: "\\boldsymbol{y}",      
      bI: "\\boldsymbol{I}",
      bB: "\\boldsymbol{B}",
      bW: "\\boldsymbol{W}",
      bR: "\\boldsymbol{R}",
      bV: "\\boldsymbol{V}",
      bU: "\\textboldsymbolbf{U}",
      bD: "\\boldsymbol{D}",
      bM: "\\boldsymbol{M}",
      S: "\\boldsymbol{S}",      
      FF: "\\boldsymbol{F}",      
      r: "\\boldsymbol{r}",
      w: "\\boldsymbol{w}",            
      0: "\\boldsymbol{0}",
      bSigma: "\\boldsymbol{\\Sigma}",
      bmu: "\\boldsymbol{\\mu}",
      bsigma: "\\boldsymbol{\\sigma}",
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