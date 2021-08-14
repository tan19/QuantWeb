# Survival Analysis

\begin{align}
	S(t) &= \exp \left[-\int_0^t \lambda(u) du \right] \\
	L(\lambda) &= \prod_{i=1}^n [\lambda(t_i)]^{\delta_i} [S(t_i)]^{1-\delta_i}
\end{align}
where $S(t)$ is the survival function, and $\lambda(t)$ is the hazard function.

\begin{table}[h]
\centering
\begin{tabular}{c || c c c }
\hline
& {Estimate} & {Standard Error} & {NOTE} \\
\hline
\\
$S$& $\hat{S(t)} = \prod \frac{n_j-d_j}{n_j}$ & $\hat{S(t)} \sqrt{\sum \frac{d_i}{n_j(n_j-d_j)}}$ &\\
\\
\hline
\\
$\Lambda$& $-\log \hat{S(t)}$ & $\sqrt{\sum \frac{d_i}{n_j(n_j-d_j)}}$& \\
\\
\hline
\\
$\lambda$& $\frac{\sum \delta_i}{\sum (X_i-V_i)}$ & $\frac{\hat \lambda}{\sqrt{\sum \delta_i}}$\\
\\
\hline
\end{tabular}
\caption{Survival Analysis}
\end{table}