# Logic Brainteasers

!!! Question "Q: Pirates (Brainteaser; Green Book; Black Book; D. E. Shaw)"
	Five pirates looted a chest full of 100 gold coins. Being a bunch of democratic pirates, they agree on the following method to divide the loot: The most senior pirate will propose a distribution of the coins. All pirates, including the most senior pirate, will then vote. If at least 50% of the pirates (3 pirates in this case) accept the proposal, the gold is divided as proposed. If not, the most senior pirate will be fed to shark and the process starts over with the next most senior pirate. The process is repeated until a plan is approved. You can assume that all pirates are perfectly rational: they want to stay alive first and to get as much gold as possible second. Finally, being blood-thirsty pirates, they want to have fewer pirates on the boat if given a choice between otherwise equal outcomes. How will the gold coins be divided in the end?
	
	Now, what if there are 6 pirates instead. So the premise is that there are 6 pirates and you are the captain. You must divide the coins. If 50% of the people rebel against your allocation, they kill you and the process starts again. What is the optimal allocation? Exceed 50%?
	({\bf{Green Book, page 3; Black Book, page 8}})
??? Done "A: Pirates" 
	For n pirates, so long as n//2+1 pirates get greater than or equal to what they would have gotten with n-1 pirates, they will not defect (assuming they are entirely logical and will not protest getting equal to what they would get with n-1 pirates).
	Backsolving:
	1 pirate: {100}
	2 pirates: {0,100}
	3 pirates: {99, 1, 0}
	4 pirates: {98, 0, 1, 1}
	5 pirates: {98, 0, 1, 0, 1} (or {98, 0, 1, 1, 0})
	6 pirates: {97, 0, 1, 1, 1, 0} (or {97, 0, 0, 1, 1, 1}, etc)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

!!! Question "Q: Gas Station (Blue Book; Math Induction)"
Suppose you are on a one-way 100-mile circular race track and there are $N$ gas stations at different locations. Assume that your car has no gas initially and the total gas stored in these gas stations exactly let you to finish 100 miles. By placing your car at any location you want, is it always possible to finish the circle?
??? Done "A: Gas Station (Blue Book; Math Induction)" 
	Yes. By math induction, it reduces to a two-gas-station problem.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
!!! Question "Q: Ant Messagers (Brainteaser; 150 Book)"
Alice and Bob stand at opposite ends of a straight line segment. Bob sends 50 ants towards Alice, one after another. Alice sends 20 ants towards Bob, one after another. Whenever two ants collide, they bounce back and start traveling in the opposite direction. How many ants reach Bob and how many ants reach Alice? How many ant collisions take place?	(150 Book, page 1)
??? Done "A: Ant Messagers (Brainteaser; 150 Book)" 
	Imagine the ants switch identities when they met, or even simpler, they walk parallelly in two lines and never collide at all. So Alice would receive 50 ants and Bob would receive 20 ants. There are $20 \times 50 = 1000$ collisions take place.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
!!! Question "Q: Bug in the Room (Brainteaser)"
There is a bug in the corner of a 1x1x1 room. The bug cannot fly and must walk to the most opposite corner. What is the shortest path it needs to travel?
??? Done "A: Bug in the Room (Brainteaser)" 
	You can unfold the cube in a cross like shape. A line is the shortest distance between 2 points. This is the hypotenuse of the triangle with base 2 and height 1. Thus, the shortest distance is $1^2 + 2^2 = c^2 \implies c = \sqrt{5}$.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
!!! Question "Q: Joseph Circle (Math Induction; Squarepoint; HRT)"
1000 people stand in a circle with label from 1 to 1000, first person has a sword and kills the 2nd person before passing the sword to the 3rd person and repeat the process until one survives, tell me the position of the survival.
??? Done "A: Joseph Circle (Math Induction; Squarepoint; HRT)" 
	\begin{align*}
		f(n) = 
		\begin{cases}
		2f\left(\frac{n}{2}\right) - 1, ~~ \mbox{if $n$ is even}\\
		\\
		2f\left(\frac{n-1}{2}\right) + 1, ~~ \mbox{if $n$ is odd}
		\end{cases}
	\end{align*}