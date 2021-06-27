# Ensemble
\section{Ensemble Methods}\label{sec:Ensemble_Methods}
\index{ensemble methods}
\subsection{Bootstrapping}
The initial data set in Bootstrapping should be large enough such that 1) it captures most of the complexity of the true underlying distribution and 2) the bootstrapped samples are independent.

\subsection{Bagging, Boosting and Stacking}
Our choice of weak learners should be coherent with the way we aggregate these models. If we choose base models with low bias but high variance, it should be with an aggregating method that tends to reduce variance whereas if we choose base models with low variance but high bias, it should be with an aggregating method that tends to reduce bias.

\emph{Bagging}\index{bagging} learns a set of homogeneous weak learners independently from each other in \emph{parallel} and combines them following some kind of deterministic averaging process.

\emph{Boosting}\index{boosting}, different from bagging, is to train these homogeneous weak learners \emph{sequentially} and \emph{adaptively}.

\emph{Stacking}\index{stacking}, different from bagging and boosting, uses heterogeneous weak learners and learns them in parallel and combines them by training a meta-model to output a prediction based on the different weak models predictions.

Very roughly, we can say that bagging will mainly focus at getting an ensemble model with \emph{less variance} (kind of like ``diversification'' in portfolio selection) than its components whereas boosting and stacking will mainly try to produce strong models less biased than their components (even if variance can also be reduced).


\subsection{Boosting Methods}
\subsubsection{AdaBoost}
In AdaBoost, to correct the previous error, the observations that were incorrectly classified now carry more weight than the observations that were correctly classified. AdaBoost algorithms can be used for both classification and regression problem.

\subsubsection{Gradient Boosting}
Just like AdaBoost, Gradient Boosting works by sequentially adding predictors to an ensemble, each one correcting its predecessor. However, instead of changing the weights for every incorrect classified observation at every iteration like AdaBoost, Gradient Boosting method tries to fit the new predictor to the residual errors made by the previous predictor.

\subsubsection{XGBoost}
XGBoost stands for eXtreme Gradient Boosting. XGBoost is an implementation of gradient boosted decision trees designed for speed and performance. 


\section{Random Forest}
\index{random forest}\label{model: random forest}
Random forest is a \emph{boosting}\index{boosting} algorithm applied on an ensemble of decision trees. Each tree is trained by random sampling the observations and the subset of features.

The random forest approach is a bagging method where deep trees, fitted on bootstrap samples, are combined to produce an output with lower variance.