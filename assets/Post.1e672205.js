import{_ as I,q as P,s as y,g as a,x as S,o as T,c as w,a as s,b as r,p as B,f as b}from"./index.5452fa2c.js";const e=t=>(B("data-v-8ef29c04"),t=t(),b(),t),k={class:"wrap"},D={class:"bread"},H=e(()=>s("i",{class:"ic i-feather"},null,-1)),L=e(()=>s("span",null,[s("a",{href:"/"},"\u9996\u9875")],-1)),M=e(()=>s("i",{class:"ic i-angle-right"},null,-1)),$={class:"current"},j=e(()=>s("i",{class:"ic i-angle-right"},null,-1)),q={class:"current"},A={class:"post"},C=["innerHTML"],E={__name:"Post",setup(t){const d=P(),c=y(),o=a(""),n=a(""),i=a("");return S(()=>d.params,(l,p)=>{const{type:u,path:h}=l,v=`/${u}/${h}`,_=c.postsDic.get(v);if(_){const{content:f,title:g,tags:m,index:x}=_;o.value=f,n.value=g,i.value=m.join(" "),c.sideIndex=x}},{immediate:!0}),(l,p)=>(T(),w("div",k,[s("div",D,[H,L,M,s("span",$,[s("span",null,r(i.value),1)]),j,s("span",q,[s("span",null,r(n.value),1)])]),s("article",A,[s("div",{innerHTML:o.value},null,8,C)])]))}},R=I(E,[["__scopeId","data-v-8ef29c04"]]);export{R as default};
