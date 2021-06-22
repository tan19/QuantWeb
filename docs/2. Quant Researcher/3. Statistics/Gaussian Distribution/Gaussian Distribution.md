# Gaussian Distribution

## Univariate Normal and Log-Normal
### Univariate Normal

\begin{align}
	\phi'(x) &= -x\phi(x)\\
	\int \Phi(x) dx &= x\Phi(x)+\phi(x)
\end{align}

## Bivariate Normal and Multivariate Normal
### Bivariate Normal
Suppose two random Gaussian random variables:

\begin{align*}
	X \sim \NN(\mu_X, \sigma_X^2)\\
	Y \sim \NN(\mu_Y, \sigma_Y^2)\\
\end{align*}

with correlation $\rho$. Then the conditionals can be worked out as follows. Let

\begin{align*}
	X &\equiv \mu_X + \sigma_X Z_1\\
	Y &\equiv \mu_Y + \sigma_Y \left(\rho Z_1 + \sqrt{1-\rho^2}Z_2\right)
\end{align*}

where $Z_1$ and $Z_2$ are independent univariate normal random variables, and the conditional random variable $Y|X$ can be written as:

\begin{align*}
	Y|X = \mu_Y + \sigma_Y\left(\rho \frac{X-\mu_X}{\sigma_X} + \sqrt{1 - \rho^2}Z_2\right)
\end{align*}

whose expectation and variance are:

\begin{align*}
	\EEE[Y|X] &= \mu_Y + \rho\left(\frac{X-\mu_X}{\sigma_X}\right) \sigma_Y\\
	\mbox{Var}[Y|X] &= \sigma_Y^2 (1 - \rho^2)
\end{align*}

By symmetry we can write out $X|Y$ and its expectation and variance.

### Multivariate Gaussian

\begin{align}
	f(\x|\bmu,\bSigma) = \frac{1}{\sqrt{2\pi|\bSigma|}} \exp\left\{-\frac{1}{2}(\x-\bmu)^T\bSigma^{-1}(\x-\bmu)\right\}
\end{align}

Using the technique of `completing the square', we have

\begin{align}
	f(\x_1|\x_2) &= \frac{f(\x_1,\x_2)}{f(\x_2)}\\
	&= \frac{1/\sqrt{2\pi|\bSigma|}\exp\left\{-\frac{1}{2}(\x-\bmu)^T\bSigma^{-1}(\x-\bmu)\right\}}{1/\sqrt{2\pi|\bSigma_{22}|}\exp\left\{-\frac{1}{2}(\x_2-\bmu)^T\bSigma_{22}^{-1}(\x_2-\bmu)\right\}}\\
	&= C \cdot \exp\left\{-\frac{1}{2}(\x-\bmu)^T\bSigma^{-1}(\x-\bmu)\right\}\\
	&= C \cdot \exp\left\{-\frac{1}{2}[(\x_1-\bmu_1)^T\bLambda_{11}(\x_1-\bmu_1)+(\x_1-\bmu_1)^T\bLambda_{12}(\x_2-\bmu_2)+(\x_2-\bmu_2)^T\bLambda_{21}(\x_1-\bmu_1)]\right\}\\
	&= C \cdot \exp\left\{-\frac{1}{2}\x_1^T\bLambda_{11}\x_1 + \x_1^T[\bLambda_{11}\bmu_1 - \bLambda_{12}(\x_2-\bmu_2)]\right\}	
\end{align}

Hence

\begin{align}
	\bSigma_{1|2} &= \bLambda_{11}^{-1}\\
	\bmu_{1|2} &= \bmu_1 - \bLambda_{11}^{-1}\bLambda_{12}(\x_2-\bmu_2)
\end{align}

or

\begin{align}
	\bSigma_{1|2} &= \bSigma_{11} - \bSigma_{12}\bSigma_{22}^{-1}\bSigma_{21}\\
	\bmu_{1|2} &= \bmu_1 + \bSigma_{12}\bSigma_{22}^{-1}(\x_2-\bmu_2)
\end{align}


[http://www.cs.ubc.ca/~murphyk/Papers/bayesGauss.pdf Conjugate analysis of Gaussian]


- It is incorrect to simply say: "Linear combination of normals are norml." The important premise is they need to be joint normal first.
- Suppose $\phi(x)$ is the pdf of a standard normal, then the derivatives follow: $x\Phi(x) + \phi(x) \to \Phi(x) \to \phi(x) \to -x\phi(x)$.
- The moment generating function of a normal random variable with mean $\mu$ and variance $\sigma^2$ is $e^{\mu + \frac 12 \sigma^2t^2}$.
- If a normal random variable $X$ has mean $\mu$ and variance $\sigma^2$, then the lognormal random variable $\exp(X)$ has mean $\exp(\mu + \frac 12 \sigma^2)$.

[https://normaldeviate.wordpress.com/ Normal Deviate]



- [http://www.math.uah.edu/stat/index.html A good review of probability]
- [http://www.maths.cam.ac.uk/postgrad/mphil/st-pastpapers/ Cambridge past papers]