import{L as s,u as a,r as c,j as o}from"./index-9c3089e7.js";import{H as i,T as x}from"./TweetsList-e7c9bdb1.js";import{s as e}from"./Loader-ca526031.js";const l=e.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #d9acc9;
`,p=e(s)`
  display: block;
  text-align: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  background-color: #ebd8ff;
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3108px;
  text-decoration: none;
  padding: 10px;
  color: #373737;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`,u=()=>{var t;const r=a(),n=c.useRef(((t=r.state)==null?void 0:t.from)??"/");return o.jsxs(l,{children:[o.jsx(i,{children:o.jsx("title",{children:"Tweets"})}),o.jsx(p,{to:n.current,children:"Go back"}),o.jsx(x,{})]})};export{u as default};
