# Jointly Distributed Random Variable

## $$P_X$$ joint distribution of jointly distributed r.v. $$X$$
1. $$P_X\{X\in A\}=P\{\omega|(X_1(\omega),\ldots,X_n(\omega))\in A\}$$
- $$P_X\{X_1\in A_1,\ldots,X_n\in A_n\}=P(\{X_1\in A_1\}\cap\cdots\cap\{X_n\in A_n\})$$
- $$P_X\{X\in A\}=\sum_{x\in\mathcal{X}\cap A} f_X(x)$$
- $$P_X\{X\in B\}=\int_B f_X(x)\,dx$$
- marginal distribution $$P_{X_i}$$
## $$f_X$$ joint p.m.f. of jointly distributed r.v. $$X$$
- $$f_X(x_1,\ldots,x_n)=P_X\{X_1=x_1,\ldots,X_n=x_n\}$$
- $$f_X(x)=F_X(x)-F_X(x-)$$

if, and only if

1. $$f_X(x)\geq0$$ for $$x\in\mathbb{R}^n$$
2. $$f_X(x)=0$$ for $$x\notin\mathcal{X}$$ where $$\mathcal{X}$$countable set in $$\mathbb{R}^n$$
3. $$\sum_{x\in\mathcal{X}}f_X(x)=1$$
- joint p.m.f. of $$X_1,\ldots,X_k$$ $$f_{X_1,\ldots,X_k}(x_1,\ldots,x_k)=P_X\{X_1=x_1,\ldots,X_k=x_k\}=\displaystyle\sum_{(x_1,\ldots,x_n)\in\mathcal{X}, x_{k+1},\ldots,x_n\in\mathbb{R}} f_X(x_1,\ldots,x_k,x_{k+1},\ldots,x_n)$$
- marginal p.m.f. $$f_{X_i}(x)=P_X\{X_i=x\}=\displaystyle\sum_{(x,x_2,\ldots,x_n)\in\mathcal{X}, x_2,\ldots,x_n\in\mathbb{R}} f_X(x,x_2,\ldots,x_n)$$
## $$f_X$$ joint p.d.f. of jointly distributed r.v. $$X$$
1. $$f_X(x)\geq 0$$ $$\forall x\in\mathbb{R}^n$$
2. $$\displaystyle\int_{\mathbb{R}^n}f_X(x)\,dx=1$$
- $$f_X(x)=\displaystyle\frac{\partial^n}{\partial x_1\cdots\partial x_n}F_X(x)$$ at continuity points of $$f_X$$
- joint p.d.f. of $$X_1,\ldots,X_k$$ $$f_{X_1,\ldots,X_k}(x_1,\ldots,x_k)=\displaystyle\int_{-\infty}^\infty\cdots\int_{-\infty}^\infty f_X(x_1,\ldots,x_k,x_{k+1},\ldots,x_n)\,dx_{k+1}\cdots dx_n$$
- marginal p.d.f. $$f_{X_i}(x)=\displaystyle\int_{-\infty}^\infty\cdots\int_{-\infty}^\infty f_X(x,x_2,\ldots,x_n)\,dx_2\cdots dx_n$$
## $$F_X$$ joint c.d.f. of jointly distributed r.v. $$X$$
- $$F_X(x_1,\ldots,x_n)=P_X\{X_1\leq x_1,\ldots,X_n\leq x_n\}$$
- $$F_X(x_1,\ldots,x_n)=\displaystyle\sum_{(t_1,\ldots,t_n)\in\mathcal{X}, t_1\leq x_1,\ldots,t_n\leq x_n} f_X(t_1,\ldots,t_n)$$
- $$F_X(x_1,\ldots,x_n)=\displaystyle\int_{-\infty}^{x_n}\cdots\int_{-\infty}^{x_1} f_X(t)\,dt$$ $$\forall x\in\mathbb{R}$$

if, and only if

