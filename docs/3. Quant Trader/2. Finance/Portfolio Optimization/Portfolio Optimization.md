# Portfolio Optimization
Suppose there are $n$ assets whose rate of return vector $\r$ has mean $\bmu$ and covariance $\bSigma$.

!!! Warning "Note"
    The mean vector and the covariance matrix are of the return vector $\r$, not of the asset price $\S$.
    
The portfolio optimization problem, seeking optimal weight $\w$, can be formulated as follows:

## Problem A: find the global minimum variance portfolio
!!! Problem "Problem A: find the global minimum variance portfolio"
    \begin{align*}
    &\min_\w \frac12 \w^T\bSigma\w \\
    s.t.~ & \1^T\w = 1
    \end{align*}

    where $\mu_0$ is the required rate of return. 

???+ Done "Solution A: find the global minimum variance portfolio"
    The local optimum is attained when the gradient of the Lagrangian equation is zero:

    $$
        \nabla f(\w, \lambda) = \nabla \left[\frac12 \w^T\bSigma\w - \lambda(\1^T\w - 1)\right] \equiv \0
    $$

    That is,

    $$
        \begin{cases}
            \bSigma\w - \lambda\1 &\equiv \0 \\
            \1^T\w &= 1
        \end{cases}
    $$

    From the first equation we obtain

    $$
        \w = \lambda\bSigma^{-1}\1
    $$

    Plug in to the second equation, we have

    $$
        \lambda = \frac{1}{\1^T\bSigma\1}
    $$

    Finally,

    $$
        \w = \frac{\bSigma^{-1}\1}{\1^T\bSigma\1}
    $$


    **Example 1:** When the assets of the portfolio are uncorrelated and have identical variances, that is, $\bSigma = \sigma^2\I_n$,  the optimal weights are equal, i.e., $\w = (1/n, \dots, 1/n)^T$.

    
## Problem B: minimize portfolio variance given required return
!!! Problem "Problem B: minimize portfolio variance given required return"
    \begin{align*}
    &\min_\w \frac12\w^T\bSigma\w \\
    s.t.~ &\bmu^T\w = \mu_0 \mbox{ and } \1^T\w = 1
    \end{align*}

    where $\mu_0$ is the required rate of return. 

???+ Done "Solution B: minimize portfolio variance given required return"    
    Optimizing the Lagrangian function

    \begin{align*}
        f(\lambda_0, \lambda_1, \w) = \frac12 \w^T\bSigma\w + \lambda_0 (\w^T\bmu - \mu_0) + \lambda_1 (\1^T\w - 1)
    \end{align*}

    gives us

    \begin{align}
        \bSigma\w + \lambda_0\bmu + \lambda_1 \1 = \0 \implies \w = -\bSigma^{-1}(\lambda_0\bmu + \lambda_1\1) \label{eq:1}
    \end{align}

    Plug in $\w$ into the two constraint equations we obtain    

    \begin{cases}
        -\bmu^T\bSigma^{-1}(\lambda_0\bmu + \lambda_1\1) &= \mu_0 \\
        -\1^T\bSigma^{-1}(\lambda_0\bmu + \lambda_1\1) &= 1
    \end{cases}

    Let

    \begin{align*}
    \begin{cases}
        a & = \mu^T\bSigma^{-1}\mu\\
        b & = \mu^T\bSigma^{-1}\1\\
        c & = \1^T\bSigma^{-1}\1
    \end{cases}
    \implies
    \begin{cases}
        \lambda_0 &= \frac{b - \mu_0c}{b^2 - ac}\\
        \lambda_1 &= \frac{a - \mu_0b}{b^2 - ac}
    \end{cases}
    \end{align*}

    and finally $\w$ can be calculated using $\lambda_0$ and $\lambda_1$ with Equation ($\ref{eq:1}$).


## Problem C: maximize portfolio return given required risk
!!! Problem "Problem C: maximize portfolio return given required risk"
    \begin{align*}
    &\max_\w \bmu^T\w \\
    s.t.~ &\w^T\bSigma\w = \sigma_0^2 \mbox{ and } \1^T\w = 1
    \end{align*}

    where $\mu_0$ is the required rate of return. 

???+ Done "Solution C: maximize portfolio return given required risk"    
    Optimizing the Lagrangian function

    \begin{align*}
        f(\lambda_0, \lambda_1, \w) = \w^T\bmu - \frac12 \lambda_0 (\w^T\bSigma\w - \sigma_0^2) - \lambda_1 (\1^T\w - 1)
    \end{align*}

    gives us

    \begin{align}
        \bmu - \lambda_0\bSigma\w - \lambda_1 \1 = \0 \implies \w = \frac{\bSigma^{-1}(\bmu - \lambda_1\1)}{\lambda_0} \label{eq:2}
    \end{align}


    Plug in $\w$ into the two constraint equations we obtain    

    \begin{align}
    \begin{cases}
        (\frac{\bSigma^{-1}(\bmu - \lambda_1\1)}{\lambda_0})^T\bSigma(\frac{\bSigma^{-1}(\bmu - \lambda_1\1)}{\lambda_0}) &= \sigma_0^2 \\
        \1^T\frac{\bSigma^{-1}(\bmu - \lambda_1\1)}{\lambda_0} &= 1
    \end{cases}
    \implies
    \begin{cases}
        (\bmu - \lambda_1\1)^T\bSigma^{-1}(\bmu - \lambda_1\1) &= \lambda_0^2\sigma_0^2 \label{eq:3} \\
        \1^T\bSigma^{-1}(\bmu - \lambda_1\1) &= \lambda_0 
    \end{cases} 
    \end{align}

    Let

    \begin{align*}
    \begin{cases}
        a & = \mu^T\bSigma^{-1}\mu\\
        b & = \mu^T\bSigma^{-1}\1\\
        c & = \1^T\bSigma^{-1}\1
    \end{cases}
    \implies
    (\sigma_0^2 c^2 + c)\lambda_1^2 + 2(\sigma_0^2 c - b)\lambda_1 + (a - \sigma_0^2 b^2) = 0
    \end{align*}

    With

    \begin{align*}
    \begin{cases}
        A & = \sigma_0^2 c^2 + c\\
        B & = 2(\sigma_0^2 c - b)\\
        C & = a - \sigma_0^2 b^2\1
    \end{cases}
    \implies        
    \lambda_1 &= \frac{-B \pm \sqrt{B^2 - 4AC}}{2A}
    \end{align*}
    
    Substitute $\lambda_1$ into the second equation in Equation ($\ref{eq:3}$) to get $\lambda_0$, 
    and finally $\w$ can be calculated using $\lambda_0$ and $\lambda_1$ with Equation ($\ref{eq:2}$).