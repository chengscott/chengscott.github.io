# Discrete Random Variable

## $$P_X$$ distribution of r.v. $$X$$
1. $$P_X\{X\in B\}=P\{\omega|X(\omega)\in B\}$$
- $$P_X\{X\in A\}=\sum_{x\in\mathcal{X}\cap A} f_X(x)$$
- $$P_X\{X>x\}=1-F_X(x)$$
- $$P_X\{a<X\leq b\}=F_X(b)-F_X(a)$$
## $$f_X$$ p.m.f. of r.v. $$X$$ with range $$\mathcal{X}$$
- $$f_X(x)=P_X\{X=x\}$$
- $$f_X(x)=F_X(x)-F_X(x-)$$

if, and only if

1. $$f_X(x)\geq0$$ for all $$x\in\mathbb{R}$$
2. $$f_X(x)=0$$ for $$x\notin\mathcal{X}$$
3. $$\sum_{x\in\mathcal{X}}f_X(x)=1$$
## $$F_X$$ c.d.f. of r.v. $$X$$ with range $$\mathcal{X}$$
- $$F_X(x)=P_X\{X\leq x\}$$
- $$F_X(x)=\sum_{x_i\in\mathcal{X}, x_i\leq x}f_X(x_i)$$

if, and only if

1. $$F_X(x)$$ is non-decreasing i.e. $$F_X(a)\leq F_X(b)$$ for $$a<b$$
2. $$F_X(x)=F_X(x+)\equiv\displaystyle\lim_{t\downarrow x}F_X(t)$$ conti. from right
3. $$\displaystyle\lim_{x\rightarrow\infty}F_X(x)=1$$, $$\displaystyle\lim_{x\rightarrow-\infty}F_X(x)=0$$
## Theorem

**Theorem (Transformation)**
Suppose $$f_X$$ p.m.f. of r.v. $$X$$ with range $$\mathcal{X}$$ and $$Y=g(X)$$, then
$$f_Y(y)=\displaystyle\sum_{x\in\mathcal{X}, g(x)=y}f_X(x)$$
**Theorem**
Suppose $$f_X$$ p.m.f. of r.v. $$X$$ with range $$\mathcal{X}$$ then

- Expectation of $$X$$: $$\mu_X=E(X)=\sum_{x\in\mathcal{X}}xf_X(x)$$
- Variance of $$X$$: $$\sigma_X^2=Var(X)=E\left((X-\mu_X)^2\right)=\sum_{x\in\mathcal{X}}(x-\mu_X)^2f_X(x)$$
- Standard deviation of $$X$$: $$\sigma_X=\sqrt{\sigma_X^2}$$
- $$E(aX+b)=aE(X)+b$$
- $$Var(aX+b)=a^2Var(X)$$
- $$E\left((X-c)^2\right)=E\left((X-\mu_X)^2\right)+(\mu_X-c)^2$$
- $$\sigma_X^2=E(X^2)-E(X)^2$$

**Theorem (Transformation)**
Suppose $$f_X$$ p.m.f. of r.v. $$X$$ with range $$\mathcal{X}$$ and $$f_Y$$ p.m.f. of r.v. $$Y=g(X)$$ with range $$\mathcal{Y}$$, then
$$E(g(X))=E(Y)=\displaystyle\sum_{x\in\mathcal{X}}g(x)f_X(x)$$
given that con. abs.

# Distribution
## X~Binomial(n, p)

$$f_X=\binom{n}{x}p^x(1-p)^{n-x}$$
$$E(X)=np$$
$$Var(X)=np(1-p)$$

- Bernoulli(p) = Binomial(1, p)
- with replacement
## X~NegativeBinomial(r, p)

$$f_X=\binom{x-1}{r-1}p^r(1-p)^{x-r}$$
$$E(X)=\frac{r}{p}$$
$$Var(X)=\frac{r(1-p)}{p^2}$$

- Geometric(p) = NegativeBinomial(1, p)
- NegativeBinomial(r, p) $$\{X_n<r\}=\{Y_r>n\}$$ Binomial(n, p)
## X~Poisson($$\lambda$$)

$$f_X=\frac{\lambda^x}{x!}e^{-\lambda}$$
$$E(X)=\lambda$$
$$Var(X)=\lambda$$

## X~Hypergeometric(n, N, R)

$$f_X=\frac{\binom{R}{x}\binom{N-R}{n-x}}{\binom{N}{n}}$$
$$E(X)=n\frac{R}{N}$$
$$Var(X)=n\frac{R(N-R)(N-n)}{N^2(N-1)}$$

- without replacement

