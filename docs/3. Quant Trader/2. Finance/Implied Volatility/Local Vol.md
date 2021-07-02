\begin{align}
	C(K, T; S_0) &= \int_K^\infty \phi(S_T, T; S_0) [S_T - K] \dd S_T
\end{align}
Differentiating this twice with respect to $K$ to obtain
\begin{align}
	\frac{\partial C^2}{\partial K^2} &= \frac{1}{\partial K^2} \left[\int_K^\infty \phi(S_T, T; S_0) S_T \dd S_T  - K \int_K^\infty \phi(S_T, T; S_0) \dd S_T \right] \nonumber \\
	&= \frac{1}{\partial K} \left[- K \phi(K, T; S_0) - \int_K^\infty \phi(S_T, T; S_0) \dd S_T + K \phi(K, T; S_0) \right] \nonumber \\
	&= - \frac{1}{\partial K} \left[ \int_K^\infty \phi(S_T, T; S_0) \dd S_T \right] \nonumber \\
    &= \phi(K, T; S_0)
\end{align}
and differentiating this with respect to $T$ we obtain
\begin{align}
  \frac{\partial C}{\partial T} & = \int_{K}^{\infty} \left[\frac{\partial}{\partial T} \phi(S_T, T;S_0) \right] (S_T - K) \dd S_T \nonumber \\
\end{align}