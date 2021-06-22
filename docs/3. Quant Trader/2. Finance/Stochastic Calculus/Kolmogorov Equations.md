# Kolmogorov Forward and Backward Equations
Start with the SDE defined by

\begin{align}
  d X_t & = \mu(X_t)d t + \sigma(X_t) d W_t.
\end{align}

The transition density $\rho(x,t|y,s)$ is defined by

\begin{align}
  \int_A \rho(x,t|y,s) d x & = \PPP[X_{t+s} \in A | X_s = y] = \PPP[X_t \in A | X_0 = y].
\end{align}

The density $\rho(x, t | y, s)$ is time-invariance since $\mu(X_t)$ and $\sigma(X_t)$ are assumed to be time invariance, and consequently, that $X_t$ is assumed to be stationary.

Consider a differentiable function $V(X_t, t) = V(x, t)$ with $V(X_t, t) = 0$ for $t \notin (0,T)$. Then by It\^o's lemma

\begin{align}
  d V & = \left[\frac{\partial V}{\partial t} + \mu\frac{\partial V}{\partial x} + \frac{1}{2}\sigma^2 \frac{\partial^2 V}{\partial x^2}\right]d t + \left[\sigma \frac{\partial V}{\partial x}\right]d W_t
\end{align}

so that

\begin{align}
  V(X_T, T) - V(X_0, 0) & = \int_0^T \left[\frac{\partial V}{\partial t} + \mu\frac{\partial V}{\partial x} + \frac{1}{2}\sigma^2 \frac{\partial^2 V}{\partial x^2}\right]d t + \int_0^T \left[\sigma \frac{\partial V}{\partial x}\right]d W_t
\end{align}

where $\mu = \mu(X_t)$ and $\sigma = \sigma(X_t)$ for notational convenience. Take the conditional expectation of both sides of the above equation given $X_0$

\begin{align*}
    &\EEE[V(X_T, T) - V(X_0, 0)] \\
    & = \EEE\left[\int_0^T \left[\frac{\partial V}{\partial t} + \mu\frac{\partial V}{\partial x} + \frac{1}{2}\sigma^2 \frac{\partial^2 V}{\partial x^2}\right]d t\right] \\
    &= \int_\RRR \left\{\int_0^T \left[\frac{\partial V}{\partial t} + \mu\frac{\partial V}{\partial x} + \frac{1}{2}\sigma^2 \frac{\partial^2 V}{\partial x^2}\right]d t\right\}\rho(x,t|y,s) d x
\end{align*}

We write this equation as the sum of three integrals:

\begin{align}
    I_1 &\equiv \int_\RRR \int_0^T \rho \frac{\partial V}{\partial t} d t d x \\
    I_2 &\equiv \int_\RRR \int_0^T \rho \mu \frac{\partial V}{\partial x} d t d x \\
    I_3 &\equiv \frac{1}{2}\int_\RRR \int_0^T \rho \sigma^2 \frac{\partial^2 V}{\partial x^2} d t d x
\end{align}

The objective of the derivation is to apply integration by parts to get rid of the derivatives of $V$.

## Evaluation of the Integrals
The trick is that $I_1$ is evaluated using integration by parts on $t$, while $I_2$ and $I_3$ are each evaluated using integration by parts on $x$.

\paragraph{Evaluation of $I_1$}

\begin{align}
  I_1 & = \int_\RRR \left[\int_0^T \rho \frac{\partial V}{\partial t} d t \right] d x = \int_\RRR \left[\rho V |_0^T -\int_0^T \frac{\partial \rho}{\partial t} V d t\right]d x  = -\int_\RRR \int_0^T \frac{\partial \rho}{\partial t} V d t d x
\end{align}

where we have used the fact that at boundaries $0$ and $T$, $V = 0$.

\paragraph{Evaluation of $I_2$}

\begin{align}
  I_2 & = \int_0^T \left[\int_\RRR \rho \mu \frac{\partial V}{\partial x} d x \right] d t = \int_0^T\left[\rho\mu V|_\RRR - \int_\RRR V \frac{\partial(\rho\mu)}{\partial x} d x\right] d t = -\int_\RRR \int_0^T \frac{\partial (\rho \mu)}{\partial x} V d t d x
\end{align}

where again we have used the fact that $\rho(X_t = \pm \infty, t | X_0, 0) = 0$.

\paragraph{Evaluation of $I_3$}

\begin{align}
  I_3 & = \frac{1}{2} \int_0^T \left[\int_\RRR \rho\sigma^2 \frac{\partial^2 V}{\partial x^2} d x\right] d t = \frac{1}{2}\int_0^T \left[\rho\sigma^2\frac{\partial V}{\partial x}\bigg\vert_\RRR - \int_\RRR \frac{\partial V}{\partial x} \frac{\partial (\rho \sigma^2)}{\partial x} d x\right] d t \nonumber\\
  &= -\frac{1}{2}\int_0^T \left[\int_\RRR \frac{\partial V}{\partial x}\frac{\partial(\rho\sigma^2)}{\partial x} d x\right] d t = -\frac{1}{2}\int_0^T \left[\frac{\partial(\rho \sigma^2)}{\partial x}V \bigg\vert_\RRR - \int_\RRR \frac{\partial^2 (\rho\sigma^2)}{\partial x^2} V d x\right] d t \nonumber\\
  &= \frac{1}{2}\int_\RRR\int_0^T \frac{\partial^2(\rho\sigma^2)}{\partial x^2}V d t d x
\end{align}

Since $\EEE[V(X_T,T) - V(X_0,0)] \equiv 0$, we have

\begin{align}
   \int_\RRR \int_0^T \frac{\partial \rho}{\partial t} V d t d x + \int_\RRR \int_0^T \frac{\partial (\rho \mu)}{\partial x} V d t d x = \frac{1}{2}\int_\RRR\int_0^T \frac{\partial^2(\rho\sigma^2)}{\partial x^2}V d t d x
\end{align}

and

\begin{align}
  \frac{\partial \rho}{\partial t} = - \frac{\partial(\rho \mu)}{\partial x} + \frac{1}{2} \frac{\partial^2(\rho \sigma^2)}{\partial x^2}
\end{align}

Suppose the dynamics of $X_t$ is instead specified by a geometric Brownian motion,

\begin{align}
  d X_t & \mu(X_t, t)X_t d t + \sigma(X_t, t)X_t d W_t
\end{align}

Then

\begin{align}\label{Fokker--Planck Forward Equation}
  \frac{\partial \rho}{\partial t} = - \frac{\partial(\rho \mu x)}{\partial x} + \frac{1}{2} \frac{\partial^2(\rho \sigma^2 x^2)}{\partial x^2}
\end{align}

This is the Fokker--Planck forward equation.