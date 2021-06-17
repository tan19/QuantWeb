# Portfolio Optimization
Suppose there are $n$ assets whose rate of return vector $\r$ has mean $\mu$ and covariance $\bSigma$.

!!! Warning "Note"
    The mean vector and the covariance matrix are of the return vector $\r$, not of the asset price $\S$.
    
The portfolio optimization problem, seeking optimal weight $\w$, can be formulated as follows:

## Problem A: find the global minimum variance portfolio
!!! Problem "Problem A: find the global minimum variance portfolio"
    \begin{align*}
    &\min_\w \frac12 \w^T\bSigma\w \\
    s.t.~ & \w^T\w = 1
    \end{align*}

    where $\mu_0$ is the required rate of return. 

Lagrangian equation is

$$
    f(\w, \lambda) = \frac12 \w^T\bSigma\w + \lambda(\w^T\w - 1)
$$

## Problem B: minimize portfolio variance given required return
!!! Problem "Problem A: minimize portfolio variance given required return"
    \begin{align*}
    &\min_\w \w^T\bSigma\w \\
    s.t.~ &\w^T\bmu = \mu_0 \mbox{ and } \w^T\w = 1
    \end{align*}

    where $\mu_0$ is the required rate of return. 

Solving the Lagrangian function

\begin{align*}
    f(\alpha, \beta, \w) = \frac12 \w^T\bSigma\w + \alpha (\w^T\bmu - \mu_0) + \beta (\w^T\w - 1)
\end{align*}

gives us

\begin{align*}
    &\bSigma\w + \bmu\lambda + \beta \w &= \0\\
    &\bmu^T\w &= \mu_0\\
    &\w^T\w &= 1
\end{align*}

or

\begin{align*}
    \begin{bmatrix}
    \bSigma & \bmu \\
    \bmu^T & 0
    \end{bmatrix}
    \begin{bmatrix}
    \w\\
    \lambda
    \end{bmatrix}
    =
    \begin{bmatrix}
    \0\\
    \mu_0
    \end{bmatrix}
\end{align*}

## Problem C: maximize portfolio return given required risk
!!! Problem "Problem B: maximize portfolio return given required risk"
    \begin{align*}
    &\max_\w \w^T\bmu \\
    s.t.~ &\w^T\bSigma\w = \sigma_0^2 \mbox{ and } \w^T\w = 1
    \end{align*}

    where $\mu_0$ is the required rate of return. 

