import{N as o,j as t}from"./index-202d545d.js";import{H as s,T as n}from"./TweetsList-5eaf2698.js";import{s as e}from"./Loader-c7f9f1f8.js";const r=e.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #d9acc9;
`,i=e.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0;
  margin-top: 16px;
`,a=e(o)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  padding: 10px;
  color: black;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: #5cd3a8;
  }
`,f=()=>t.jsxs(r,{children:[t.jsx(s,{children:t.jsx("title",{children:"Home"})}),t.jsxs(i,{children:["Your following tweets",t.jsxs(a,{to:"/tweets",children:["  ",">>"," Go to Tweets ",">>"]})]}),t.jsx(n,{})]});export{f as default};
