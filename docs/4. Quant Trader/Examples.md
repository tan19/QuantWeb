# Examples

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

!!! Question "Ex. 2.1"
	Suppose each of $K$-classes has associated target $t_k$, which is a vector of all zeros, except a one in the $k$-th position. Show that classifying to the largest of $\hat y$ amounts to choosing the closet target, $\min_k\|t_k-\hat y\|$, if the elements of $\hat y$ sum to one.

asdfasd
asdfasd


!!! done "Soln. 2.1" 

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
