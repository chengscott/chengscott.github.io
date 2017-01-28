# Expectation

- $$E[g(X)]=\displaystyle\int_{\mathbb{R}^n}g(x)\,dF_X(x)=\int_\Omega g(\omega)\,dP(\omega)$$
- $$E(a_0+a_1X_1+\cdots+a_nX_n)=a_0+a_1E(X_1)+\cdots+a_nE(X_n)$$

**Corollary**
Suppose $$X\leq Y$$ almost surely i.e. $$P(X\leq Y)=1$$ then $$E(X)\leq E(Y)$$
**Theorem**
Suppose random vector $$X\in\mathbb{R}^n$$ and $$Y\in\mathbb{R}^m$$ are indep. then for $$g:\mathbb{R}^m\to\mathbb{R}$$ and $$h:\mathbb{R}^n\to\mathbb{R}$$
$$E[g(X)h(Y)]=E[g(X)]E[h(Y)]$$

# Covariance and Correlation

**Theorem**

- covariance of $$X$$ and $$Y$$: $$Cov(X,Y)=\sigma_{XY}=E[(X-\mu_X)(Y-\mu_Y)]$$
- correlation of $$X$$ and $$Y$$: $$Cor(X,Y)=\rho_{XY}=\frac{\sigma_{XY}}{\sigma_X\sigma_Y}=E\left[(\frac{X-\mu_X}{\sigma_X})(\frac{Y-\mu_Y}{\sigma_Y})\right]$$
  - $$-1\leq\rho_{XY}\leq1$$
  - $$\rho_{XY}=\pm1$$ iff. $$\exists\,a,b$$ s.t. $$P\{Y=aX+b\}=1$$
- $$X$$ and $$Y$$ are uncorrelated if $$Cor(X,Y)=0$$
- If $$X$$ and $$Y$$ are indep. then $$X$$ and $$Y$$ are uncorrelated i.e. $$Cov(X,Y)=0$$
- $$Cov(X,X)=Var(X)$$
- $$Cov(X,Y)=E(XY)-\mu_X\mu_Y$$
- $$Cov(a_0+a_1X_1+\cdots+a_nX_n, b_0+b_1Y_1+\cdots+b_mY_m)=\sum_{i=1}^n\sum_{j=1}^m a_ib_jCov(X_i,Y_j)=(a_1,\ldots,a_n)\left[Cov(X_i,X_j)\right]_{n\times m}\begin{pmatrix} b_1\\ \vdots \\ b_m \end{pmatrix}$$
- $$Var(a_0+a_1X_1+\cdots+a_nX_n)=\sum_{i=1}^n a_i^2Var(X_i)+2\sum_{1\leq i<j\leq n} a_ia_jCov(X_i,X_j)$$
- $$Cor(a_0+a_1X,b_0+b_1Y)=sgn(a_1b_1)Cor(X,Y)$$

**Theorem**
Suppose $$X_1,\ldots,X_n$$ are uncorrelated

- $$Var(a_0+a_1X_1+\cdots+a_nX_n)=\sum_{i=1}^n a_i^2Var(X_i)$$
- $$Var(\overline{X_n})=\frac{\sigma^2}{n}$$ if $$Var(X_1)=\cdots=Var(X_n)=\sigma^2$$
- $$E(S^2)=\sigma^2$$ where $$S^2=\frac{\sum_{i=1}^n (X-\overline{X_n})^2}{n-1}$$
# Conditional Expectation

Suppose random vector $$X\in\mathbb{R}^n$$, $$Y\in\mathbb{R}^m$$ and $$h:\mathbb{R}^m\to\mathbb{R}$$

- $$E_{Y|X}(h(Y)|X=x)=\sum_{y\in\mathcal{Y}} h(y)f_{Y|X}(y|x)$$
- $$E_{Y|X}(h(Y)|X=x)=\int_{\mathbb{R}^m} h(y)f_{Y|X}(y|x)\,dy$$

$$$$$$g(x)=E_{Y|X}(h(Y)|X=x)=E_{Y|X}(h(Y)|X):\mathbb{R}^n\to\mathbb{R}$$
**Theorem (Law of Total Expectation)**
Suppose random vector $$X\in\mathbb{R}^n$$ and $$Y\in\mathbb{R}^m$$, then
$$E_X\{E_{Y|X}[h(Y)|X]\}=E_Y[h(Y)]$$
In particular, $$E_X[E_{Y|X}(Y_i|X)]=E_Y(Y_i)$$

