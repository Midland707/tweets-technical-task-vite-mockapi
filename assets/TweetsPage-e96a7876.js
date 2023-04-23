import{L as i,j as t,u as n,r as a}from"./index-b426e5fa.js";import{H as x}from"./Helmet-57ebbceb.js";import{s as e}from"./styled-components.browser.esm-d0acd055.js";const p=e(i)`
  display: block;
  text-align: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  width: 100px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px;
  color: #373737;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`,c=e.li`
  list-style: none;
`,l=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`,d=e.img`
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  z-index: 3;
`,f=e.img`
  display: block;
  width: 308px;
  height: 168px;
  margin-bottom: 90px;
  z-index: 2;
`,h=e.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`,g=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  overflow: hidden;

  position: absolute;
  top: 180px;
  width: 80px;
  height: 80px;
`,m=e.img`
  display: block;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #5736a3;
`,b=e.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0 0 16px;
`,u=e.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0 0 26px;
`,w=e.button`
  width: 196px;
  height: 50px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  cursor: pointer;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3108px;
  margin-bottom: 36px;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`,j="/tweets-technical-task-vite-mockapi/assets/logo-aec7c177.svg",k="/tweets-technical-task-vite-mockapi/assets/image-fee3a66f.png",y=()=>t.jsx(c,{children:t.jsxs(l,{children:[t.jsx(d,{alt:"card logo",src:j}),t.jsx(f,{alt:"card image",src:k}),t.jsx(h,{}),t.jsx(g,{children:t.jsx(m,{alt:"avatar",src:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/105.jpg"})}),t.jsx(b,{children:"Tweets"}),t.jsx(u,{children:"Followers"}),t.jsx(w,{children:"Follow"})]})}),v=e.ul`
  margin: 0;
  padding: 0;
`,T=()=>t.jsxs(v,{children:["TweetsList",t.jsx(y,{})]}),L=()=>t.jsx(t.Fragment,{children:"FilterTweets"}),H=()=>{var o;const s=n(),r=a.useRef(((o=s.state)==null?void 0:o.from)??"/");return t.jsxs("main",{children:[t.jsx(x,{children:t.jsx("title",{children:"Tweets"})}),t.jsx(p,{to:r.current,children:"Go back"}),t.jsx(L,{}),"Tweets",t.jsx(T,{})]})};export{H as default};
