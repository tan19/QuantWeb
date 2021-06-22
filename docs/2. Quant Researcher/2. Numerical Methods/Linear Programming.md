# Linear Programming
\subsection{Simplex Algorithm}


\subsection{Linear Programming}

\subsubsection{Standard Form of Linear Programming(LP)}
\begin{align}
	\mbox{min} ~~~ &\c^T\x \nonumber\\
	\mbox{s.t.} ~~~ &\A\x = \b \nonumber\\
	&\x \ge 0
\end{align}

\subsubsection{Simple Method}
Partition $\x$ into \emph{basic variables} and \emph{non-basic variables} $\x = [\x_B, \x_N]^T$, and rewrite $\A\x = \b$ as:
\begin{align}
	\A_B \x_B + \A_N \x_N = \b
\end{align}
Since
\begin{align}
	\x_B = \A_B^{-1}\b - \sum_{j \in N} \A_B^{-1}\A_jx_j
\end{align}
current basic feasible solution is $\x_B = \A_B^{-1}\b$. A unit change of $x_j$ would change the basic variable $x_i$ by:
\begin{align}
	x_{i \in B} = (\A_B^{-1}\b)_i - (\A_B^{-1}\A_j)_i x_j
\end{align}
Enforcing all variables are non-negative, we have
\begin{align}
	x_j \le \frac{(\A_B^{-1}\b)_i}{(\A_B^{-1}\A_j)_i}
\end{align}
This suggest the following rule:
\begin{align}
	x_j = min\left\{ \frac{(\A_B^{-1}\b)_i}{(\A_B^{-1}\A_j)_i}: i \in B ~~ s.t. ~~ (\A_B^{-1}\A_j)_i > 0\right\}
\end{align}


%https://www2.isye.gatech.edu/~sahmed/isye3133b/simplex



\subsubsection{Basic Properties of Linear Programs}
\deff{
	Let $A$ be an $m \times n$ matrix and $B$ be any {\em{nonsingular}} $m \times m$ sub-matrix made up of columns of $A$. Then, if all $n-m$ components of $x$ not associated with columns of $B$ are set equal to zero, the solution to the resulting set of equations is said to be a {\em{basic solution}} with respect to the basis $B$. The components of $x$ associated with columns of $B$ are called {\em{basic variables}}.
}

\deff{
	If one or more of the basic variables in a basic solution has value zero, that solution is said to be a {\em{degenerate basic solution}}.
}

\deff{
	A feasible solution that is also basic is said to be a {\em{basic feasible solution}}; if this solution is also a degenerate basic solution, it is called a {\em{degenerate basic feasible solution}}.
}

\thm{
	Fundamental Theorem of Linear Programming. Given a linear program in standard form. i) if there is a feasible solution, there is a basic feasible solution; ii) if there is an optimal feasible solution, there is an optimal basic feasible solution.
}


Simplex algorithm has an exponential worst-case complexity, but polynomial average-case complexity.