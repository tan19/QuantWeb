# Regression
\chapter{Regression Models}

Generalized linear models include as special cases,  linear regression and analysis-of-variance models, logit and probit models for quantal responses, log linear models and multinomial response models for counts and some commonly used models for survival data.

The second-order properties of the parameter estimates are insensitive to the assumed distributional form: the second-order properties depend mainly on the assumed variance-to-mean relationship and on uncorrelatedness or independence.

\section{Logistic Regression}
Generalized linear model (GLiM) is a generalization of the general linear regression model (GLM) where the response variable can have error distributions other than a normal, this is achieved by assuring:
\begin{enumerate}
	\item the response variable and the explanatory variable are related via a \emph{link function}, and
	\item the variance of each observation is a function of its predicted value.
\end{enumerate}
Usually, \emph{iteratively reweighted least squares} is used for the MLE estimation.

\index{logistic regression}\label{model: logistic regression}
The \emph{logit function}\index{logit function} is defined as:
\begin{align}
	logit(p) = \log\left(\frac{p}{1-p}\right)
\end{align}
The inverse of a logit function is called the \emph{logistic function}\index{logistic function}, an important special case of sigmoid functions, a family of functions that are ``S''-shaped. It is defined as:
\begin{align}
	\sigma(t) := \frac{1}{1+e^{-t}},\quad t \in \RRR
\end{align}

\begin{figure}[h]
 \centering
 \includegraphics[scale=0.5]{logisticfunction}
 \caption{logistic function}
\end{figure}


For binary classification, we can rewrite
\begin{align}
	P_{\W}(\CC = 1 | \x) &:= \sigma((\w_1-\w_2)^T\x)\\
	&= \frac{1}{1+\exp(-(\w_1-\w_2)^T\x)}\\
	&= \frac{\exp(\w_1^T\x)}{\exp(\w_1^T\x)+\exp(\w_2^T\x)}
\end{align}
where the class weight matrix $\W$ has two columns $\w_1$ and $\w_2$, the weight vector for class $1$ and $2$, respectively. The \index{softmax function} generalizes the logistic function to multiple classes:
\begin{align}
	P_{\W}(\CC = i | \x) &:= \frac{\exp(\w_i^T\x)}{\sum_{k=1}^K\exp(\w_k^T\x)}
\end{align}
where $\W$ has $K$ columns, each of which is the corresponding weight vector.


## Model

\begin{equation}
	Y_i = \beta_0 + \beta_1 X_i + \epsilon_i
\end{equation}

where $\epsilon_i \sim \NN(0,\sigma^2)$

## Estimated Regression Function

\begin{eqnarray}
	b_1 & = & \rho_{XY} \cdot \frac{s_Y}{s_X} = \frac{\sum_{i=1}^n (X_i-\bar X) (Y_i-\bar Y)}{\sum_{i=1}^n (X_i - \bar X)^2 } = \sum_{i=1}^n \left[\frac{X_i-\bar X}{\sum_{i=1}^n (X_i - \bar X)^2 }\right] Y_i \\
	b_0 & = & \bar Y - b_1 \bar X \\
	\hat \sigma^2 & = & \frac{MSE}{n-2} = \frac{\sum_{i=1}^n (Y_i - \hat Y_i)^2}{n-2}
\end{eqnarray}

Note that $\sum(X_i-\bar X)^2 = \sum X_i^2 - n\bar X^2$, and $b_1 = \rho \cdot \frac{s_Y}{s_X}$, where $\rho$ is the correlation between $X$ and $Y$ and $s_Y, s_X$ are standard error of $Y$ and $X$, respectively.

The slope of the fitted line is equal to the correlation between $y$ and $x$ corrected by the ratio of standard deviations of these variables. The intercept of the fitted line is such that it passes through the center of mass $(\bar x, \bar y)$ of the data points.

Another way of writing the estimated regression function is

\begin{align}
	\hat Y_i = \bar Y + b_1 (X_i - \bar X)	
\end{align}

Notice, $\bar Y$ and $b_1$ are uncorrelated (check it using the fact that $b_1 = \sum_{i=1}^{n} k_i Y_i$).

## Properties of $k_i$

