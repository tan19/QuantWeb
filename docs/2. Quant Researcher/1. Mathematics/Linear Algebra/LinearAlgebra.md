# Linear Algebra
\section{Matrix Transformations and Canonical Forms}
\subsection{Decomposition Related to Solving $AX=\b$}
\subsubsection{LU Decomposition: Schur Complement}\index{LU decomposition}
Usually, $|\A\B| \ne |\B\A|$. For example
\ex{
    \begin{align*}
        \begin{vmatrix}\left[\begin{matrix}1 ~~ 1\end{matrix}\right] \left[\begin{matrix}0 \\ 1\end{matrix}\right]\end{vmatrix} = \begin{vmatrix}1\end{vmatrix} = 1
    \end{align*}

    \begin{align*}
        \begin{vmatrix}\left[\begin{matrix}0 \\ 1\end{matrix}\right] \left[\begin{matrix}1 ~~ 1\end{matrix}\right]\end{vmatrix} = \begin{vmatrix}\left[\begin{matrix}0 ~~ 0 \\ 1 ~~ 1\end{matrix}\right]\end{vmatrix} = 0
    \end{align*}
}

However, the {\bf{Sylvester's Determinant Theorem}} says, as long as $\A\B$ and $\B\A$ are both square matrices,
\begin{align}
    \begin{vmatrix}\I+\A\B\end{vmatrix} = \begin{vmatrix}\I+\B\A\end{vmatrix}
\end{align}

It is also not true in general that
\begin{align*}
    \begin{vmatrix}\left[\begin{matrix}\A ~~ \B \\ \C ~~  \D\end{matrix}\right]\end{vmatrix} = \begin{vmatrix}\A\D-\B\C\end{vmatrix}
\end{align*}
unless $\C$ and $\D$ are commutable, i.e., $\C\D = \D\C$. The general formula for block determinant is
\begin{align}
    \begin{vmatrix}\left[\begin{matrix}\A ~~ \B \\ \C ~~  \D\end{matrix}\right]\end{vmatrix} = \begin{vmatrix}\A\end{vmatrix}\begin{vmatrix}\D - \C\A^{-1}\B\end{vmatrix}
\end{align}
which is based on Schur complement.

Now suppose we have a homogeneous linear system
\begin{align}
	\left[\begin{matrix}\A & \B \\ \C & \D \end{matrix}\right] \left(\begin{matrix} \x \\ \y \end{matrix}\right) = \left(\begin{matrix} \mathbf{0} \\ \mathbf{0} \end{matrix}\right)
\end{align}
To solve for $\y$, if $\A$ is nonsingular, we may multiply the first row by $-\C\A^{-1}$ and add to the second, and obtain
\begin{align}\label{eq:shurA}
	\left[\begin{matrix}\I & \mathbf{0} \\ -\C\A^{-1} & \I \end{matrix}\right] \left[\begin{matrix}\A & \B \\ \C & \D \end{matrix}\right] = \left[\begin{matrix}\A & \B \\ \mathbf{0} & \D-\C\A^{-1}\B \end{matrix}\right]	
\end{align}

\deff{
Suppose $\M$ is a square matrix $$\M = \left[\begin{matrix}\A & \B \\ \C & \D \end{matrix}\right]$$ and $\A$ nonsingular.
We denote \footnote{It is easy to remember if you multiply the submatrices clockwise.}
\begin{align}
	\M/\A = \D-\C\A^{-1}\B
\end{align}
and call it {\em{the Schur complement of $\A$ in $\M$}}, or {\em{the Schur complement of $\M$ relative to $\A$}}.

%\rmk{
%A very useful identity can be revealed from equation \ref{eq:shurA} \marginnote{\dbend}
%\begin{align}
%	\M = \left[\begin{matrix}\A & \B \\ \C & \D \end{matrix}\right] = \left[\begin{matrix}\I & \mathbf{0} \\ \C\A^{-1} & \I \end{matrix}\right] \left[\begin{matrix}\A & \mathbf{0} \\ \mathbf{0} & \D-\C\A^{-1}\B \end{matrix}\right] \left[\begin{matrix}\I & \A^{-1}\B \\ \mathbf{0} & \I \end{matrix}\right]
%\end{align}
%}which gives us the following identities
\thm{
\begin{align}
	det(\M) &= det(\M/\A) \cdot det(\A)\\
	rank(\M) &= rank(\M/\A) + rank(\A)
\end{align}
}
\rmk{
For a non-homogeneous system of linear equations $$\left[\begin{matrix} \A & \B \\ \C & \D \end{matrix}\right] \left(\begin{matrix} \x \\ \y \end{matrix}\right) = \left(\begin{matrix} \u \\ \v \end{matrix}\right)$$ We may use Schur complements to write the solution as
\begin{align}
	\x = (\M/\D)^{-1}(\u-\B\D^{-1}\v)\\
	\y = (\M/\A)^{-1}(\v-\C\A^{-1}\u)
\end{align}
}
\thm{
	If $\M$ is a positive-definite symmetric matrix, then so is the Schur complement of $\D$ in $\M$.
}

\subsubsection{LDU Decomposition}
The LDU decomposition can be viewed as the matrix form of Gaussian elimination. It is used to find the inverse of a matrix, {\bf{or computing the determinant of a matrix}}.

\begin{rmk}
	The triangular factorization can be written $A=LDU$, where $L$ and $U$  have $1's$ on the diagonal and $D$ is the diagonal matrix of pivots.
\end{rmk}

\subsubsection{Cholesky and LDL Decomposition}\index{Cholesky Decomposition}
\deff{
	The Cholesky decomposition of a s.p.d. matrix $\A$ is of the form
	\begin{align}
		\A = \L\L^T
	\end{align}
	where $\L$ is a lower triangular matrix, with {\em{real and positive diagonal elements}}.
}

Cholesky decomposition is unique. If $\A$ is symmetric semi-positive definite, it still has a decomposition of the form $\A = \L\L^*$, although may not be unique, if the diagonal entries of $\L$ are allowed to be zero. A closely related variant of the classical Cholesky decomposition is the {\em{$LDL^T$ decomposition}}:
\begin{align}
	\A = \L\D\L^T = (\L\D^{\frac{1}{2}}) ({\D^{\frac{1}{2}}}^T\L^T) = (\L\D^{\frac{1}{2}}) (\L\D^{\frac{1}{2}})^T
\end{align}
where the diagonal entries of $\L$ are all ones.

The Cholesky decomposition can be used to generate correlated normal variables. Note that, if we perform Cholesky decomposition on the covariance matrix of a multivariate normal random vector $\Sigma = \L\L^T$, then we can first generate random values from a standard multivariate normal distribution, and left multiply by the Choleskey matrix $\L$. This is because:
\begin{align*}
	\mbox{Var}[\L\z] = \L\L^T = \Sigma
\end{align*}

\subsubsection{QR Decomposition: Givens Rotation, Householder Transformation}\index{QR decomposition}
Any square matrix $\A$ may be decomposed as
\begin{align}
	\A = \Q\R
\end{align}
where $\Q$ is an orthogonal matrix, and $\R$ an upper triangular matrix. This is called the QR decomposition. It is essentially a change of basis process, and can be obtained by using the Gram-Schmidt process.


\subsection{Decomposition Related to Solving $A\x = \lambda \x$}
\subsubsection{Eigendecomposition}\index{Eigendecomposition}
A square matrix $A$ is called diagonalizable\index{diagonalizable} or nondefective if it is similar to a diagonal matrix, i.e., if there exists an invertible matrix $P$ such that $P^{-1}AP$ is a diagonal matrix. A square matrix is diagonalizable if and only if the sum of the dimensions of its eigenspaces is equal to the size of the matrix.

Suppose a square matrix $\M$ of order $n$ is diagonalizable, i.e., it has $n$ linearly independent eigenvectors, then since
\begin{align}
	\M\Q = \Q\bLambda
\end{align}
where the columns of $\Q$ are eigenvectors of $\M$ (hence invertible), and $\bLambda$ is a diagonal matrix with eigenvalues of $\M$ as entries. Then we have
\begin{align}
	\M = \Q\bLambda\Q^{-1}
\end{align}
As a special case, for every \emph{symmetric} square matrix $\M$, the eigenvalues can be chosen to be orthonormal and thus the eigendecomposition becomes:
\begin{align}
	\M = \Q \bLambda \Q^T
\end{align}
where $\Q\Q^T = \I$.

\subsubsection{Singular Value Decomposition (SVD)}\index{Singular Value Decomposition}
For any matrix $\A_{m \times n}$, there is an SVD decomposition.
\begin{align}
	\M = \U \bSigma \V
\end{align}
where $\U$ and $\V$ have the left-singular vectors and right-singular vectors, respectively. If $\M$ is positive definite, it reduces to the Cholesky decomposition.



\section{Special Matrices}
\subsection{Elementary Matrices}
There are three types of elementary matrices: {\color{red}{Row Switching, Row Multiplication, and Row Addition.}}

\begin{rmk}
	Left multiplication (pre-multiplication) by an elementary matrix represents elementary row operations, while right multiplication (post-multiplication) represents elementary column operations.
\end{rmk}

\begin{rmk}
	The inverse of elementary matrices has the same format as the orginal ones.
\end{rmk}

\subsection{Permutation  Matrices}
\begin{rmk}
	When a permutation matrix $P$ is multiplied with a matrix M from the left it will permute the rows of $M$, when $P$ is multiplied with $M$ from the right it will permute the columns of $M$.
\end{rmk}

\begin{rmk}
	The inverse of a permutation matrix is its transpose.
\end{rmk}

\subsection{Symmetric Matrices}
All symmetric matrices are diagonalizable, since symmetric matrices are normal and normal matrices are diagonalizable. As a consequence, all symmetric matrices can apply eigendecomposition.

\subsection{Projection Matrices}
\begin{rmk}
	$P = A(A^TA)^{-1}A^T$, $P = \frac{aa^T}{\|a\|}$
\end{rmk}

\begin{rmk}
	$P^2=P$
\end{rmk}

\begin{rmk}
	Only two eigenvalues possible: 0 and 1. The corresponding eigenvectors form the kernel and range of $A$, respectively.
\end{rmk}

\begin{rmk}
	Projection is invertible.
\end{rmk}

\subsection{Normal Matrix}
\deff{
	A {\em{normal matrix}} is a square matrix which satisfies
	\begin{align}
		\A^T\A = \A\A^T
	\end{align}
}

\subsection{Orthogonal Matrices}
\deff{
	An {\em{orthogonal matrix}} ({\em{unitary}} for a complex matrix) is a normal matrix which further satisfies
	\begin{align}
		\A^T\A = \A\A^T = \I
	\end{align}
}
Or, alternatively,
%\rmk{An orthogonal matrix is a square matrix with orthonormal \smallmarginpar{orthogonal and unit vectors} columns.}

\begin{rmk}
	$Q^TQ = I$ even if $Q$ is rectangular (but then left-inverse).
\end{rmk}

\begin{rmk}
	Any permutation matrix $P$ is an orthogonal matrix.
\end{rmk}

\rmk{Orthogonal matrices can be categorized into either the reflection matrix $Ref(\theta)$ which has determinant 1, or the rotation matrix $Rot(\theta)$, which has determinant -1.}

\rmk{Geometrically, an orthogonal $Q$ is the product of a rotation and a reflection.}

\begin{rmk}
	Orthogonal matrix is invariant to 2-norm, that is, suppose $Q$ is an orthogonal matrix, and $x$ a vector, then
	\begin{align}
		\|Qx\|_2 = \|x\|_2
	\end{align}
\end{rmk}

\begin{rmk}
	Projection matrices are usually not orthogonal, since they are not invariant to 2-norm.
\end{rmk}


\rmk{As a linear transformation, an orthogonal matrix preserves the dot product of vectors (therefore also norm and angle), and therefore acts as an isometry of Euclidean space, such as a rotation or reflection. In other words, it is a unitary transformation.}

\rmk{The product of two rotation matrices is a rotation matrix, and the product of two reflection matrices is also a rotation matrix. See figure~\ref{fig:rotation}.}
%\begin{figure}[h]
%\centering
%\includegraphics[scale=0.4]{rotation}
%\caption{The product of two reflection matrices is a rotation matrix.}
%\label{fig:rotation}
%\end{figure}

\subsection{Positive Definite Matrices}
\deff{
	Let $\A$ be an $n \times n$ square matrix. $\A$ is said to be positive definite if
	\begin{align}
		\x^T \A \x > 0, ~~ \forall \x \ne \mathbf{0}
	\end{align}
}

%\thm{\marginnote{\dbend}
%	If $\A$ is positive definite, then
%	\begin{enumerate}
%		\item The diagonal elements of a positive definite matrix are positive.
%		\item All eigenvalues of $\A$ is positive.
%		\item Its determinant is positive.
%		\item It is nonsingular.
%	\end{enumerate}
%}
\noindent
\prof{
	The diagonal elements are positive because $a_{kk} = \e_k^T \A \e_k > 0$. The eigenvalues of an s.p.d. matrix are all positive is easy to prove by observing that $$0 < \x^T\A\x = \x^T\lambda\x = \lambda \|\x\|_2^2$$ The positivity of determinant can be shown by looking at the LDU decomposition. Finally, it is nonsingular because the determinant is nonzero.
}	
\deff{
	Let $\A$ be an $n \times n$ square matrix. A principal submatrix of $\A$ is obtained by selecting some rows and columns with the {\em{same}} index subset of $\{1, \cdots, n\}$.
}
\deff{
	Let $\A$ be an $n \times n$ square matrix. A {\em{leading}} principal submatrix of $\A$ is a principal submatrix of $\A$ with the index subset $\{1,\cdots,m\}$, for some $m \le n$.
}

%\thm{\marginnote{\dbend}
%	If $\A$ is positive definite then every principle submatrix is s.p.d..
%}
\prof{
	Suppose $\A_p$ of size $p$ is a principle submatrix of $\A$. Since $\A$ is positive definite, for any nonzero vector $\x$ we have $\x^T \A \x > 0$. Remove the corresponding coordinates of $\x$, same as those removed when creating the principle submatrix, and call it $\x_p$. Then the resulting vector $\x_p^T \A_p \x_p = \x^T \A \x > 0$.
}

Properties of positive definite matrices:
\begin{enumerate}
	\item If and only if the eigenvalues are all positive.
	\item The Sylvester's criterion: If and only if all leading principal minors are positive. For positive semi-definite, not only leading principal minors need to be checked, but \emph{all} principal minors.
	\item Every principal submatrix is positive definite: hence the diagonal elements are all positive (but removing all other rows and columns and left with only one element) and the trace is positive.
	\item There is a unique Cholesky decomposition.
\end{enumerate}

\subsection{Idempotent Matrix}
\index{idempotent matrix}
A matrix $\A$ is idempotent if $\A^2 = \A$. The only non-singular idempotent matrix is $\I$, because multiplying both sides by $\A^{-1}$ we obtain $\A^{-1} \A^2 = \I$ implies $\A = \I$. Another property of idempotent matrices is that if $\A$ is idempotent, $\I - \A$ is also be idempotent, this can be shown by $(\I - \A)^2 = \I - 2\A + \A^2 = \I - \A$.


\subsection{Double Factorial}
\subsection{Stirling Numbers}
\section{Matrix Derivatives and Integration}
Suppose $\Y_{m \times n}$ and $\X_{p \times q}$ are both matrices (scalars, vectors are of course special cases). The derivative of $\Y$ with respect to $\X$ involves $mnpq$ partial derivatives, $\left[\frac{\partial Y_{ij}}{\partial X_{kl}}\right]$, for $i = 1, \cdots, m; j = 1, \cdots, n; k = 1, \cdots, p; l = 1, \cdots, q$. This immediately poses a question: What is a convenient (or logic) way of arraying these partial derivatives - as a row vector, as a column vector, or as a matrix (which is a natural choice), and if the latter of what shape/order?

Two competing notational conventions can be distinguished by whether the index of the derivative (matrix) is majored by the numerator or the denominator.
\begin{enumerate}
	\item Numerator layout, i.e. according to $\Y$ and $\X^T$. This is sometimes known as the Jacobian layout.
	\item Denominator layout, i.e. according to $\Y^T$ and $\X$. This is sometimes known as the gradient layout. It is named so because the gradient under this layout is a usual column vector.	
\end{enumerate}
The transpose of one layout is the same as the other. We use the {\bf{numerator-layout}} notation throughout the paper.

{
\renewcommand{\arraystretch}{2}
\begin{center}
    \begin{tabular}{|c|c|c|c|}
    \hline
     & Scalar & Vector & Matrix \\ \hline
    Scalar & $\frac{\partial y}{\partial x}$ & $\frac{\partial \y}{\partial x} = [\frac{\partial y_i}{\partial x}]$ & $\frac{d\Y}{\partial x} = [\frac{\partial y_{ij}}{\partial x}]$ \\ \hline
    Vector & $\frac{\partial y}{\partial \x} = [\frac{\partial y}{\partial x_j}]$ & $\frac{\partial \y}{\partial \x} = [\frac{\partial y_i}{\partial x_j}]$ &  \\ \hline
    Matrix & $\frac{\partial y}{d\X} = [\frac{\partial y}{\partial x_{ji}}]$ &  &  \\
    \hline
    \end{tabular}
\end{center}
}
The partials with respect to the numerator are laid out according to the shape $Y$ while the partials with respect to the denominator are laid out according to the transpose of $X$. For example, $\partial y/\partial \x$ is a row vector\footnote{We distinguish $\partial y/\partial \x$ and the gradient $\nabla_\x y$, which is the transpose of the former and hence a column vector.} while $\partial \y/\partial x$ is a column vector.

Note:
\begin{enumerate}
	\item derivative is a row vector; gradient is its transpose.
	\item Hessian is the derivative of gradient.
\end{enumerate}

\subsection{Differentials}
\ex{
	\begin{align}
		d\A = \A - \A = \bf{0}
	\end{align}
}

\ex{
	\begin{align}
		d(\alpha\X) = \alpha(X + d\X) - \alpha\X = \alpha d\X
	\end{align}
}

\ex{
	\begin{align}
		d(\X + \Y) = [(\X+\Y) + d(\X+\Y)] - (\X + \Y) = d\X + d\Y
	\end{align}
}

\ex{
	\begin{align}
		d(\tr(\X)) = \tr(\X + d\X) - \tr(\X) = \tr(\X + d\X - \X) = \tr(d\X)
	\end{align}
}

\ex{
	\begin{align}
		d(\X\Y) = (\X+d\X)(\Y+d\Y) - \X\Y = [\X\Y + \X d\Y + (d\X)\Y + d\X d\Y] - \X\Y = \X d\Y + (d\X)\Y
	\end{align}
}

\ex{
	\begin{align}
		\bf{0} = d\I &= d(\X\X^{-1}) = (d\X)\X^{-1} + \X d\X^{-1}\\
		d\X^{-1} &= -\X^{-1}(d\X)\X^{-1}
	\end{align}
}

Another proof is: $$\frac{\A^{-1}(x+h) - \A^{-1}(x)}{h} = \frac{\A^{-1}(x+h)[\A(x+h)-\A(x)]\A^{-1}(x)}{h}$$

\noindent
Next, let's prove something not so trivial.
\prop{
	\begin{align}
		d|\X| = |\X|\tr(\X^{-1}d\X)
	\end{align}
}
\prof{
	First, we see that
	\begin{align}
		\tr(\A^T\B) &= \sum_{i=1}^n \left(\sum_{j=1}^n (\A^T)_{ij}\B_{ji}\right) = \sum_{i=1}^n \sum_{j=1}^n \A_{ji}\B_{ji} = \sum_{i=1}^n \sum_{j=1}^n \A_{ij}\B_{ij} = \vec(\A)^T \vec(\B)
	\end{align}
	which can be computed by first multiply $\A$ and $\B$ element-wise, and then sum all the elements in the resulting matrix (known as the {\cem{Frobenius inner product}})\footnote{The trace operator is a scalar function (of a matrix), that essentially turns matrices into vectors and computes a dot product between them.}.

	Next, applying the Laplace's formula
	\begin{align}
		|\X| = \sum_j x_{ij} \cdot adj^T(\X)_{ij}
	\end{align}
	we have,
	\begin{align}
		d(|\X|) &= \sum_i\sum_j \frac{\partial |\X|}{\partial x_{ij}} d x_{ij} \\
		&= \sum_i\sum_j \frac{\partial\{\sum_k x_{ik} \cdot adj^T(\X)_{ik}\}}{\partial x_{ij}} d x_{ij} ~~~~~ \text{(expand by row $i$)}\\
		&= \sum_i\sum_j \left \{ \sum_k \frac{\partial x_{ik}}{\partial x_{ij}} \cdot adj^T(\X)_{ik} + \sum_k x_{ik} \frac{\partial adj^T(\X)_{ik}}{\partial x_{ij}} \right \} d x_{ij} \\
		&= \sum_i\sum_j adj^T(\X)_{ij} d x_{ij}  ~~~~~ \left(\frac{\partial adj^T(\X)_{ik}}{\partial x_{ij}} = 0, \forall k \ne j \right)\\
	\end{align}

	Now, use $\sum_{i=1}^n \sum_{j=1}^n \A_{ij}\B_{ij} = \tr(\A^T\B)$, we have
	\begin{align}
		d(|\X|) = tr(adj(X) d\X)
	\end{align}

	Since $\X$ is invertible, and $adj(\X) = |\X| \X^{-1}$, finally,
	\begin{align}
		d(|\X|) = |\X| tr(\X^{-1} d\X)
	\end{align}
}


\subsection{Vector-by-vector Derivatives}
The first two important identities are
\begin{align}
	\frac{\partial A\x}{\partial \x} &= A\\
	\frac{\partial \x^TA}{\partial \x} &= A^T	
\end{align}
In the numerator-layout, the major index of the resulting matrix is based on the numerator, so when $A$ is on the left hand side of $\x$, the derivative is the same size as $A$, on the other hand, if $A$ is on the right hand side of $\x$, it needs to be transposed.

\ex{
	Suppose $a=a(\x)$ is a scalar function and $\u = \u(\x)$ a vector function.
	\begin{align}
		\frac{\partial a\u}{\partial \x} = \frac{\partial a\u}{\partial a}\frac{\partial a}{\partial \x} + \frac{\partial a\u}{\partial \u}\frac{\partial \u}{\partial \x} = \u \frac{\partial a}{\partial \x} + a\frac{\partial \u}{\partial \x}
	\end{align}	
	Recall that $\frac{\partial a\u}{\partial a}$ is a row vector, and the chain rule is expanded from right to left, just as the composition of functions.
}


\subsection{Derivatives of Vectors and Matrices}
\subsubsection{Derivatives of a Vector or Matrix with Respect to a Scalar}
Let $\A$ be a matrix, as a matrix-valued function
\begin{align}
	\A(x): \RR \rightarrow \RR^{m \times n}
\end{align}

For vector- and matrix-valued functions there is a further manifestation of the linearity of the derivative: Suppose that $f$ is a fixed linear function defined on $\RR^n$ and that $\A$ is a differentiable vector- or matrix-valued function. Then
\begin{align}
	f(\A)' = f(\A')
\end{align}
A useful example is the trace of $\A$, which is the sum of the diagonal elements of $\A$ (differentiable real-valued functions)
\begin{align}
	tr(\A)' = tr (\A')
\end{align}

Another example is the inner product of two vectors, where we have \footnote{Actually, it should work for all dot product (not necessarily the inner product, which is in the context of Euclidean spaces.)}
\begin{align}
	(\a^T\b)' = \a'^T\b + \a^T\b'
\end{align} 


\subsection{Minors and Cofactors}
\deff{General definition of a minor.

Let $\A$ be an $m \times n$ matrix and $k$ an integer with $0 < k \le \min{m,n}$. A $k \times k$ minor of $\A$ is the determinant of a $k \times k$ matrix obtained from $\A$ by deleting $m-k$ rows and $n-k$ columns. For such a matrix there are a total of ${m \choose k} \cdot {n \choose k}$ minors of size $k \times k$.

\deff{First minors and cofactors.

If $A$ is a square matrix, then the minor of the entry in the $i$-th row and $j$-th column (also called the $(i,j)$ minor, or a first minor, is the determinant of the submatrix formed by deleting the $i$-th row and $j$-th column. This number is often denoted $M_{ij}$. The $(i,j)$ cofactor is obtained by multiplying the minor by $(-1)^{i+j}$.
}

\ex{
To illustrate these definitions, consider the following 3 by 3 matrix,
\begin{align}
	\begin{bmatrix}
	1 & 4 & 7 \\
	3 & 0 & 5 \\
	-1 & 9 & 11 \\
	\end{bmatrix}
\end{align}

To compute the minor $M_{23}$ and the cofactor $C_{23}$, we find the determinant of the above matrix with row 2 and column 3 removed.

\begin{align*}
	M_{2,3} = \det \begin{bmatrix}
	1 & 4 & \Box \\
	\Box & \Box & \Box \\
	-1 & 9 & \Box \\
	\end{bmatrix}= \det \begin{bmatrix}
	1 & 4 \\
	-1 & 9 \\
	\end{bmatrix} = (9-(-4)) = 13
\end{align*}

So the cofactor of the (2,3) entry is $C_{23} = (-1)^{2+3}(M_{23}) = -13$.
}

\vspace{5mm}
\noindent
An important application of cofactors is the {\bf{Laplace's formula}} for the expansion of determinants.
\begin{align}
	\det(\A) = \sum_{i=1}^n a_{ij}C_{ij} = \sum_{j=1}^n a_{ij}C_{ij}
\end{align}
If $k \ne i$, we see that
\begin{align}
	\sum_{j=1}^n a_{kj}C_{ij} = 0	
\end{align}
Similarly, if $k \ne j$
\begin{align}
	\sum_{i=1}^n a_{ik}C_{ij} = 0 \label{cofactor}
\end{align}
This is essentially the determinant of a matrix with the $k$-th row the same as the $i$-th row, or the $k$-th column the same as the $j$-th column, which is zero.

\subsection{The Cramer's Rule and the Adjugate Matrix}
\begin{align}
	\begin{matrix}a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n&=&b_1\\a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n&=&b_2\\\vdots&\vdots&\vdots\\a_{n1}x_1+a_{n2}x_2+\cdots+a_{nn}x_n&=&b_n\end{matrix}
\end{align}
If we multiply the above by the row vector of cofactors of the $1^{st}$ column, $[C_{11},C_{21},\cdots,C_{n1}]$, we obtain
\begin{align}
	[\det(\A),0,\cdots,0]\begin{bmatrix}x_1\\ \vdots \\ x_n\end{bmatrix} = [C_{11},C_{21},\cdots,C_{n1}]\b
\end{align}
The left hand side used Equation \ref{cofactor}. The right hand side is nothing but the determinant of a matrix with the first column replaced by $\b$.

Similarly, we can multiply the linear system by the row vector of cofactors of the $2^{nd}, 3^{rd}, \cdots, n^{th}$, and we obtain
\begin{align}	
	\det(\A)\x &= \begin{bmatrix}C_{11}& \cdots & C_{n1}\\C_{12} & \cdots &C_{n2}\\ \vdots &  & \vdots\\C_{1n} & \cdots & C_{nn}\end{bmatrix}\b
\end{align}
which gives us
\begin{align}
	\det(\A) &= \begin{bmatrix}C_{11}& \cdots & C_{1n}\\C_{21} & \cdots &C_{2n}\\ \vdots &  & \vdots\\C_{n1} & \cdots & C_{nn}\end{bmatrix}^T\A
\end{align}
The matrix on the right
\begin{align}
	\mathrm{adj}(\A) = \C^T = \begin{bmatrix}C_{11}& \cdots & C_{1n}\\C_{21} & \cdots &C_{2n}\\ \vdots &  & \vdots\\C_{n1} & \cdots & C_{nn}\end{bmatrix}^T
\end{align}
is called the adjugate matrix of $\A$, which is the transpose of the cofactor matrix $\C$.


\section{Vector Space}
\deff{
	A {\bf{vector space}} over a field $\FF$ is a {\em{nonempty}} set $V$ together with the operations of addition $V\times V \to V$ and scalar multiplication $\FF \times V \to V$ satisfying the following {\em{eight}} properties:
	\begin{enumerate}[(-)]
		\item Additive axioms. For every $\u,\v,\w \in V$, we have
		\begin{enumerate}[(1)]
			\item $\u+\v = \v+\u$
			\item $(\u+\v)+\w = \u+(\v+\w)$
			\item ${\bf{0}}+\u = \u+{\bf{0}}=\u$, where ${\bf{0}} \in V$ is unique for all $\u \in V$
			\item $(-\u)+\u = \u+(-\u) = {\bf{0}}$, where $-\u \in V$ is unique for every $\u \in V$
		\end{enumerate}
		\item Multiplicative axioms. For every $\u \in V$ and scalars $a, b \in \FF$, we have
		\begin{enumerate}[(1)]
			\item $1\x = \x$
			\item $(ab)\x = a(b\x)$
		\end{enumerate}
		\item Distributive axioms. For every $\u, \v \in V$ and scalars $a, b \in \FF$, we have
		\begin{enumerate}[(1)]
			\item a(\u+\v) = a\u + a\v
			\item (a+b)\u = a\u + b\u
		\end{enumerate}
	\end{enumerate}
}
\subsection{Subspaces}
\deff{
	A subspace of $\RR^n$ is any collection $S$ of vectors in $\RR^n$ such that
	\begin{enumerate}[(1)]
		\item The zero vector $\mathbf{0}$ is in $S$.
		\item If $\u$ and $\v$ are in $S$, then $\u+\v$ is in $S$. \footnote{$S$ is closed under addition.}
		\item If $\u$ is in $S$ and $c$ is a scalar, then $c\u$ is in $S$. \footnote{$S$ is closed under scalar multiplication.}
	\end{enumerate}
}

\deff{
	Let $S, T$ be two subspaces of $\RR^n$. We say $S$ is orthogonal to $T$ if {\em{every}} vector in $S$ is orthogonal to {\em{every}} vector in $T$. The subspace $\{\mathbf{0}\}$ is orthogonal to all subspaces. \footnote{A line can be orthogonal to another line, or it can be orthogonal to a plane, but a plane cannot be orthogonal to a plane.}
}

\deff{
	Let $A$ be an $m \times n$ matrix.
	\begin{enumerate}[(1)]
		\item The {\em{row space}} of $A$ is the subspace $row(A)$ of $\RR^n$ spanned by the rows of $A$.
		\item The {\em{column space}} (or {\em{range}}) of $A$ is the subspace $col(A)$ of $\RR^m$ spanned by the columns of $A$.
	\end{enumerate}
}
\subsection{Rank-nullity Theorem}
\deff{
	Let $A$ be an $m \times n$ matrix. The {\em{null space}} (or {\em{kernel}}) of $A$ is the subspace of $\RR^n$ consisting of solutions of the homogeneous linear system $A\x=\mathbf{0}$. It is denoted by {\em{null($A$)}}.
}
\deff{
	A {\em{basis}} for a subspace $S$ of $\RR^n$ is a set of vectors in $S$ that
	\begin{enumerate}[(1)]
		\item spans $S$ and
		\item is linearly independent. \footnote{It does not mean that they are orthogonal.}
	\end{enumerate}
}
\deff{
	If $S$ is a subspace of $\RR^n$, then the number of vectors in a basis for $S$ is called the {\em{dimension}} of $S$, denoted {\em{dim $S$}}. \footnote{The zero vector $\mathbf{0}$ is always a subspace of $\RR^n$. Yet any set containing the zero vector is linearly dependent, so $\mathbf{0}$ cannot have a basis. We define {\em{dim $\mathbf{0}$}} to be 0.}
}
\deff{
	The {\em{rank}} of a matrix $A$ is the dimension of its row and column spaces and is denoted by {\em{rank($A$)}}. \footnote{The row and column spaces of a matrix $A$ have the same dimension.}
}
\deff{
	The {\em{nullity}} of a matrix $A$ is the dimension of its null space and is denoted by {\em{nullity($A$)}}.
}
\thm{
	The Rank Theorem. If $A$ is an $m \times n$ matrix, then $$rank(A) + nullity(A) = n$$.
}
\thm{
	If $A$ is invertible, then $A$ is a product of elementary matrices.
}
\thm{
	Let $A$ be an $m \times n$ matrix. Then $rank(A^TA) = rank(A)$.
}
\deff{
	Let $S$ be a subspace of $\RR^n$ and let $B=\{\v_1,\cdots,\v_k\}$ be a basis for $S$. Let $\v$ be a vector in $S$, and write $\v = c_1\v_1 + \cdots + c_k\v_k$. Then $c_1,\cdots,c_k$ are called the coordinates of $\v$ with respect to $B$, and the column vector $$[\v]_B = [c_1,\cdots,c_k]^T$$ is called the coordinate vector of $\v$ with respect to $B$. \footnote{This coordinate vector is unique.}
}
\deff{
	A transformation $T: \RR^n \to \RR^m$ is called a linear transformation if $$T(c_1\v_1 + c_2\v_2) = c_1T(\v_1) + c_2T(\v_2)$$ for all $\v_1, \v_2$ in $\RR^n$ and scalars $c_1, c_2$.
}
\subsection{Bases and Dimension}
\subsection{Coordinates}
\subsection{Eigenvalues and Eigenvectors}
\rmk{
	eigenvectors are non-zero.
}

\deff{
	The set of all eigenvectors corresponding to the same eigenvalue, together with the zero vector, is called an {\em{eigenspace}}.
}

\deff{
	The characteristic polynomial of a matrix $\A$ of order $n$ is
	\begin{align}
		|\A - \lambda\I| = \prod_{i=1}^n (\lambda - \lambda_i)
	\end{align}
}

\thm{
	Every square matrix of order $n$ has $n$ eigenvalues, possibly complex and not necessarily all unique.
}

\deff{
	The algebraic multiplicity $\mu_A(\lambda_i)$ of a eigenvalue $\lambda_i$ is the multiplicity as a root of the characteristic polynomial.
}

\deff{
	The eigenspace $E_{\lambda_i}$ associated with $\lambda_i$ is defined as
	\begin{align}
		E_{\lambda_i} = \{\v : (\A-\lambda_i \I)\v = 0 \}
	\end{align}
}

\deff{
	The dimension of the eigenspace $\E_{\lambda_i}$ is referred to as the geometric multiplicity $\gamma_A(\lambda_i)$ of $\lambda_i$.
}


\subsection{Solving a Linear System of Equations}
\thm{
	If $A = \left[\begin{matrix}a & b\\ c & d\end{matrix}\right]$, then $A$ is invertible if $ad-bc\ne 0$, in which case $$A^{-1} = \frac{1}{ad-bc} \left[\begin{matrix}d & -b\\ -c & a\end{matrix}\right]$$
}
\begin{rmk}
	Three ways to solve a system of linear equations: by elimination, by determinants {\color{red}{(Cramer's Rule???)}}, or by matrix decomposition.
\end{rmk}

\begin{rmk}
	We prefer to use matrix decomposition to solve a linear system because
	\begin{enumerate}
		\item It takes $\mathcal{O}(n^3)$ to factorize, but once done it can be used to solve systems with different $\b$ (right hand side).
		\item It is numerically more stable than computing $\A^{-1}\b$.
		\item For a sparse matrix, the inverse may be dense and may hard to store in memory. Decomposition can overcome this problem.
	\end{enumerate}
\end{rmk}

\rmk{
	Cofactors and Minors. Laplace’s Theorem.
}

\begin{rmk}
	The computation of elimination is $\mathcal{O}(n^3)$, but can be (non-trivially) reduced to $\mathcal{O}(n^{\log_27})$.
\end{rmk}

\subsection{The Vector Spaces of a Matrix}
\begin{rmk}
	$Ax$ is a combination of the {\em{columns}} of $A$. $b^TA$ is a combination of the {\em{rows}} of $A$. Row picture can be seen as interchapter of (hyper-)planes. Column picture can be seen as combination of columns.
\end{rmk}

\begin{rmk}
	There are three different ways to look at matrix multiplication:
	\begin{enumerate}
		\item Each entry of $AB$ is the product of a row (of $A$) and a column (of $B$)
		\item Each {\em{column}} of $AB$ is the product of a matrix (of $A$) and a column (of $B$)
		\item Each {\em{row}} of $AB$ is the product of a row (of $A$) and a matrix (of $B$)
	\end{enumerate}
\end{rmk}

\begin{rmk}
	Column space is perpendicular to the left null space. Row space is perpendicular to the null space.
\end{rmk}



\section{Matrix Calculus and Computations}
\subsection{Linear Forms: One Vector as Argument}
\subsection{Bilinear and Quadratic Forms: Two Vectors as Argument}
\subsection{Basic Operations}
\subsubsection{Inner Product (Dot Product)}
\deff{$$\u \otimes \v = \u \v^T$$}
\rmk{The inner product is the trace of the outer product.}
\subsubsection{Outer Product}
\subsubsection{Cross Product}
\deff{$$\a \times \b = \|\a\| \|\b\| sin(\theta) \n$$ It is also called the vector product.}
\subsubsection{Scalar Triple Product}
\subsubsection{Vector Triple Product}
\subsubsection{Line, Surface, and Volume Integrals}

\subsection{Matrix Inverse: Binomial inverse theorem, Schur Complement, Blockwise Inversion}
\begin{rmk}
	$\mathbf{A}^{-1} = \begin{bmatrix}
a & b \\ c & d \\
\end{bmatrix}^{-1} =
\frac{1}{\det{\mathbf{A}}} \begin{bmatrix}
\,\,\,d & \!\!-b \\ -c & \,a \\
\end{bmatrix} =
\frac{1}{ad - bc} \begin{bmatrix}
\,\,\,d & \!\!-b \\ -c & \,a \\
\end{bmatrix}$
\end{rmk}

Usually, $|\A\B| \ne |\B\A|$. For example
\ex{
    \begin{align*}
        \begin{vmatrix}\left[\begin{matrix}1 ~~ 1\end{matrix}\right] \left[\begin{matrix}0 \\ 1\end{matrix}\right]\end{vmatrix} = \begin{vmatrix}1\end{vmatrix} = 1
    \end{align*}

    \begin{align*}
        \begin{vmatrix}\left[\begin{matrix}0 \\ 1\end{matrix}\right] \left[\begin{matrix}1 ~~ 1\end{matrix}\right]\end{vmatrix} = \begin{vmatrix}\left[\begin{matrix}0 ~~ 0 \\ 1 ~~ 1\end{matrix}\right]\end{vmatrix} = 0
    \end{align*}
}

However, the {\bf{Sylvester's Determinant Theorem}} says, as long as $\A\B$ and $\B\A$ are both square matrices,
\begin{align}
    \begin{vmatrix}\I+\A\B\end{vmatrix} = \begin{vmatrix}\I+\B\A\end{vmatrix}
\end{align}

It is also not true in general that
\begin{align*}
    \begin{vmatrix}\left[\begin{matrix}\A ~~ \B \\ \C ~~  \D\end{matrix}\right]\end{vmatrix} = \begin{vmatrix}\A\D-\B\C\end{vmatrix}
\end{align*}
unless $\C$ and $\D$ are commutable, i.e., $\C\D = \D\C$. The general formula for block determinant is
\begin{align}
    \begin{vmatrix}\left[\begin{matrix}\A ~~ \B \\ \C ~~  \D\end{matrix}\right]\end{vmatrix} = \begin{vmatrix}\A\end{vmatrix}\begin{vmatrix}\D - \C\A^{-1}\B\end{vmatrix}
\end{align}
which is based on Schur complement.




\section{Principal Component Analysis (PCA)}\index{PCA}
Algebraically, principal components are particular linear combinations of the $p$ random variables $X_1, \cdots, X_p$. Geometrically, these linear combinations represent the selection of a new coordinate system obtained by rotating the original system with $X_1, \cdots, X_p$ as the coordinate axes.

Consider an $n \times p$ data matrix $\X$, where each row is an observation and each column is a \emph{centered} feature vector. Mathematically, the transformation is defined by a set of $p$-dimensional vectors of coefficients $\w_k$
\begin{align*}
	\w_1 = \mbox{argmax}_{||\w|| = 1}(||\X\w||^2)
\end{align*}

