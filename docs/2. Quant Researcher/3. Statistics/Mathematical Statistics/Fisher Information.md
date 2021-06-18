# Fisher Information

Fisher information (or information for short) is a way of measuring the amount of information that an observable random variable $X$ carries about an unknown parameter $\theta$ of a distribution that models $X$. Formally it is the variance of the score, or the expected value of the observed information.

??? Note "Definition: Score"
    Score is the gradient of the log-likelihood function w.r.t. the parameter vector.
    
    $$
    s(\theta) \equiv \frac{\partial}{\partial \theta} \log L(\theta)
    $$

    The mean of score is zero while the variance of score is the Fisher information. The ratio of two likelihood functions evaluated at two distinct parameter values can be understood as a definite integral of the score function.

## Bernstein-von Mises Theorem
The Bernstein-von Mises Theorem states that a posterior distribution converges in the limit of infinite data to a multivariate normal distribution centered at the maximum likelihood estimator with covariance matrix given by $n^{-1}\I(\theta_0)^{-1}$, where $\theta_0$ is the true population parameter and $\I(\theta_0)$ is the Fisher information matrix at the true population parameter value.