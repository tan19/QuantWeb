# Brownian Motion

The Ito isometry states:
\begin{align}
	\EEE\left[\left(\int_0^T X_t dW_t \right)^2\right] = \EEE\left[\int_0^T X_t^2 dt\right]
\end{align}
where $X_t$ can be an Ito process or a ``regular'' stochastic process.

\section{Integrated Brownian Motion: $\int_0^t B_s ds$}
The integral
\begin{align}
	\int_0^t B_s ds
\end{align}
is called \emph{integrated Brownian motion}\index{integrated Brownian motion}, which is a stochastic process. For each path $\omega$, $B_s(\omega)$ is a continuous function, and thus the integral $\int_a^b B_s(\omega) ds$ is well defined by the Riemann sum:
\begin{align*}
	I^{(n)}(\omega) = \sum_{k=1}^n B_{t_k^*}(\omega)(t_k - t_{k-1})
\end{align*}
where $t_k^* \in [t_{k-1}, t_k]$ is an arbitrary point in the interval. The integral is defined as the limit of the Riemann sum.  The mean function is 
\begin{align*}
	\EEE[I_t] = \EEE\left[\int_0^t B_s ds\right] = \int_0^t \EEE[B_s] ds = 0
\end{align*}
and covariance function is
\begin{align*}
	\mbox{Cov}(I_s, I_t) &= \EEE[I_sI_t] = \EEE\left( \int_0^s B_x dx \int_0^t B_y dy \right)\\
	& = \int_0^s \int_0^t \EEE[B_xB_y] dy dx\\
	& = \int_0^s \int_0^t \min(x,y) dy dx \\
	& = \int_0^s\int_0^x y dy dx + \int_0^s \int_x^t x dy dx \\
	& = \frac{s^3}{6} + \left(\frac{ts^2}{2} - \frac{s^3}{3}\right) \\
	& = \frac{3ts^2 - s^3}{6}
\end{align*}
Particularly, letting $s=t$ we obtain
\begin{align*}
	\mbox{Var}(I_t) = \frac{t^3}{3}.
\end{align*}
Hence, the integrated Brownian motion is a Gaussian process:
\begin{align*}
	\int_0^t B_s ds \sim \NN\left(0, \frac{t^3}{3}\right)
\end{align*}
with covariance function $cov(s,t) = (3ts^2-s^3)/6$.

\subsection{Stochastic Integral: $\int_0^t g(s) dB_s$}
\begin{align*}
	\int_0^t g(s) dB_s \sim \NN\left(0, \int_0^t g^s(s) ds \right)
\end{align*}
with covariance function
\begin{align*}
	\mbox{Cov}(I_s, I_t) = \EEE\left(\int_0^s g(x)dB_x \int_0^t g(y)dB_y\right) = \int_0^s g^2(x) dx.
\end{align*}
The integral also satisfies integration-by-parts:
\begin{align}
	\int_0^t g(s) dB_s = g(t) B_t - \int_0^t B_s g'(s) ds.
\end{align}

\subsection{Ito Integral: $\int_0^t X_s dB_s$}
It would seem reasonable to define that:
\begin{align*}
	I(t) = \int_0^t X_s dB_s = \lim_{n \to \infty} \sum_{k=1}^n X_{t_k^*}(B_{t_k} - B_{t_{k-1}})
\end{align*}
However, the choice of point $t_k^*$ in this case. In Ito integral, $t_k^*$ is taken to be the left endpoint of the subinterval $[t_{k-1}, t_k]$. That is,
\begin{align}
	I(t) = \int_0^t X_s dB_s = \lim_{n \to \infty} \sum_{k=1}^n X_{t_{k-1}}(B_{t_k} - B_{t_{k-1}})
\end{align}
Ito integrals are martingales. Ito integral does not satisfy the usual integration-by-parts formula, but we can use Ito's lemma to compute the integral.

A stochastic process is a martingale if and only if there is no drift term in the process.