import{N as s,j as e,r,O as i}from"./index-9c3089e7.js";import{s as t,L as o}from"./Loader-ca526031.js";const l=t.header`
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
  height: 50px;
`,c=t.nav``,d=t.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`,a=t.li``,n=t(s)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-decoration: none;
  padding: 10px;
  color: #ebd8ff;
  text-transform: uppercase;

  &.active {
    color: #5cd3a8;
  }
  &:hover,
  &:focus {
    color: #5cd3a8;
  }
`,g=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(a,{children:e.jsx(n,{to:"/",children:"Home"})}),e.jsx(a,{children:e.jsx(n,{to:"/tweets",children:"Tweets"})})]})})}),e.jsx(r.Suspense,{fallback:e.jsxs("div",{children:[e.jsx(o,{}),"Loading page..."]}),children:e.jsx(i,{})})]});export{g as default};