\begin{align}
	k_i &= \frac{X_i - \bar X}{\sum_{i=1}^n (X_i-\bar X)^2}\\
	\sum_{i=1}^{n}n k_i &= 0\\
	\sum_{i=1}^{n}n k_i X_i &= 1\\
	\sum k_i^2 &= \frac{1}{\sum_{i=1}^{n}(X_i - \bar X)^2}
\end{align}

The second and third identities hold as a requirement for the unbiasness, since $$E(b_1) = E\left(\sum k_i Y_i\right)= E\left(\sum k_i (\beta_0+\beta_1 X_i)\right) = E\left(k_i \sum\beta_0 + \beta_1 \sum k_i X_i \right) = \beta_1$$ requires $\sum k_i = 0$  and $\sum X_i k_i = 1$.
The fourth identity ensures the attainment of the minimum variance.

## Properties of $e_i$
\begin{eqnarray}
	e_i & = & Y_i - \hat Y_i \\
	\sum e_i & = & 0 \\
	\sum X_i e_i & = & 0 \\
	\sum \hat Y_i e_i & = & 0
\end{eqnarray}

## Properties of $b_1$ and $b_0$
\begin{eqnarray}
	b_1 &\sim& \NN \left(\beta_1,\sigma^2 \left[\frac{1}{\sum(X_i-\bar X)^2}\right]\right) \\
	b_0 &\sim& \NN \left(\beta_0,\sigma^2 \left[\frac{1}{n} + \frac{(\bar X)^2}{\sum(X_i-\bar X)^2}\right] \right)
\end{eqnarray}

where $\sigma^2$ can be estimated by the MSE, i.e., $\hat \sigma^2 = \frac{\sum_{i=1}^n (Y_i - \hat Y_i)^2}{n-2}$

## Inference About $b_1$ and $b_0$
The confidence interval for $b_1$, with confidence level $\alpha$ is

\begin{equation}
	b_1 \pm t(1-\alpha/2;n-2)s\{b_1\}\\
\end{equation}

or

\begin{equation}
	b_1 \mp t(\alpha/2;n-2)s\{b_1\}\\
\end{equation}

Similarly, the confidence interval for $b_0$, with confidence level $\alpha$ is

\begin{equation}
	b_0 \pm t(1-\alpha/2;n-2)s\{b_0\}\\
\end{equation}

or

\begin{equation}
	b_0 \mp t(\alpha/2;n-2)s\{b_0\}\\
\end{equation}

\noindent
\\
Now, since

\begin{eqnarray}
	b_1 & = & \frac{1}{\sum_{i=1}^n (X_i - \bar X)^2 } \sum_{i=1}^n (X_i-\bar X) Y_i \\
	& = & \sum_{i=1}^n k_i Y_i
\end{eqnarray}

where $k_i = \frac{X_i-\bar X}{\sum_{i=1}^n (X_i - \bar X)^2 }$, we have

\begin{eqnarray}
	\sum k_i &=& 0 \\
	\sum X_i k_i &=& 1 \\
	\sum k_i^2 &=& \frac{1}{\sum_{i=1}^n (X_i - \bar X)^2 }
\end{eqnarray}

The first two identity hold as a requirement for the unbiasness, since $$E(b_1) = E\left(\sum k_i Y_i\right)= E\left(\sum k_i (\beta_0+\beta_1 X_i)\right) = E\left(\beta_0 \sum k_i \beta_0 + \beta_1 \sum k_i X_i \right) = \beta_1$$ requires $\sum k_i = 0$  and $\sum X_i k_i = 1$.
The third identity ensures the attainment of the minimum variance.

## Confidence Interval of $b_1$ and $b_0$
Since $SSE/\sigma^2 \sim \chi_{n-2}^2$, and $\frac{s^2\{b_1\}}{\sigma^2\{b_1\}} \sim \frac{\chi_{n-2}^2}{n-2}$

\begin{eqnarray}
	\frac{b_1-\beta_1}{s\{b_1\}} = \left. \frac{b_1-\beta_1}{\sigma\{b_1\}} \middle/ \frac{s\{b_1\}}{\sigma\{b_1\}} \right. \sim \frac{z}{\sqrt{\frac{\chi_{n-2}^2}{n-2}}} = t_{n-2}
