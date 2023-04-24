import{N as n,j as e,r as i,O as r}from"./index-37acb02c.js";import{s as t,L as o}from"./Loader-f9924694.js";const c=t.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  height: 50px;
`,d=t.nav``,l=t.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`,a=t.li``,s=t(n)`
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  color: #ebd8ff;

  &.active {
    color: #5cd3a8;
  }
  &:hover,
  &:focus {
    color: #5cd3a8;
  }
`,p=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(a,{children:e.jsx(s,{to:"/",children:"Home"})}),e.jsx(a,{children:e.jsx(s,{to:"/tweets",children:"Tweets"})})]})})}),e.jsx(i.Suspense,{fallback:e.jsxs("div",{children:[e.jsx(o,{}),"Loading page..."]}),children:e.jsx(r,{})})]});export{p as default};
