# Algorithmic Trading

<a href="https://iextrading.com/trading/signal/" target="_blank">The IEX Signal</a>

<a href="https://iextrading.com/docs/The%20Evolution%20of%20the%20Crumbling%20Quote%20Signal.pdf" target="_blank">The Evolution of the Crumbling Quote Signal</a>



In 1971, the Financial Industry Regulatory Authority (FINRA), created a revolutionary exchange called the National Association of Securities Dealers Automated Quotations (NASDAQ), which was the world's first electronic stock market. Today, algorithmic trading represents over two thirds of all market transactions. 

There are two main strategies in algorithmic trading: **statistical arbitrage** and **latency arbitrage**. Statistical arbitrage derives its advantage from the strength of its **models** while latency arbitrage derives its advantage from its **speed**.

Statistical arbitrage is generally justified to be able to correct market mispricings and make the market more efficient. On the contrary, latency arbitrage is ethically questionable and debateable as it essentially is to forerun other market participants.

For example, there are three well-known malicious strategies:

## Predatory Trading
Predatory trading is the HFT equivalent of the illegal practice of front-running. For example, if a broker receives an order from a client to buy 100,000 shares of security S at $20.00, he may 1) buy security S at $20.00 and keep it in his personal account, 2) execute his client's order, and 3) sell the shares in his personal account after the price has been driven up. This is unethical because, first, the trader is trading using non-public information; and secondly, he is negatively impacting his client's order via slippage.

For example, there are four nearby exchanges in New York: BATS, Diret Edge, NASDAQ, and the NYSE. The difference between arriving at the first exchange, BATS, and the last exchange, NYSE, is about 2 milliseconds. However, HFT firms can travel among all these exchanges in as little as 476 microseconds. Thus, the HFT firm can buy all the shares in the market and sell it at a higher price to the buyer.

## Stop-Loss Tripping
Suppose the HFT firm pays its broker to have access to their order books. In particular, if we know that there are stop loss orders at $40.00, $37.50, and $36.00. We can short the stock to trigger $40, can pressure the stock to a flash-crash, then we cover our short positions possibly at $36.00 and take the profit.

## Order Spoofing
This strategy involves submitting disingenuous orders to trick other traders. The HFT firm places a large amount of overpriced buying orders, and at the same time has had bullish option positions. When other slower participants have created illustrations for themselves that the stock prices are going up and followed by placing large amounts of reasonablely higher buying orders, the HFT firm would withdraw their buying orders and gain profit through the bullish option positions.

In September 2016, a new exchange called Investors Exchange (IEX) received approval from the SEC and will be the first transparent exchange where malicious latency arbitrage strategies are no longer possible.