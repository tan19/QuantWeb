\input{Uniform}
\input{Normal}

\input{Probaility_Space}
\input{Random_Variables}

\section{Other Distributions}
\subsection{Poisson Distribution}
Poisson limit theorem\index{Poisson limit theorem} states that when $n$ goes to infinity and $np$ constant, the binomial distribution converges to the Poisson distribution.


\subsection{Bernoulli, Binomial, and Geometric Distributions}

\subsection{Exponential Distribution}
An \index{exponential distribution}exponential distribution can be written as a $\chi^2$ distribution with two degrees of freedom.




\subsection{Beta and Gamma Distributions}


\paragraph{Reference}
1. P. A. Bromiley, Products and Convolutions of Gaussian Probability Density Functions, 2014.
2. Peter Ahrendt, The Multivariate Gaussian Probability Distribution, 2005.
3. Sam Roweis, Gaussian Identities, 1999. 

\subsection{Laplace and Exponential}
The Laplace distribution can be written as an infinite mixture of Gaussians with variance $w$ distribution according to an exponential distribution. An exponential distribution can be written as a $\chi^2$ distribution with two degrees of freedom.


\subsection{Gamma Function and Beta Function}
The Gamma function\index{Gamma function} is defined for all complex numbers except the non-positive integers. For complex numbers with a positive real part, it is defined via an improper integral that converges:
\begin{equation}
	\Gamma(z) = \int_0^\infty e^{-t} t^{z-1} dt
\end{equation}
For all positive numbers $z$,
\begin{equation}
	\Gamma(z) = (z-1)\Gamma(z-1)
\end{equation}
and in particular, if $n$ is a positive integer:
\begin{equation}
	\Gamma(n) = (n-1)!
\end{equation}
Note, the gamma function shifts the normal definition of factorial by 1.

The beta function\index{Beta function} is defined by
\begin{equation}
	\beta(x,y) = \int_0^1 t^{x-1} (1-t)^{y-1} dt
\end{equation}
for $Re(x), Re(y) > 0$. It can be also written as
\begin{equation}
	\beta(x,y) = \frac{\Gamma(x) \Gamma(y)}{\Gamma(x+y)}
\end{equation}

\subsection{Dirichlet Distribution}
\index{Dirichlet distribution}\label{concept: Dirichlet Distribution}
The Dirichlet distribution of order $K \ge 2$ with parameters $\alpha_1, \dots, \alpha_K > 0$ has a probability density function with respect to Lebesgue measure on the Euclidean space $\RR^{K-1}$ given by
\begin{equation}
	f(x_1, \dots, x_{K-1}; \alpha_1, \dots, \alpha_K) = \frac{1}{B(\balpha)} \prod^K_{i=1} x_i^{\alpha_i-1}
\end{equation}
for all $x_1, \dots, x_K > 0$ and $x_1 + \dots + x_K = 1$. The density is zero outside this open\footnote{``Open'' here means none of the $x_i$'s can be 1, actually $x_i \in (0,1)$.} $(K-1)$-dimensional simplex.

The normalizing constant is the multinomial beta function, which can be expressed in terms of the gamma function:
\begin{equation}
	B(\balpha) = \frac{\prod_{i=1}^K \Gamma(\alpha_i)}{\Gamma(\sum_{i=1}^K \alpha_i)}, \mbox{ where } \balpha=(\alpha_1, \dots, \alpha_K)
\end{equation}

\subsection{Exponential Family}
\begin{eqnarray}
	f(y|\theta,\phi) & = & \exp \left\{ \frac{y\theta-b(\theta)}{a(\phi)}+c(y,\phi) \right\} \\
	E(y) & = & b'(\theta) \\
	Var(y) & = & b''(\theta)a(\phi)
\end{eqnarray}