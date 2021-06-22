# Monte Carlo Methods

## Inverse Transform Sampling

Suppose $z$ is uniform random numbers, i.e., $p_Z(z) = 1$, and we want to sample $y$ from $p_Y(y)$. Since
\(
p_Y(y) = p_Z(z)\left|\frac{d z}{d y}\right| = \left|\frac{d z}{d y}\right|
\)
so
\(
z = h(y) \equiv \int_{-\infty}^y p_Y(u) d u
\)
and
\(
y = h^{-1}(z)
\)

This means: we can sample $z$ first, and transform it to $y$ through $y = h^{-1}(z)$.

## Inverse Transform Sampling
## Importance Sampling
In essence, importance sampling is a change of numeraire:
\begin{align*}
	\EEE[f(X)] = \int f(x) p(x) dx = \int f(x) \frac{p(x)}{q(x)} q(x) dx
\end{align*}
where $p(x)$ is the nominal distribution, $q(x)$ is the importance distribution and $p(x)/q(x)$ is the likelihood ratio.

## Rejection Sampling
Suppose we want to sample from $P(X)$ by utilizing a {\em{proposal distribution}} $Q(X)$, from which we can take samples easier. Let $C = \sup \left\{\frac{P(x)}{Q(x)}, \forall x\right\}$, so $\frac{P(x)}{CQ(x)} \le 1, \forall x$.

