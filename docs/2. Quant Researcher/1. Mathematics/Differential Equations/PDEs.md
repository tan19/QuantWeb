# PDEs

## The Heat Equation
The heat equation is the following PDE to model the temperature of a 1-D bar $[0,x]$, 
\begin{align}
	c(x)\rho(x)\frac{\partial u}{\partial t} = -\frac{\partial \phi}{\partial x} + Q(x,t)
\end{align}
where
\begin{enumerate}
	\item $u(x,t)$: Temperature at any point $x$ and any time $t$.
	\item $c(x) > 0$: Specific heat capacity at $x$, which is the amount of heat energy that takes to raise one unit of mass of the material by one unit of temperature.
	\item $\rho(x)$: Mass density.
	\item $\phi(x,t)$: Heat flux. If $\phi > 0$ then heat energy is flowing to the right; otherwise, it flows to the left.
	\item $Q(x,t)$: heat energy into or out from the system at $x$ and $t$.
\end{enumerate}
By Fourier's law
\begin{align*}
	\phi(x,t) = -K_0(x)\frac{\partial u}{\partial x}
\end{align*}
where $K_0(x)$ is the thermal conductivity. Now the heat equation becomes:
\begin{align*}
	c(x)\rho(x)\frac{\partial u}{\partial t} = -\frac{\partial}{\partial x}\left(K_0(x) \frac{\partial u}{\partial x}\right) + Q(x,t)	
\end{align*}
Let's further assume the bar is uniform and define the thermal diffusivity as
\begin{align}
	k = \frac{K_0}{c\rho}
\end{align}
The heat equation is then,
\begin{align}
	\frac{\partial u}{\partial t} = k\frac{\partial^2 u}{\partial x^2} + \frac{Q(x,t)}{c\rho}
\end{align}

## The Heat Equation
The heat equation is the following PDE to model the temperature of a 1-D bar $[0,x]$, 

\begin{align*}
	c(x)\rho(x)\frac{\partial u}{\partial t} = -\frac{\partial \phi}{\partial x} + Q(x,t)
\end{align*}

where

- $u(x,t)$: Temperature at any point $x$ and any time $t$.
- $c(x) > 0$: Specific heat capacity at $x$, which is the amount of heat energy that takes to raise one unit of mass of the material by one unit of temperature.
- $\rho(x)$: Mass density.
- $\phi(x,t)$: Heat flux. If $\phi > 0$ then heat energy is flowing to the right; otherwise, it flows to the left.
- $Q(x,t)$: heat energy into or out from the system at $x$ and $t$.

By Fourier's law

\begin{align*}
	\phi(x,t) = -K_0(x)\frac{\partial u}{\partial x}
\end{align*}

where $K_0(x)$ is the thermal conductivity. Now the heat equation becomes:

\begin{align*}
	c(x)\rho(x)\frac{\partial u}{\partial t} = -\frac{\partial}{\partial x}\left(K_0(x) \frac{\partial u}{\partial x}\right) + Q(x,t)	
\end{align*}

Let's further assume the bar is uniform and define the thermal diffusivity as

\begin{align*}
	k = \frac{K_0}{c\rho}
\end{align*}

The heat equation is then,

\begin{align*}
	\frac{\partial u}{\partial t} = k\frac{\partial^2 u}{\partial x^2} + \frac{Q(x,t)}{c\rho}
\end{align*}