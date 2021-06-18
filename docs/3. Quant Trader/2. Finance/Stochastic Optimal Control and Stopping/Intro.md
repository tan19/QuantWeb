# Stochastic Optimal Control and Stopping

The goal of stochastic control problems is to maximize (or minimized) some expected profit (cost) function by tuning a strategy which itself affects the dynamics of the underlying stochastic system. It was first introduced by Merton in 1971.

Surprisingly, in many cases, the optimal strategy turns out to be Markov in the underlying state variables, even if the agent is considering non-Markovian controls.

One tool keeps coming to the forefront when solving stochastic control problems is the **dynamic programming principle (DPP)** and the related non-linear PDE known as the HJB (Hamilton-Jacobi-Bellman) equation, a.k.a. **dynamic programming equation (DPE)**. The DPP allows a stochastic control problem to be solved from the terminal date backwards and the HJB equation / DPE can be viewed as its infinitesimal version.

## The Merton Problem
In Merton's Problem (1971), the agent seeks to maximize expected (discounted) wealth by trading a risky asset and a risk-free bank account. Specifically, at time $t$, she places $\pi_t$ dollar of her total wealth $X_t$ into the risky asset $S_t$ and seeks to obtain the so-called **value function**

$$
H(S,x) = \sup_{\pi \in \AA_{0, T}}\EEE_{S,x}[U(X_T^\pi)]
$$

## An Example
Suppose our market consists of a bond and a single stock in a two-period model $t = 0, 1, 2$. The bond and stock prices $_t^0, S_t$ behaves as follows:

- bond price starts with \$1 and does not change.
- stock price starts with \$1 and can go up and down with probabilities 4/9 and 5/9, respectively.

The agent wants to maximize his expected utility from terminal wealth at time $t = 2$, which is completely determined by

- its initial capital $x$, and 
- strategy $\alpha_t$, representing the fraction of wealth invested in **stock**, at times $t = 0, 1$. 
 
The value $\alpha_t$ is chosen after observing the stock price $S_t$ at time $t = 0, 1$. We denote $X_t^{x,\alpha}$ the wealth value at time $t$, which is then given by the equations:

\begin{align*}
X_1^{x,\alpha} &= \left(\alpha_0 \frac{S_1}{S_0} + (1-\alpha_0) \right)x\\
X_2^{x,\alpha} &= \left(\alpha_1 \frac{S_2}{S_1} + (1-\alpha_1) \right)X_1^{x,\alpha}\\
\end{align*}

Our problem is then to solve

$$
V_0(x) = \max_\alpha \EEE[U(X_2^{x,\alpha})]
$$

where the utility function can be a concave function such as $U(x) = \sqrt{x}$.