We propose a new value $x'$ from $Q(X)$ and accept this new value with probability
\begin{align}
	A(x'|x) = \frac{P(x')}{CQ(x')} \label{rejection sampling ratio}
\end{align}
This is called the {\em{rejection sampling}} method.

\rmk{
	If we plug in Equation \ref{rejection sampling ratio} into Equation \ref{detailed balance equation}, then
	\begin{align}
			LHS = P(x)Q(x'|x)\frac{P(x')}{CQ(x')} = P(x)Q(x')\frac{P(x')}{CQ(x')} = \frac{1}{C}P(x)P(x')\\
			RHS = P(x')Q(x|x')\frac{P(x)}{CQ(x)} = P(x')Q(x)\frac{P(x)}{CQ(x)} = \frac{1}{C}P(x')P(x)
	\end{align}
	which shows that the rejection sampling ratio in Equation \ref{rejection sampling ratio} is a special solution to the detailed balance equation.
}

## Markov Chain Monte Carlo Methods
### Introduction
This note is based on Peter Orbanz's BNP notes:
\vspace*{5mm}
\\
\url{http://people.stat.sc.edu/hansont/stat740/MCMC.pdf}

### Notation
Bold upper case letters represent matrices, e.g., $\X, \Y, \Z, \bTheta$. Bold lower case letters represent vector-valued random variables and their realizations (we do not distinguish between the two), e.g., $\x, \y, \z, \btheta$. Curly upper case letters represent spaces (i.e., possible values) of random variables, e.g., $\XX, \YY, \ZZ, \Theta$.

### Introduction
Markov chain Monte Carlo (MCMC) methods can be used to draw random samples from a target distribution $p$. It is particularly useful in Bayesian data analysis, due to the difficulties of evaluating the denominator in the Bayes' formula, a.k.a. the partition function.

\begin{enumerate}
\item A discrete-time, discrete-space Markov chain is $\dual{X}{0}, \dual{X}{1}, \dots$ where $\dual{X}{t}$ obeys the Markov property that
\begin{align}
P\left[\dual{X}{t} \bigg| \dual{x}{0},\dots,\dual{x}{t-1}\right] = P\left[\dual{X}{t} \bigg| \dual{x}{t-1} \right]
\end{align}
\item A Markov chain is {\em{irreducible}} if any state $j$ can be reached from any state $i$ in a finite number of steps for all $i$ and $j$.
\item A Markov chain is {\em{periodic}} if it can visit certain portions of the state space only at regularly spaced intervals.
\end{enumerate}

The MCMC sampling strategy is to construct an irreducible, aperiodic Markov chain for which the stationary distribution equals the target distribution $p$.

Suppose we want to draw samples from $p(x)$. The M-H algorithm proceeds as follows: Draw a candidate state, $x^*$, according to the proposal distribution $g(x^*|x)$, by computing the acceptance probability
\begin{align}
\alpha(x^*, x) = \min\left[1, a(x^*,x) = \frac{p(x^*)g(x|x^*)}{p(x)g(x^*|x)}\right].
\end{align}
where $a(x^*,x)$ is called the M-H ratio, and $\alpha(x^*,x)$ the probability of move. With {\em{probability of move}} $\alpha(x^*, x)$, set the new state, $x'$ to $x^*$. Otherwise, let $x'$ be the same as $x$. The intuition behind the probability of move is that, if the detailed balance condition is satisfied: $p(x)g(x^*|x) = p(x^*)g(x|x^*)$, then we are done, otherwise, the denominator $g(x^*|x)p(x)$ is proportional to the probability of moving from $x$ to $x^*$, if it is large then the numerator, which is proportional to the probability of moving from $x^*$ to $x$, then we should penalize it.

The sampled sequence may contain duplicated copies of data points, the frequency of which is used to correct the difference between the proposal distribution and the target one. A well chosen proposal distribution produces candidate values that efficiently cover the support of the target distribution.

### Independence Chains
If we choose the proposal distribution to be
\begin{align}
g(x^*|x) = g(x^*)
\end{align}
then the M-H ratio is
\begin{align}
a(x^*, x) = \frac{p(x^*)g(x)}{p(x)g(x^*)}.
\end{align}

For example, in a Bayesian framework, if the target distribution is the posterior $p(\theta|\y)$, where $\y$ is the data. Then, if we choose the proposal distribution to be the prior $p(\theta)$
\begin{align}
g(\theta^*|\theta) = p(\theta^*)
\end{align}
then the M-H ratio is
\begin{align}
a(\theta^*, \theta | \y) &= \frac{p(\theta^*|\y)p(\theta)}{p(\theta|\y)p(\theta^*)} = \frac{p(\y|\theta^*)p(\theta^*)/p(\y)}{p(\y|\theta)p(\theta)/p(\y)}\frac{p(\theta)}{p(\theta^*)} = \frac{p(\y|\theta^*)}{p(\y|\theta)}
\end{align}
So if the proposal distribution is the prior, the M-H ratio is the likelihood ratio.

### Random walk chains
Let $x^*$ be generated by setting
\begin{align}
x^* = x + \epsilon,\quad \epsilon \sim h(\epsilon)
\end{align}
or equivalently,
\begin{align}
g(x^*|x) = h(x^* - x)
\end{align}
For example, $h$ can be the uniform, or the standard normal, or the Student's $t$ distribution.


### Markov Chains
\deff{
  A \emph{Markov chain} is a collection of random variables $\{X^{(0)},X^{(1)},X^{(2)},\cdots\}$, satisfying the Markov property
  \begin{align}
    P(X^{(n+1)} \vert X^{(n)}, \cdots, X^{(0)}) = P(X^{(n+1)} \vert X^{(n)})
  \end{align}
}

\deff{
  A distribution over the states of a homogeneous\footnote{The transition matrix is invariant of time.} Markov chain is \emph{invariant} (or \emph{stationary}) with respect to transition probabilities $T$ if
  \begin{align}
    \mathbf{\pi} = \mathbf{\pi} T
  \end{align}
}
A Markov chain can have more than one invariant distribution. If $T$ is the identity matrix, for example, then any distribution is invariant.

We are interested in designing a Markov chain (its initial probabilities and transition matrix) for which the distribution we wish to sample from, given by $\mathbf{\pi}$, is invariant. Hence, if we run the chain for sufficient time, it will converge to $\mathbf{\pi}$, and then we can sample from it and compute the quantities desired.

\emph{Why do we need detailed balance?}
\deff{
  Often, we will use \emph{time reversible} homogeneous Markov chains that satisfy the more restrictive condition of \emph{detailed balance}:
  \begin{align}
    \pi(x)T(x,x') = \pi(x')T(x',x) \label{detailed balance definition}
  \end{align}
}

\rmk{
One might be tempted to conclude that the detailed balance condition always holds, since
\begin{align}
	\pi(x)T(x,x') = P(x)P(x'|x) = P(x',x)\\
	\pi(x')T(x',x) = P(x')P(x|x') = P(x,x')
\end{align}
and $P(x',x) = P(x,x')$.

The problem here is, $x$ and $x'$ denote different values, not different random variables. That is, in the argument of $\pi(\cdot)$ or in the first argument of $T(\cdot,\cdot)$, it is the value of the random variable $X_0$ (stochastic process at current time); and in the second argument of $T(\cdot,\cdot)$, it is the value of the random variable $X_1$ (stochastic process at the next time step). For example, we may have

\begin{align}
	\pi(X_0=1)T(X_0=1,X_1=2) = P(X_0=1)P(X_1=2|X_0=1) = P(X_1=2,X_0=1)
\end{align}

and

\begin{align}	
	\pi(X_0=2)T(X_0=2,X_1=1) = P(X_0=2)P(X_1=1|X_0=2) = P(X_1=1,X_0=2)
\end{align}
which are usually not the same. Here $x=1$ and $x'=2$.
}

Note, the detailed balance condition implies $\pi$ is an invariant distribution:
\begin{align}
	\sum_{i=1}^n \pi(x_i) T(x_i,x) = \sum_{i=1}^n \pi(x) T(x,x_i) = \pi(x) \sum_{i=1}^n T(x,x_i) = \pi(x)
\end{align}
It is possible for a distribution to be invariant without detailed balance holding. For example, the uniform distribution ($=1/3$) on the state space $\{0,1,2\}$ is invariant with respect to the homogeneous Markov chain with transition probabilities $T(0,1)=T(1,2)=T(2,0)=1$ and all others zero, but detailed balance does not hold.

\deff{
  A Markov chain is \emph{ergodic} (or \emph{irreducible}) if it is possible to go from every state to every state (not necessarily in one move).
}
\thm{
  Let $T$ be the transition matrix for a regular chain. Then as $n \to \infty$, the powers $T^n$ approach a limiting matrix $W$ with all rows the same vector $\w$. The vector $\w$ is a strictly positive probability vector (i.e., the components are all positive and they sum to one).
}

### Metropolis-Hastings Algorithm
Suppose we can evaluate a distribution $P(X)$, but lack of information about how to directly draw samples from it. We wish to construct a Markov chain, utilizing the detailed balance condition (Equation \ref{detailed balance definition}), such that the induced invariant distribution is nothing but $P(X)$.

Assume we can take a new sample $x'$ from $Q(x'|x)$, a known {\em{proposal distribution}} conditioned on the current state $x$ of the Markov chain, and then we accept this new value $x'$ based on a to-be-determined probability $A(x'|x)$. We define a Markov chain based on this procedure,
\begin{align}
	T(x,x') = Q(x'|x)A(x'|x)
\end{align}

If this Markov chain further satisfies the detailed balance condition (Equation \ref{detailed balance definition}),
\begin{align}
	P(x)Q(x'|x)A(x'|x) = P(x')Q(x|x')A(x|x') \label{detailed balance equation}
\end{align}
then we can take
\begin{align}
	A(x'|x) = \min \left\{ \frac{P(x')Q(x|x')}{P(x)Q(x'|x)}, 1 \right\} \label{hastings ratio}
\end{align}
The ratio in the ``$\min$'' function is known as the ``Hastings ratio'' (or acceptance ratio).

Now, running the chain for some sufficient time, we would obtain samples from the desired distribution $P(X)$, which is designed to be the same as the induced invariant distribution.

\rmk{
	The $A(x'|x)$ defined above satisfies the detailed balance condition, since
	\begin{align}
		P(x)Q(x'|x)A(x'|x) &= P(x)Q(x'|x) \min \left\{ \frac{P(x')Q(x|x')}{P(x)Q(x'|x)}, 1 \right\} \\ \nonumber
		&= \min \left\{ P(x')Q(x|x'), P(x)Q(x'|x) \right\}\\
		P(x')Q(x|x')A(x|x') &= P(x')Q(x|x') \min \left\{ \frac{P(x)Q(x'|x)}{P(x')Q(x|x')}, 1 \right\} \\ \nonumber
		&= \min \left\{ P(x)Q(x'|x), P(x')Q(x|x') \right\}
	\end{align}
	and $\min \left\{ P(x')Q(x|x'), P(x)Q(x'|x) \right\} = \min \left\{ P(x)Q(x'|x), P(x')Q(x|x') \right\}$.
}

## Metropolis Algorithm
In the Hastings ratio, if the proposal distribution is symmetric $Q(x|x') = Q(x'|x)$, such as a Gaussian distribution, then Equation \ref{hastings ratio} becomes

\begin{align}
	A(x'|x) = \min \left\{ \frac{P(x')Q(x|x')}{P(x)Q(x'|x)}, 1 \right\} = \min \left\{ \frac{P(x')}{P(x)}, 1 \right\}
\end{align}

this special case is called the ``Metropolis Algorithm''.

## Gibbs Sampling
Suppose we wish to sample a random vector $\X = (X_1,\cdots,X_n)$, and its full conditional distribution $Q(X_i|\X_{-i})$ is known, where $\X_{-i} = (X_1,\cdots,X_{i-1},X_{i+1},X_n)$. Then if we sample $X_i$ component-wise from $Q(\x'|\x) = Q(x_i'|\x_{-i})$, and bearing in mind that $\x'_{-i} = \x_{-i}$ when sample $x_i$, the Hastings ratio becomes,

\begin{align}
	\frac{P(\x')Q(\x|\x')}{P(\x)Q(\x'|\x)} &= \frac{P(x_i'|\x'_{-i})P(\x'_{-i})Q(x_i|\x'_{-i})}{P(x_i|\x_{-i})P(\x_{-i})Q(x_i'|\x_{-i})}\\
	&= \frac{P(x_i'|\x_{-i})P(\x_{-i})Q(x_i|\x_{-i})}{P(x_i|\x_{-i})P(\x_{-i})Q(x_i'|\x_{-i})}\\	
	&= 1
\end{align}

## Collapsed Gibbs Sampling

## Metropolis-Within-Gibbs
If not all full conditional probabilities are known or can be easily sampled from, we can sample those random variables with known conditional probabilities using the Gibbs algorithm, and others using Metropolis-Hastings algorithm. This is called {\em{Metropolis-Within-Gibbs}}.


## Gibbs sampler
Suppose it is easy to sample from the univariate conditional distributions:

\begin{align}
x_i | \x_{-i} \sim f(x_i | \x_{-i})
\end{align}

then the basic Gibbs sampler can be described as follows:

- Select starting values $\dual{x}{0}$ and set $t=0$.
- Generate, in turn for $i = 1, \dots, n$:

\begin{align}
\dual{x_i}{t+1} | \x_{-i}^{(t)} \sim f\left(x_1 | \x_{-i}^{(t)}\right).
\end{align}

- Increment $t$ and go to step 2.

A hybrid MCMC may contain different types of samplers. For example, The M-H within Gibbs algorithm is typically useful when the univariate conditional density for one or more elements is not available in closed form.

### Test for Convergence
- Burn-in.
- Run multiple chains, and if the within- and between-chain behaviors are similar, suggests that the chains are stationary. Gelman-Rubin statistic.
- Plot samples against time, or log-likelihood against time.
- Autocorrelation function (ACF) plot: lag versus correlation. Slow decay suggests poor mixing.
- Re-parameterize the model may help.
- Burn-in should be about $5000$ iterations, chain lengths should be about $100$ times the burn-in.
- Standard error should be less than $5\%$ of the standard deviation.

### Advanced MCMC methods
Slice sampling and other auxiliary variable methods, reversible jump MCMC, perfect sampling, Hit-and-run (choose a direction and then a distance to run), multi-try (choose from a set of candidates), Langevin M-H (random walk with drift) and etc.

### Slice sampling
Introduce an auxilary varialbe $u$, and if we can sample from $f(x,u) = f(x)f(u|x)$ then dropping $u$ and retain $x$ as desired. The slice sampling works as follows:

\begin{align}
\dual{u}{t+1} | \dual{x}{t} &\sim \text{Unif}\left(0, f\left(\dual{x}{t}\right)\right)\\
\dual{x}{t+1} | \dual{u}{t+1} &\sim \text{Unif}\left(x: f(x) \ge \dual{u}{t+1}\right)
\end{align}

It is particularly useful for multi-modal problems (but not for high dimensional ones).

## Reversible Jump MCMC
RJMCMC is suitable for nonparametric models where model dimensions change. The key is to use auxiliary variables to match the dimensions.