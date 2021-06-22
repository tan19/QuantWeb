# Implied Volatility
The background is, clients came to us asking to buy autocallables from us before the ex-dividend day. The autocallables usually have a short vol position at the maturity. So in essence, we long the vol when we sell it.

Now the problem is, we observed that before the ex-dividend day, there's a W shape of the vol slices, where around the forward strike, there's a bump. And after that, it reverts back to normal.

The consequence of this is that, when we sell the autocallables, we paid too much for the vol, and when we set up the hedging positions later, we sell it for less.

So to start with, we studied SPX vol calibration and dynamics.

- Grab data from our vendors, Ruters and Bloomberg; Mostly bid and ask quotes with prices and volumes.
- We also grabbed at least five market quotes for the vol surface calibration, the ATMF vol, the 10-delta Risk Reversal and 25-delta risk reversal for the skews, as well as the 10-delta and 25-delta butterfly for the smiles. We also grabbed the call spreads for the implied density of the forward.
- As a preprocessing step, we computed point estimates for each pair of bid-ask weighted average, 
- We then did a parametric fitting to match the ATMF vol, the risk reversals and the butterflies.
- As a post-processing step, we removed any arbitrage points, mostly calendar arbs and butterfly arbs.
- And finally we interpolate and extrapolate the surface.		

After building up this vol surface, we studied its behavior.

First, we did a PCA decomposition of the vol surface, where the data matrix say X has n rows and p columns, where n is each day and p is the IVs of that day. We find out that we only need 3 or 5 factors to describe the vol dynamics.

We then did an analysis on the call-spread implied density, where the distribution of the log-returns is not Gaussian and has fat tails. And the mean-reverting dynamics suggests that it involves a mixture of distributions. We then did a GMM (Gaussian Mixture Models) fitting, which also suggested a 3 or 5 factor decomposition. 

American Option pricing for the single names, as there's cash dividend involved. We did proprotional dividend model and adjust the divididend, and priced it with Trinomial Tree.




Vol skew or smile is related to the conditional non-nomality of risk-neutral distribution of the underlying's log-returns. In particular, a smile reflects fat tails in the log-return distribution whereas a skew indicates the asymmetry of the log-return distribution.

liquidity and transaction costs do make arbitrage more complicated.

cash dividends make it a problem for call IV and put IV, especially for American options.

For example, FX vol smile is represented by three entities:

- the ATMF vol;
- 10-delta risk reversal (long an OTM call and short an OTM put);
- 10-delta butterfly, which is essentially
	- long a 10-delta straddle (long an ATM call and an ATM put) and short a 10-delta strangle (short an OTM call and and OTM put), or equivalently
	- long an ITM call, short two ATM call and long an OTM call.
- and 25-delta risk reversal and butterfly. 
