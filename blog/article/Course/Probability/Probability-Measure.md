# Probability

# Measure

$$\sigma$$**-algebra**
Let $$\Omega$$ be a set and $$\Sigma\subseteq2^\Omega$$. $$\Sigma$$ is a $$\sigma$$-algebra over $$\Omega$$ if

1. $$\Omega\in\Sigma$$
2. If $$E\in\Sigma$$, then $$E^c\in\Sigma$$
3. If $$E_n\in\Sigma$$ for $$n\in\mathbb{N}$$, then $$\cup_{n=1}^\infty E_n\in\Sigma$$

Then, the pair $$(\Omega,\Sigma)$$ is a measurable space.
**Measure space**
Let $$\mu:\Sigma\to[0,\infty]$$ be a countably additive function, i.e. $$\mu(\displaystyle\bigcup_{n=1}^\infty E_n)=\displaystyle\sum_{n=1}^\infty\mu(E_n)$$
 where each $$E_n\in\Sigma$$ and $$E_i\cap E_j=\emptyset$$ if $$j\neq k$$.
 Then, $$\mu$$ is a measure and the triple $$(\Omega,\Sigma,\mu)$$ is a measure space.
**Measurable function**
 Let $$(X,\Sigma_X)$$ and $$(Y,\Sigma_Y)$$ be two measurable space. $$f:X\to Y$$ is a measurable function if
 for every $$Y$$-measurable set $$B\in\Sigma_Y$$, the preimage is a $$X$$-measurable set, i.e. $$f^{-1}(B)\in\Sigma_X$$.
**Borel** $$\sigma$$**-algebra**
 $$C\subseteq 2^\Omega$$
 $$\sigma(C)=\cap\{F_j:\sigma\text{-field over }\Omega|F_j\supseteq C\}$$
 $$C_k=\{I_1\times\cdots\times I_k|I_1,\ldots,I_k\text{ intervals in }\mathbb{R}\}$$
 $$\mathcal{B}^k=\sigma(C_k)$$

# Probability Space 

A probability space is a measure space with total measure one.
The standard notation is $$(\Omega,\mathcal{F},P)$$ where

1. $$\Omega$$ is a set which is called a sample space. Elements of $$\Omega$$, denoted by $$\omega$$, are called outcomes.
2. $$\mathcal{F}$$ is a $$\sigma$$-algebra of subsets of $$\Omega$$. Sets in $$\mathcal{F}$$ are called events.
3. $$P$$ is a countably additive function from $$\mathcal{F}$$ to $$[0,1]$$ with $$P(\Omega)=1$$. $$P(E)$$ is said to be the probability of $$E$$.
# Random Variable

Let $$(\Omega,\mathcal{F},P)$$ be a probability space and $$\mathcal{B}$$ be a Borel field. $$X$$ is a random variable over $$\Omega$$ if $$X:\Omega\to\mathbb{R}$$ is a measurable function s.t. $$X^{-1}(B)\in\mathcal{F}$$ for $$B\in\mathcal{B}$$.
Let $$P_X:\mathcal{B}\to [0,1]$$ be a function s.t. $$P_X(B)=P\{X\in B\}=P(X^{-1}(B))$$ for $$B\in\mathcal{B}$$.
Then, $$(\mathbb{R},\mathcal{B},P_X)$$ is a probability space where the probability measure $$P_X$$ is the probability distribution function of the random variable.

https://d2mxuefqeaa7sj.cloudfront.net/s_065D2DCD82BA9CB4BFD078BEC94B6396C8F76B6AA1EBAF68A182E0DDBFDB1D96_1485063937704_file.png

- $$X$$ is a r.v. iff $$\forall t\in\mathbb{R}$$, $$\{\omega\in\Omega|X(\omega)<t\}\in\mathcal{F}$$

**Theorem**

- $$X$$ is conti. r.v. iff $$\forall x\in\mathbb{R}$$, $$P\{X=x\}=0$$
- $$X$$ is an abs. conti. r.v. if $$\forall\varepsilon>0,\exists\delta>0$$ s.t. $$\forall a_1,b_1,\ldots,a_n,b_n\in\mathbb{R}, a_1<b_1<\cdots<a_n<b_n$$, $$\sum_{j=1}^n(b_j-a_j)<\delta\Rightarrow\sum_{j=1}^n|F_X(b_j)-F_X(a_j)|<\varepsilon$$
- $$X$$ is an abs. conti. r.v. iff $$\exists$$ Lebesgue-integrable function $$f_X:\mathbb{R}\to\mathbb{R}^+$$ s.t. $$P_X\{X\in B\}=\displaystyle\int_B f_X(x)\,dx$$ for $$B\in\mathcal{B}$$
# Random Vector

Let $$(\Omega,\mathcal{F},P)$$ be a probability space and $$\mathcal{B}^k$$ be a k-dimensional Borel field. $$X$$ is a random vector over $$\Omega$$ if $$X:\Omega\to\mathbb{R}^k$$ is a measurable function s.t. $$X^{-1}(B)\in\mathcal{F}$$ for $$B\in\mathcal{B}^k$$.
Let $$P_X:\mathcal{B}^k\to [0,1]$$ be a function s.t. $$P_X(B)=P\{X\in B\}=P(X^{-1}(B))$$ for $$B\in\mathcal{B}^k$$.
Then, $$(\mathbb{R},\mathcal{B}^k,P_X)$$ is a probability space where the probability measure $$P_X$$ is the probability distribution function of the random vector.

- $$X=(X_1,\ldots,X_k)$$ is discrete r.v. iff. $$X_1,\ldots,X_k$$ are discrete r.v.
- $$X$$ is conti. r.v. if $$\forall x\in\mathbb{R}^k$$, $$P\{X=x\}=0$$
- $$X$$ is an abs. conti. if $$\exists$$ Lebesgue-integrable function $$f_X:\mathbb{R}^k\to\mathbb{R}^+$$ s.t. $$P_X\{X\in B\}=\displaystyle\int_B f_X(x)\,dx$$ for $$B\in\mathcal{B}^k$$

