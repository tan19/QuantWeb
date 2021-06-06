# Martingale

!!! Question "Q: Brownian Motion Hitting Time Probability"
    Suppose $dX_t = rdt + dW_t$, what is the probability that $X_t$ hits 3 before hitting -5?
??? Done "A: Brownian Motion Hitting Time Probability" 
    Notice that the *exponential martingale* is defined as:
    
    \begin{align}
        e^{-\frac{\sigma^2}{2}t + \sigma W_t}
    \end{align}
    
    Plug in $W_t = X_t - rt$, we have
    
    \begin{align}
        e^{-\frac{\sigma^2}{2}t + \sigma (X_t - rt)}
    \end{align}

    Let $\sigma = -2r$, we have

    \begin{align}
        e^{-\frac{\sigma^2}{2}t + \sigma (X_t - rt)} = e^{-\frac{(-2r)^2}{2}t - 2r (X_t - rt)} = e^{-2rX_t}
    \end{align}

    and $e^{-2rX_t}$ is a martingale. Now,

    \begin{align}
        1 = E[e^{-2rX_t}] = P_3 e^{-2r(3)} + (1-P_3) e^{-2r(-5)} \implies P_3 = \frac{e^{10r} - 1}{e^{10r} - e^{-6r}}
    \end{align}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

!!! Question "Q: Brownian Bridge"
    What is a Brownian bridge? What is the distribution of a Brownian Bridge? Why and how do we use it?
??? Done "A: Brownian Bridge" 
    In a Brownian motion the state variable, i.e. the stock price, FX rate, interest rate, is stochastic and evolves over a period of time in a random manner. The randomness is tied to the volatility of the asset and the drift is deterministic. In the short run, the volatility dominates the process and the asset price path is truly stochastic, i.e. random. However, over the long period of time the drift will dominate the volatility and therefore, if there are small errors in estimation of the drift it will lead to large fluctuations in the future price distribution. This is one of the drawbacks of a Brownian motion (as applied to the pricing of financial assets). Over longer horizons the drift of the stochastic process (Brownian motion) becomes a complicating factor.

    Therefore, a Brownian motion may not be very suitable for modelling an asset which has a longer maturity period, say, 5 years, 10 years, etc. and where the final state of the asset is known. Like a discount bond (Treasury bonds). A government bond can have maturities of 5 years, 10 years, 30 years and the final value of the bond is known, i.e. the par (face) value. And, a bond will always redeem at par.

    Besides Treasury and discount bonds, Brownian Bridges are also used to model Barrier options and other exotic options where the terminal value is known in advance. [Monte Carlo pricing of continuous barrier options with Heston](https://www.acenumerics.com/miscellaneous/monte-carlo-pricing-of-continuously-monitored-barrier-options-with-heston).
