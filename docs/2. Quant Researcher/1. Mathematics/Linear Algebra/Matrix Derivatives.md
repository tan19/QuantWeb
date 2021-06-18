# Matrix Derivatives

## Scalar w.r.t vector

\begin{align}
    \frac{\partial \a^T\x}{\partial \x} &= \a^T\\
    \frac{\partial \x^T\x}{\partial \x} &= 2\x^T\\
    \frac{\partial \A\x}{\partial \x} &= \A\\
    \frac{\partial \x^T\A\x}{\partial \x} &= \x^T(\A + \A^T)
\end{align}

## Inverse
\begin{align}
    \frac{\partial \Y^{-1}(x)}{\partial x} &= -\Y^{-1}\frac{\partial \Y}{x}\Y^{-1}
\end{align}

??? "Proof"
    Since

    $$
    \Y\Y^{-1} \equiv \I \implies \frac{\partial \Y}{\partial x}\Y^{-1} + \Y\frac{\partial \Y^{-1}}{\partial x} = \0
    $$

    we have

    $$        
        \frac{\partial \Y^{-1}(x)}{\partial x} = -\Y^{-1}\frac{\partial \Y}{x}\Y^{-1}
    $$