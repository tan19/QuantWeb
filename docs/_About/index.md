---
hide:
    - navigation
    - toc
---
# Markdown Examples

$$
\underbrace{\A}_{=0} = 0
$$

<a href="https://oi-wiki.org/" target="_blank">OI Wiki</a>

--8<-- "includes/abbreviations.md"

=== "Python"
    ``` python hl_lines="2 3"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```

=== "C++"
    ``` C++
    void f() {

    }
    ```

=== "Java"
    ``` Java
    void f() {

    }
    ```

The `#!python range()` function is highlighted.

!!! Question "Ex. 2.1"
	Suppose each of $K$-classes has associated target $t_k$, which is a vector of all zeros, except a one in the $k$-th position. Show that classifying to the largest of $\hat y$ amounts to choosing the closet target, $\min_k\|t_k-\hat y\|$, if the elements of $\hat y$ sum to one.
???+ done "Soln. 2.1" 

	We need to prove:

	\begin{equation}
	\underset{k}{\operatorname{argmax}} \hat y_k = \underset{k}{\operatorname{argmin}} \|t_k-\hat y\|^2             
	\label{eq:2-1a}
	\end{equation}

	By definition of $t_k$, we have

	\begin{align}
		\|t_k-\hat y\|^2 
		&= (1-\hat y_k)^2 + \sum_{l \neq k }(0 - \hat y_l)^2\nonumber\\
		&= (1-\hat y_k)^2 + \sum_{l \neq k }\hat y_l^2
		\label{eq:2-1b}
	\end{align}


	Given $\eqref{eq:2-1b}$, it's straightforward to see that $\eqref{eq:2-1a}$ indeed holds.

    === "Python"
    ``` python hl_lines="2 3"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```
    === "C++"
    ``` C++
    void f() {

    }
    ```

The `#!python range()` function is highlighted.


!!! info inline
	The assumption $\sum_{k=1}^K\hat y_k=1$ is actually not required.
    [CAPM]: Capital Asset Pricing Model
asdfasdfasdfa 
asdfasd 
asdfasd
adddasdfasdfasdfa 
asdfasd 
asdfasd
adddasdfasdfasdfa 
asdfasd 
asdfasd
addd

asdfasdfasdfa 
asdfasd 
asdfasd
addd

asdfasdfasdfa 
asdfasd 
asdfasd
addd

!!! info inline end
	The assumption $\sum_{k=1}^K\hat y_k=1$ is actually not required.
    [CAPM]: Capital Asset Pricing Model
=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci



!!! example

    === "Unordered List"

        _Example_:

        ``` markdown
        * Sed sagittis eleifend rutrum
        * Donec vitae suscipit est
        * Nulla tempor lobortis orci
        ```

        _Result_:

        * Sed sagittis eleifend rutrum
        * Donec vitae suscipit est
        * Nulla tempor lobortis orci

    === "Ordered List"

        _Example_:

        ``` markdown
        1. Sed sagittis eleifend rutrum
        2. Donec vitae suscipit est
        3. Nulla tempor lobortis orci
        ```

        _Result_:

        1. Sed sagittis eleifend rutrum
        2. Donec vitae suscipit est
        3. Nulla tempor lobortis orci        


| Method      | Description                          |
| ----------- | ------------------------------------ |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |


Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.[^2]

<figure>
  <img src="https://dummyimage.com/600x400/eee/aaa" width="300" />
  <figcaption>Image caption</figcaption>
</figure>

[^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
[^2]:
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.


>>> My Favorite Introductory Reading List <<<

- Finance (Economics; Derivatives; Pricing Tools)
-- Microeconomic Theory, by Andreu Mas-Colell, Michael D. Whinston, Jerry R. Green.
-- Lectures on Macroeconomics, by Olivier Blanchard, Stanley Fischer.
-- Options, Futures, and Other Derivatives, by John C Hull.
-- Arbitrage Theory in Continuous Time, by Tomas Bjork.
-- Stochastic Calculus for Finance I & II, by Steven Shreve.

- Mathematics (Analysis; Algebra; Geometry; Differential Equations)
-- Calculus, by James Stewart.
-- Principles of Mathematical Analysis, by Walter Rudin.
-- Real Variables, by Alberto Torchinsky.
-- Visual Complex Analysis, by Tristan Needham.
-- Introductory Functional Analysis with Applications, by Erwin Kreyszig.
-- Linear Algebra and Its Applications, by Gilbert Strang.
-- Linear Algebra, by Kenneth M Hoffman, Ray Kunze.
-- Algebra, by Michael Artin.
-- Differential Geometry, by Erwin Kreyszig.
-- Topology Without Tears, by Sidney A. Morris.
-- Ordinary Differential Equations, by Morris Tenenbaum and Harry Pollard.
-- Partial Differential Equations, by Lawrence C. Evans.

- Statistics (Random Variables; Stochastic Processes; Models; Theory; Machine Learning)
-- A First Course in Probability, by Sheldon Ross.
-- Stochastic Processes, by Sheldon Ross.
-- Applied Linear Statistical Models, by Michael H. Kutner, John Neter, Christopher J. Nachtsheim, William Li.
-- Generalized Linear Models, by P. McCullagh and John A. Nelder.
-- Probability: Theory and Examples, by Rick Durrett
-- Statistical Inference, by George Casella and Roger L. Berger.
-- Pattern Recognition and Machine Learning, by Christopher Bishop.
-- Machine Learing, by Kevin Murphy.

- Optimization (Linear; Nonlinear; Convex)
-- Introduction to Linear Optimization, by Dimitris Bertsimas, John N. Tsitsiklis.
-- Nonlinear Programming, by Dimitri Bertsekas.
-- Linear and Nonlinear Optimization, by David G. Luenberger and Yinyu Ye.
-- Numerical Optimization, by Jorge Nocedal, Stephen Wright.
-- Introductory Lectures on Convex Optimization: A Basic Course, by Y. Nesterov.
-- Convex Optimization, by Stephen Boyd, Lieven Vandenberghe.

- Computer Science (System, OS, Network; Algorithms; Coding)
-- Computer Systems: A Programmer's Perspective, by Randal E. Bryant, David R. O'Hallaron.
-- Operating System Concepts, by Abraham Silberschatz, Peter B. Galvin, Greg Gagne.
-- Computer Networking: A Top-Down Approach, by James F. Kurose and Keith W. Ross.
-- Introduction to Algorithms, by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein.
-- C++ Primer, by Stanley B. Lippman, Josée Lajoie, Barbara E. Moo.
-- Thinking in Java, by Bruce Eckel.
