import{c as x,r as n,j as t}from"./index-47936ca9.js";import{n as o,s as d,C as f,L as g}from"./CarCard-e48a7be0.js";const u=o.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 128px;
  padding-right: 128px;
  padding-top: 60px;
`,m=o.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  margin-top: 50px;
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
`,h=o.p`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  color: #000000;
`;function y(){const a=x(d),[i,c]=n.useState(1),[r,p]=n.useState([]),l=()=>{const e=i*12,s=a.favorites.slice(e,e+12);p([...r,...s]),c(i+1)};return n.useEffect(()=>{const e=a.favorites.slice(0,12);p(e)},[a]),t.jsx(t.Fragment,{children:t.jsx(u,{children:t.jsxs(m,{children:[r.length?r.map((e,s)=>t.jsx(f,{data:e},s)):t.jsx(h,{children:"Your favorite are currently empty..."}),a.favorites.length>r.length&&t.jsx(g,{variant:"text",onClick:l,children:"Load more"})]})})})}export{y as default};
