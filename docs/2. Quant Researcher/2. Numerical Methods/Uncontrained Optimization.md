# Unconstrained Optimization
\subsubsection{Univariate Problems (Bisubsection, Newton, Secant Methods)}
Note that, $\min(f(x)))$ can be converted to the root-finding $f'(x) = 0$ problem.

\subsubsection{Bisubsection Method}
\index{bisubsection method}
Suppose $g'$ is continuous on $[a_0,b_0]$ and $g'(a_0)g'(b_0) \le 0$, then the Intermediate Value Theorem implies that there exists at least one $x^*$ for which $g'(x^*) = 0$ and hence $x^*$ is a local optimum of $g$. To find this local optimum, the Bisubsection Method systematically halves the interval at each iteration, by checking the product of $g'$.

The updating equations are
\begin{align}
[a_{t+1},b_{t+1}] =
	\begin{cases}
		[a_t,x^{(t)}], & \mbox{if } g'(a_t)g'(x^{t}) \le 0 \\
		[x^{(t)},b_t], & \mbox{if } g'(a_t)g'(x^{t}) > 0
	\end{cases}
\end{align}
and $x^{t+1} = \frac{a_{t+1}+b_{t+1}}{2}$.

\subsubsection{Newton's Method}
\index{Newton's method}
Suppose $g$ twice differentiable. At iteration $t$, Newton's method approximates $g'(x^*)$ by the linear Taylor series expansion:
\begin{align}
	g'(x^*) = g'(x^{(t)}) + (x^*-x^{(t)})(g''(x^{(t)}))
\end{align}
which gives us
\begin{align}
	x^* = x - \frac{g'(x^{(t)})}{g''(x^{(t)})}
\end{align}

\subsubsection{The Secant Method}
\index{secant method}
Recall that the Newton's method requires the function's derivative, which is always available. The secant method approximates the derivative with difference. It works as follows:
\begin{itemize}
  \item Start with two approximations $x_0$ and $x_1$.
  \item Compute the $(k+1)$th approximation with
  \begin{align}
    x_{k+1} & \equiv x_k - f(x_k)/\frac{f(x_k) - f(x_{k-1})}{x_k - x_{k-1}}
  \end{align}
  \item The convergence rate of the secant method is $1.618$.

\end{itemize}

\subsection{Quasi-Newton Methods}