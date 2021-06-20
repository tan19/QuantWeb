# Black-Litterman Allocation

## Introduction
The Black-Litterman is a model for portfolio allocation developed in 1990 at Goldman Sachs by Fischer Black and Robert Litterman.

The model tries to solve a problem with Modern Portfolio Theory (MPT, the mean-variance approach of Markowitz): although the covariances of a few assets can be adequately estimated, it is difficult to come up with reasonable estimates of *expected returns*.

In general, when there are portfolio constraints - for example, when short sales are not allowed - the easiest way to find the optimal portfolio is to use the Black–Litterman model to generate the expected returns for the assets, and then use a mean-variance optimizer to solve the constrained optimization problem.