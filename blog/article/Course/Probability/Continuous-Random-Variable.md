# Continuous Random Variable

## $$P_X$$ distribution of r.v. $$X$$
1. $$P_X\{X\in B\}=\displaystyle\int_B f_X(x)\,dx$$
- $$P_X\{a<X\leq b\}=\displaystyle\int_a^b f_X(x)\,dx$$
- $$P_X\{a<X\leq b\}=F_X(b)-F_X(a)$$
## $$f_X$$ p.d.f. of r.v. $$X$$
1. $$f_X(x)\geq 0$$ $$\forall x\in\mathbb{R}$$
2. $$\displaystyle\int_{-\infty}^\infty f_X(x)\,dx=1$$
- abs. continuous non-decreasing
- $$f_X(x)=\displaystyle\frac{d}{dx}F_X(x)$$ at continuity points of $$f_X$$
## $$F_X$$ c.d.f. of r.v. $$X$$
- $$F_X(x)=P_X\{X\leq x\}$$
- $$F_X(x)=\displaystyle\int_{-\infty}^x f_X(t)\,dt$$
## Theorem

**Theorem (Transformation)**
Suppose $$f_X$$ p.d.f. of r.v. $$X$$ and $$Y=g(X)$$ with range $$\mathcal{Y}$$ where $$g$$ is diff. and monotonic, then
$$f_Y(y)=f_X(g^{-1}(y))|\frac{dg^{-1}(y)}{dx}|$$
**Theorem (Transformation)**
Suppose $$F_X$$ c.d.f. of r.v. $$X$$ and $$Y=g(X)$$ with range $$\mathcal{Y}$$ where $$g$$ is diff. and monotonic, then

1. $$g$$ is increasing: $$F_Y(y)=F_X(g^{-1}(y))$$
2. $$g$$ is decreasing: $$F_Y(y)=1-F_X(g^{-1}(y)-)$$

**Theorem**
Suppose $$f_X$$ p.d.f. of r.v. $$X$$ then

- expectation of $$X$$: $$\mu_X=E(X)=\displaystyle\int_{-\infty}^\infty xf_X(x)\,dx$$
- variance of $$X$$: $$\sigma_X^2=Var(X)=E\left((X-\mu_X)^2\right)=\displaystyle\int_{-\infty}^\infty (x-\mu_X)^2f_X(x)\,dx$$
- standard deviation of $$X$$: $$\sigma_X=\sqrt{\sigma_X^2}$$
- $$E(aX+b)=aE(X)+b$$
- $$Var(aX+b)=a^2Var(X)$$
- $$\sigma_X^2=E(X^2)-E(X)^2$$
# Distribution
## X~Uniform($$\alpha$$, $$\beta$$)

$$$$$$f_X(x)=\begin{cases} \frac{1}{\beta-\alpha} & \text{if }\alpha<x\leq\beta \\ 0 & \text{otherwise} \end{cases}$$
$$F_x(x)=\begin{cases} 0 & \text{if }x\leq\alpha \\ \frac{x-\alpha}{\beta-\alpha} & \text{if }\alpha<x\leq\beta \\ 0 & \text{if}x>\beta \end{cases}$$
$$E(X)=\frac{\alpha+\beta}{2}$$
$$Var(X)=\frac{(\beta-\alpha)^2}{12}$$

## X~Exponential($$\lambda$$)

$$f_X(x)=\begin{cases} \lambda e^{-\lambda x} & \text{if }x\geq 0 \\ 0 & \text{if }x<0 \end{cases}$$
$$F_X(x)=\begin{cases} 1-e^{-\lambda x} & \text{if }x\geq 0 \\ 0 & \text{if }x<0 \end{cases}$$
$$E(X)=\frac{1}{\lambda}$$
$$Var(X)=\frac{1}{\lambda^2}$$

## X~Gamma($$\alpha$$, $$\lambda$$)

$$f_X(x)=\begin{cases} \frac{\lambda^\alpha}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x} & \text{if }x\geq 0 \\ 0 & \text{if }x<0 \end{cases}$$
$$F_X(x)=\frac{1}{\Gamma(\alpha)}\displaystyle\int_0^{\lambda x}x^{\alpha-1}e^{-x}\,dx=\frac{\gamma(\alpha,\lambda x)}{\Gamma(\alpha)}$$
$$E(X)=\frac{\alpha}{\lambda}$$
$$Var(X)=\frac{\alpha}{\lambda^2}$$