1. $$0\leq F_X(x)\leq 1$$ for $$x\in\mathbb{R}^n$$
2. $$\displaystyle\lim_{x_1,\ldots,x_n\to\infty} F_X(x_1,\ldots,x_n)=1$$
3. $$\displaystyle\lim_{x_i\to-\infty} F_X(x_1,\ldots,x_n)=0$$ for $$i=1,\ldots,n$$
4. $$F_X(x_1,\ldots,x_n)=\displaystyle\lim_{(t_1,\ldots,t_n)\downarrow(x_1,\ldots,x_n)}F_X(t_1,\ldots,t_n)$$ conti. from right
5. $$F_X(x_1,\ldots,x_n)\leq F_X(t_1,\ldots,t_n)\leq F_X(x_1',\ldots,x_n')$$ for $$x_i\leq x_i'$$  $$i=1,\ldots,n$$ for $$t_j\in\{x_j,x_j'\}$$ $$j=1,\ldots,n$$
- $$F_X(x_1<X_1\leq x_1',x_2<X_2\leq x_2')=F_{X_1,X_2}(x_1',x_2')-F_{X_1,X_2}(x_1',x_2)-F_{X_1,X_2}(x_1,x_2')+F_{X_1,X_2}(x_1,x_2)$$
- joint c.d.f. of $$X_1,\ldots,X_k$$$$F_{X_1,\ldots,X_k}(x_1,\ldots,x_k)=P_X\{X_1\leq x_1,\ldots,X_k\leq x_k\}=\displaystyle\lim_{x_{k+1},\ldots,x_n\to\infty} F_X(x_1,\ldots,x_k,x_{k+1},\ldots,x_n)$$
- marginal c.d.f $$F_{X_i}(x)=P_X\{X_i\leq x\}=\displaystyle\lim_{x_2,\ldots,x_n\to\infty} F_X(x,x_2,\ldots,x_n)$$
## X~Multinomial($$n,\,m,\,p_1,\,\ldots,\,p_m$$)

$$f_X(x_1,\ldots,x_n)=\displaystyle\binom{n}{x_1\,\ldots\,x_m}\,p_1^{x_1}\ldots p_m^{x_m}$$

- $$(X_1,\ldots,X_k,X_{k+1}+\cdots+X_n)$$~Multinomial($$n,\,m,\,p_1,\,\ldots,\,p_k,\,p_{k+1}+\cdots+p_m$$)
- $$X_i$$~Binomial($$n,\, p_i$$)
  - $$E(X_i)=np_i$$
  - $$Var(X_i)=np_i(1-p_i)$$

**Theorem**
Suppose $$X_1,\ldots,X_m$$ are independent and $$X_i$$~Poisson($$\lambda_i$$)
$$(X_1,\ldots,X_m|X_1+\cdots+X_m=n)$$~Multinomial($$n,\,m,\,p_1,\,\ldots,\,p_m$$)
where $$p_i=\frac{\lambda_i}{\lambda_1+\cdots+\lambda_m}$$ $$i=1,\ldots,m$$
Remark: $$X_1+\cdots+X_m$$~Poisson($$\lambda_1+\cdots+\lambda_n$$)

## Transformation

$$Y=g(X)=(g_1(X),\ldots,g_k(X))=(g_1(X_1,\ldots,X_n),\ldots,g_k(X_1,\ldots,X_n))$$
where $$g_j:\mathbb{R}^n\to\mathbb{R}$$ $$j=1,\ldots,k$$ and $$g=(g_1,\ldots,g_k):\mathbb{R}^n\to\mathbb{R}^k$$

- $$P_Y(Y\in B)=P_X(X\in g^{-1}(B))$$
- $$f_Y(y_j)=\displaystyle\sum_{x_i\in\mathcal{X}, g(x_i)=y_j}f_X(x_i)$$
- $$f_Y(y)=f_X(g^{-1}(y))|J|$$ where $$J=\left|\left[\frac{\partial g^{-1}_i(y)}{\partial y_j}\right]_{n\times n}\right|$$, $$J^{-1}=\left|\left[\frac{\partial g_i}{\partial x_j}\right]_{n\times n}\right|$$
## Independent Random Variable
- $$P_X(\{X_{k+1}\in A_{k+1},\ldots,X_n\in A_n\}|\{X_1\in A_1,\ldots,X_k\in A_k\})=P_X\{X_{k+1}\in A_{k+1},\ldots,X_n\in A_n\}$$

**Theorem (Independence)**
If $$X_1,\ldots,X_n$$ are independent, then T.F.A.E.

- $$P_X\{X_1\in A_1,\ldots,X_n\in A_n\}=P\{X_1\in A_1\}\times\cdots\times P\{X_n\in A_n\}$$
- $$f_X(x_1,\ldots,x_n)=f_{X_1}(x_1)\times\cdots\times f_{X_n}(x_n)$$
- $$F_X(x_1,\ldots,x_n)=F_{X_1}(x_1)\times\cdots\times F_{X_n}(x_n)$$
- $$\exists g_i:\mathbb{R}\to\mathbb{R}$$ s.t. $$f_X(x_1,\ldots,x_n)\propto g_1(x_1)\times\cdots\times g_n(x_n)$$

