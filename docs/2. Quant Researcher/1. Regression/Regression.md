# Regression

## Generalized Linear Regression
Consider a generalized linear regression problem based on a sample of $n$ observations $(x_1, t_1) \dots, (x_n, t_n)$. Suppose the design matrix $\X$ is of the form

$$
\underbrace{
    \begin{bmatrix}
    Y_1\\
    \dots\\
    Y_n
    \end{bmatrix}
}_{\y}
=
\underbrace{
    \begin{bmatrix}
    1 & f_1(X_1) & \dots & f_p(X_1) \\
    &&\dots\\
    1 & f_1(X_2) & \dots & f_p(X_2)
    \end{bmatrix}
}_{\X}
\underbrace{
    \begin{bmatrix}
    \beta_0\\
    \dots\\
    \beta_p
    \end{bmatrix}
}_{\bbeta}
+ 
\underbrace{
    \begin{bmatrix}
    \epsilon_1\\
    \dots\\
    \epsilon_n
    \end{bmatrix}
}_{\bepsilon}
$$

that is,

\begin{align}
    \y = \X\bbeta + \bepsilon
\end{align}

where $\X \in \RRR^{n \times p}$ is the design matrix, $\bbeta \in \RRR^p$ is the coefficient vector, $\y \in \RRR^n$ is the dependent random variable vector, and $\bepsilon \in \RRR^n$ is the normally distributed random error with mean $\0$ and covariance $\sigma\I_n$.

??? Warning "Note"
    Note that, 

    - $Y_i$ represents unrealized **random variables** while $t_i$ represents its **realized observations**.
    - On the contrary, $X_i$ is just a convenient way to put together the sample levels $x_i$.
    - $f(\cdot)$ can be any reasonable function, and the model is still called a **linear** model, because $\y$ is a linear function of its coefficients $\bbeta$, as $x_1, \dots, x_n$ are all constants. An example would be:

    $$
    \underbrace{
        \begin{bmatrix}
        1.132\\
        \dots\\
        0.128
        \end{bmatrix}
    }_{\y}
    =
    \underbrace{
        \begin{bmatrix}
        1 & e^{3.134} & \dots & 3.134^2 \\
        &&\dots\\
        1 & e^{129.334} & \dots & 129.334^2
        \end{bmatrix}
    }_{\X}
    \underbrace{
        \begin{bmatrix}
        \beta_0\\
        \dots\\
        \beta_p
        \end{bmatrix}
    }_{\bbeta}
    $$

    - It is called **general linear regression model**, because it is a *general* version of its simplest form $y = \beta_0 + \beta_1 x$, which is called the **simple linear regression model**, where the feature function is the identity function $f(x) \equiv x$. Note the difference between **general linear regression model** and **generalized linear regression model**, where the latter refers to a family of linear models that include Poisson Regression, Logistic Regression, and etc., where the random error is no longer normally distributed.

## The Maximum Likelihood Estimator
If we use Mean-Squared-Error (MSE) as the goodness-of-fit:

$$
    f(\bbeta) = \frac12||\X\bbeta - \y||_2^2 = \frac12(\X\bbeta - \y)^T(\X\bbeta - \y)
$$

Differentiate the above w.r.t. $\bbeta$,

\begin{align*}
    f'(\bbeta) &= (\X\bbeta - \y)^T\X \equiv \0 \implies \bbeta^T\X^T\X = \y^T\X \implies \bbeta  = (\X^T\X)^{-1}\X^T\y
\end{align*}

This is the well-known **normal equation**.

???+ Warning "Note"
    Note that,

    - $\bbeta  = (\X^T\X)^{-1}\X^T\y$ suggests that $\bbeta$ is a linear combination $\y$. Actually, $\bbeta$ is BLUE (best linear unbiased estimator).
    - You may ask why $\X^T\X$ is invertible. **It may not!** If that is the case, in mathematical terms, the columns of X are linearly dependent; and in econometric terms, there are **multi-collinearities**.