\end{eqnarray}

so the confidence interval for $b_1$, with confidence level $\alpha$ is

\begin{equation}
	b_1 \pm t(1-\alpha/2;n-2)s\{b_1\}\\
\end{equation}

or

\begin{equation}
	b_1 \mp t(\alpha/2;n-2)s\{b_1\}\\
\end{equation}

Similarly, the confidence interval for $b_0$, with confidence level $\alpha$ is

\begin{equation}
	b_0 \pm t(1-\alpha/2;n-2)s\{b_0\}\\
\end{equation}

or

\begin{equation}
	b_0 \mp t(\alpha/2;n-2)s\{b_0\}\\
\end{equation}

\noindent
\\
The power of testing $\beta_1 = \beta^{H_0}$ is $Power = P\{|t^*|>t(1-\alpha/2;n-2)|\delta\}$, where $\delta = \frac{|\beta_1 - \beta^{H_0}|}{\sigma\{b_1\}}$. Similar for $\beta_0$.

\begin{table}[h]
\centering
\begin{tabular}{c || c c c }
\hline
& {Estimate} & {Expectation} & {Variance} \\
\hline
\\
$Y_i$& $\hat Y_i$ & $\beta_0+\beta_1 X_i$ & $\sigma^2$\\
\\
\hline
\\
$b_1$& $\frac{\sum (X_i-\bar X) Y_i}{\sum (X_i-\bar X)^2}$ & $\beta_1$ & $\sigma^2 \cdot \frac{1}{\sum (X_i-\bar X)^2}$\\
\\
\hline
\\
$b_0$& $\bar Y - b_1 \bar X$ & $\beta_0$ & $\sigma^2 \cdot \left[\frac{1}{n} + \frac{(\bar X)^2}{\sum (X_i-\bar X)^2}\right]$\\
\\
\hline
\\
$\hat Y_h$& $\bar Y + b_1 (X_h-\bar X)$ & $\beta_0+\beta_1 X_h$ & $\sigma^2 \cdot \left[\frac{1}{n} + \frac{(X_h-\bar X)^2}{\sum (X_i-\bar X)^2}\right]$\\
\\
\hline
\\
$\hat Y_{h(new)}$& $\bar Y + b_1 (X_h-\bar X)$ & $\beta_0+\beta_1 X_h$ & $\sigma^2 \cdot \left[1 + \frac{1}{n} + \frac{(X_h-\bar X)^2}{\sum (X_i-\bar X)^2}\right]$\\
\\
\hline
\\
$\hat Y_{h(new_m)}$& $\bar Y + b_1 (X_h-\bar X)$ & $\beta_0+\beta_1 X_h$ & $\sigma^2 \cdot \left[\frac{1}{m} + \frac{1}{n} + \frac{(X_h-\bar X)^2}{\sum (X_i-\bar X)^2}\right]$\\
\\
\hline
\\
$e_i$& $Y_i-\hat Y_i$ & $0$ & $1-h_{ii}$\\
\\
\hline
\end{tabular}
\caption{Simple Linear Regression}
\end{table}

In particular, when $X_h = 0$ we obtain the formulas for $b_0$, and when $X_h - \bar X = 1$ we obtain the formulas for $b_1$.

\subsection{ANOVA of Simple Linear Regression Model}

\begin{align}
	SSTO &= SSR + SSE\\
	\sum_{i=1}^n (Y_i - \hat Y_i) &= \sum_{i=1}^n (\hat Y_i - \bar y) + \sum_{i=1}^n (\bar y - \hat Y_i)
\end{align}

SSR can also be computed as $SSR = b_1^2 \sum_{i=1}^n (X_i - \bar X)$, so given the same ``distribution'' of $X$, the steeper the slope of the regression line, the higher the SSR, and hence the better fit of the model.

To test $H_0: \beta_1 = 0$, we use $F = \frac{SSR}{SSE}$. There is equivalence between an $F$ test and a $t$ test: $[t(1-\alpha/2,n-2)]^2 = F(1-\alpha,n-2)$.

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