**Theorem**
Suppose $$X, Y$$ are independent and $$Z=X+Y$$ then
joint p.m.f. $$f_Z(z)=\sum_{x\in\mathcal{X}_X}f_X(x)f_Y(z-x)$$
joint p.d.f. $$f_Z(z)=\int_{-\infty}^\infty f_X(x)f_Y(z-x)\,dx$$
joint c.d.f. $$F_Z(z)=\int_{-\infty}^\infty f_X(x)F_Y(z-x)\,dx$$
**Theorem (i.i.d.)**
Suppose $$X_1,\ldots,X_n$$ are independent
$$X_1+\cdots+X_n$$~Poisson($$\lambda_1+\cdots+\lambda_n$$) where $$X_j$$~Poisson($$\lambda_j$$) $$j=1\ldots n$$
$$X_1+\cdots+X_n$$~Gamma($$\alpha_1+\cdots+\alpha_n$$, $$\lambda$$) where $$X_j$$~Gamma($$\alpha_j$$, $$\lambda$$) $$j=1\ldots n$$
$$X_1+\cdots+X_n$$~Gamma($$n$$, $$\lambda$$) where $$X_j$$~Exponential($$\lambda$$) $$j=1\ldots n$$
$$X_1+\cdots+X_n$$~Normal($$\mu_1+\cdots+\mu_n$$, $$\sigma_1^2+\cdots+\sigma_n^2$$) where $$X_j$$~Normal($$\mu_j,\sigma_j^2$$) $$j=1\ldots n$$
**Theorem**
Suppose $$X, Y$$ are independent and $$Z=\frac{Y}{X}$$ then
$$f_Z(z)=\int_{-\infty}^\infty |x|f_X(x)f_Y(zx)\,dx$$
$$F_Z(z)=\int_{-\infty}^z\int_{-\infty}^\infty |x|f_X(x)f_Y(zx)\,dxdz$$
**Theorem**
Suppose $$X_1,X_2$$ are independent
$$\frac{X_1}{X_1+X_2}$$~Beta($$\alpha_1$$, $$\alpha_2$$) where $$X_1$$~Gamma($$\alpha_1$$, $$\lambda$$) and $$X_2$$~Gamma($$\alpha_2$$, $$\lambda$$)
$$\frac{X_1}{X_1+X_2}$$~Uniform(0, 1) where $$X_1$$~Exponential($$\lambda$$) and $$X_2$$~Exponential($$\lambda$$)

## Order Statistics

$$X_1,\ldots,X_n$$ i.i.d.
$$F_{X_{(1)}}(x)=1-(1-F_X(x))^n$$
$$F_{X_{(n)}}(x)=F_X(x)^n$$
$$f_{X_{(1)}}(x)=nf(x)(1-F_X(x))^{n-1}$$
$$f_{X_{(n)}}(x)=nf(x)F_X(x)^{n-1}$$
$$f_{X_{(1)},\ldots,X_{(n)}}(x_1,\ldots,x_n)=n!\times f(x_1)\times\cdots\times f(x_n)$$

## Conditional Distribution

$$f_{Y|X}(y|x)=P(\{Y=y\}|\{X=x\})=\frac{P\{X=x, Y=y\}}{P\{X=x\}}=\displaystyle\frac{f_{X,Y}(x,y)}{f_X(x)}$$
$$F_{Y|X}(y|x)=P(\{Y\leq y\}|\{X=x\})=\sum_{t\leq y}f_{Y|X}(t|x)$$
$$F_{Y|X}(y|x)=P(\{Y\leq y\}|\{X=x\})=\int_{-\infty}^yf_{Y|X}(t|x)\,dt$$
**Theorem (Multiplication Law)**
$$f_{X,Y}(x,y)=f_{Y|X}(y|x)f_X(x)$$
**Theorem (Law of Total Probability)**
$$f_Y(y)=\displaystyle\sum_{x\in\mathcal{X}} f_{Y|X}(y|x)f_X(x)$$
$$f_Y(y)=\displaystyle\int_{\mathbb{R}^n} f_{Y|X}(y|x)f_X(x)\,dx$$
**Theorem (Bayes Theorem)**
$$f_{X|Y}(x|y)=\displaystyle\frac{f_{Y|X}(y|x)f_X(x)}{\displaystyle\sum_{x\in\mathcal{X}} f_{Y|X}(y|x)f_X(x)}$$
$$f_{X|Y}(x|y)=\displaystyle\frac{f_{Y|X}(y|x)f_X(x)}{\displaystyle\int_{\mathbb{R}^n} f_{Y|X}(y|x)f_X(x)\,dx}$$

