import{c as x,r as o,j as t}from"./index-f99f6ea2.js";import{s as d,C as f,L as g}from"./CarCard-8f60c9cf.js";import{n}from"./emotion-styled.browser.esm-36194ecd.js";const m=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 128px;
  padding-right: 128px;
  padding-top: 60px;
`,u=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  margin-top: 50px;
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
`,h=n.p`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  color: #000000;
`;function C(){const r=x(d),[i,c]=o.useState(1),[a,p]=o.useState([]),l=()=>{const e=i*12,s=r.favorites.slice(e,e+12);p([...a,...s]),c(i+1)};return o.useEffect(()=>{const e=r.favorites.slice(0,12);p(e)},[r]),t.jsx(t.Fragment,{children:t.jsx(m,{children:t.jsxs(u,{children:[a.length?a.map((e,s)=>t.jsx(f,{data:e},s)):t.jsx(h,{children:"Your favorite are currently empty..."}),r.favorites.length>a.length&&t.jsx(g,{variant:"text",onClick:l,children:"Load more"})]})})})}export{C as default};
