# Option P&L Attributions

Consider at time 0 that, the bank sells an option $P$ and at the same time long $\Delta$ shares of the underlying stock $S$ to setup a delta-hedged position:

\begin{align}
    \Pi = -P + \Delta S
\end{align}

!!! Important
    In a complete market where arbitrage is impossible, the following accounting equation should hold *in its expectation* at any time $t$:

    \begin{align}
        \underbrace{\Delta_t S_t}_{\mbox{Asset}} = \underbrace{0}_{\mbox{Equity}} + \underbrace{\underbrace{P_t}_{\mbox{liability to counter-party}} + \underbrace{(-P_t + \Delta_t S_t)}_{\mbox{liability to money market}}}_{\mbox{Liability}}
    \end{align}

    At time $0$ all terms are zero.

During the time period $[t, t + dt]$ the P&L of this portfolio, i.e., *the bank's equity*, becomes:

\begin{align*}
\small{
    \underbrace{\left(\underbrace{qdt\Delta S}_{\mbox{proceeds from stock}} + \underbrace{\Delta dS}_{\mbox{P&L of stock}}\right)}_{\mbox{Asset P&L}} - \underbrace{\left(\underbrace{dP}_{\mbox{P&L of option}} + \underbrace{rdt(-P+\Delta S)}_{\mbox{interest paid}} \right)}_{\mbox{Liability P&L}}
    }
\end{align*}

where we have assumed that the risk-free rate in the money market is $r$. By assuming <span style="color:blue">the option price only depends on time $t$ and the stock price $S_t$</span> and by Ito's lemma, we have

\begin{align}
dP = \frac{\partial P}{\partial t}dt + \frac{\partial P}{\partial S}dS + \frac12 \frac{\partial^2 P}{\partial S^2} (dS)^2 \label{eq:dP}
\end{align}

!!! Note
    Note that we have not specified the dynamics of $dS$.
    
Plug in Equation $\ref{eq:dP}$ and delta hedge the position by setting *dynamically*

$$
\Delta \equiv \frac{\partial P}{\partial S}
$$

we obtain

$$
P\&L = -\left[\frac{\partial P}{\partial t} -rP + (r - q) S\frac{\partial P}{\partial S}\right]dt - \frac12 S^2\frac{\partial^2 P}{\partial S^2} \left(\frac{dS}{S}\right)^2
$$

!!! Note
    The term $\frac{dS}{S}$ is called **dollar gamma**, because it has the same unit as the underlying stock.

We know that at time $t$, all quantities of the above are observable, except for the term $\left(\frac{dS}{S}\right)$; and we know that in a complete market, the expectation of the P&L has to be zero. Thus, if we denote 

$$
\hat{\sigma}^2 dt \equiv \EEE\left[\left(\frac{dS}{S}\right)^2\right]
$$

where the latent variable $\hat{\sigma}$ measures the volatility of $S$ during time interval $[t, t + dt]$, we obtain,

$$
\EEE[P\&L] = -\left[\frac{\partial S}{\partial t} -rP + (r-q)S\frac{\partial P}{\partial S} \right]dt - \frac12 S^2\frac{\partial^2 P}{\partial S^2} \hat{\sigma}^2 dt \equiv 0
$$

which implies

$$
\frac{\partial S}{\partial t} -rP + (r-q)S\frac{\partial P}{\partial S} = - \frac12 S^2\frac{\partial^2 C}{\partial S^2} \hat{\sigma}^2
$$

and finally,

!!! Important
    \begin{align}
    P\&L = \frac12 S^2\frac{\partial^2 P}{\partial S^2} \left[\hat{\sigma}^2 dt - \left(\frac{dS}{S}\right)^2\right]
    \end{align}

    The P&L of the delta-hedged position comes from the difference between the implied variance and the realized variance, weighted by the dollar gamma.