- $$F_X(x)=1-\displaystyle\sum_{k=0}^{\alpha-1}\frac{e^{-\lambda x}(\lambda x)^k}{k!}$$ if $$\alpha$$ is integer
- $$\Gamma(\alpha)=\displaystyle\int_0^\infty x^{\alpha-1}e^{-x}\,dx$$
|                                     | discrete time     | continuous time |
| ----------------------------------- | ----------------- | --------------- |
| number of events                    | Binomial          | Poisson         |
| waiting time until 1st event occurs | Geometric         | Exponential     |
| waiting time until rth events occur | Negative Binomial | Gamma           |

- NegativeBinomial(r, p) $$\{X_n<r\}=\{Y_r>n\}$$ Binomial(n, p)
- Gamma($$\alpha$$, $$\lambda$$) $$\{X\leq x\}=\{Y\geq\alpha\}$$ Poisson($$\lambda x$$)
- NegativeBinomial(1, p) = Geometric(p)
- Gamma(1, $$\lambda$$) = Exponential($$\lambda$$)
## X~Beta($$\alpha$$, $$\beta$$)

$$f_X(x)=\begin{cases} \frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}x^{\alpha-1}(1-x)^{\beta-1} & \text{if }0\leq x\leq 1 \\ 0 & \text{otherwise} \end{cases}$$
$$F_X(x)=\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}\displaystyle\int_0^x t^{\alpha-1}(1-t)^{\beta-1}\,dt=\frac{B(x;\alpha,\beta)}{B(\alpha,\beta)}$$
$$E(X)=\frac{\alpha}{\alpha+\beta}$$
$$Var(X)=\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta-1)}$$

- $$F_X(x)=\displaystyle\sum_{i=\alpha}^{\alpha+\beta-1} \binom{\alpha+\beta-1}{i}x^i(1-x)^{(\alpha+\beta-1)-i}$$ if $$\alpha$$ and $$\beta$$ are integers
- Beta($$\alpha$$, $$\beta$$) $$\{X\leq x\}=\{Y\geq\alpha\}$$ Binomial($$\alpha+\beta-1$$, $$x$$)
- $$B(\alpha,\beta)=\displaystyle\int_0^1 x^{\alpha-1}(1-x)^{\beta-1}\,dx=\frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$$
## X~Normal($$\mu$$, $$\sigma^2$$)

$$f_X(x)=\frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
$$F_X(x)=\Phi(\frac{x-\mu}{\sigma})$$
$$E(X)=\mu$$
$$Var(X)=\sigma^2$$

- $$Y$$~N($$a\mu+b$$, $$a^2\sigma^2$$) where $$Y=aX+b$$
- $$Z$$~N(0, 1) where $$Z=\frac{X-\mu}{\sigma}$$
- $$\Phi(x)=\int_{-\infty}^x\frac{1}{\sqrt{2\pi}}e^{-\frac{t^2}{2}}\,dt$$ is the c.d.f. of N(0, 1)
## X~Weibull($$\alpha$$, $$\beta$$, $$\nu$$)

$$f_X(x)=\begin{cases} \frac{\beta}{\alpha}(\frac{x-\nu}{\alpha})^{\beta-1}e^{-(\frac{x-\nu}{\alpha})^\beta} & \text{if }x\geq\nu \\ 0 & \text{if }x<\nu \end{cases}$$
$$F_X(x)=\begin{cases} 1-e^{-(\frac{x-\nu}{\alpha})^\beta} & \text{if }x\geq\nu \\ 0 & \text{if }x < \nu \end{cases}$$
$$E(X)=\alpha\Gamma(1+\frac{1}{\beta})+\nu$$
$$Var(X)=\alpha^2\Gamma(1+\frac{2}{\beta})-\alpha^2\Gamma(1+\frac{1}{\beta})^2$$

- $$Y=\alpha(\lambda X)^\frac{1}{\beta}+\nu$$ where $$X$$~Exponential($$\lambda$$)
## X~Cauchy($$\mu$$, $$\sigma$$)

$$f_X(x)=\frac{\sigma}{\pi}\frac{1}{\sigma^2+(x-\mu)^2}$$
$$F_X(x)=\frac{1}{2}+\frac{1}{\pi}\arctan(\frac{x-\mu}{\sigma})$$

- $$aX+b$$~Cauchy($$a\mu+b$$, $$|a|\sigma$$)

