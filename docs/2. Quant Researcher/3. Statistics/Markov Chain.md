\deff{
The \emph{Markov property} is defined by the requirement that
\begin{align}
	P(X_{n+1}=x_{n+1} \vert X_0=x_0,\cdots,X_n=x_n) = P(X_{n+1}=x_{n+1} \vert X_n=x_n)
\end{align}
}
\deff{
	The conditional probabilities $P(X_{n+1}=y \vert X_n=x)$ are called the \emph{transition probabilities} of the chain.
}

\deff{
	We say a Markov chain has \emph{stationary transition probabilities} if the transition probabilities $P(X_{n+1}=y \vert X_n=x)$ is independent of the time $n$.
}

From now on, when we say that $X_n, n \ge 0$ forms a Markov chain, we mean that these random variables satisfy the Markov property and have stationary transition probabilities.

\deff{
	A state $a$ of a Markov chain is called an \emph{absorbing state} if $P(a,a) = 1$ or, equivalently, if $P(a,y) = 0$ for all $y \ne a$.
}