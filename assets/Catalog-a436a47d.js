import{r as a,j as o}from"./index-61e9ac2e.js";function n(){const[r,s]=a.useState([]),t=fetchCars();return console.log("data",t),a.useEffect(()=>{t&&s(e=>[...e,...t])},[t]),o.jsx("h1",{children:"Catalog page"})}export{n as default};
