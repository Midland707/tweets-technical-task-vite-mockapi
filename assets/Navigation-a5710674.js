import{N as s,j as e,r as i,O as r}from"./index-b426e5fa.js";import{s as t}from"./styled-components.browser.esm-d0acd055.js";const o=t.header`
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
`,c=t.nav``,d=t.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`,a=t.li``,n=t(s)`
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
`,g=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(a,{children:e.jsx(n,{to:"/",children:"Home"})}),e.jsx(a,{children:e.jsx(n,{to:"/tweets",children:"Tweets"})})]})})}),e.jsx(i.Suspense,{fallback:e.jsx("div",{children:"Loading page..."}),children:e.jsx(r,{})})]});export{g as default};
