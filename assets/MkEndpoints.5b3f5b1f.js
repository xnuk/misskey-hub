import{_ as f,f as h,j as _,I as k,o,c,a,K as r,L as p,v as g,t as d,m as y,w as B,a3 as C,a4 as E,r as x}from"./app.92c486f4.js";const I=t=>(C("data-v-4bcfe99e"),t=t(),E(),t),w={class:"mk-endpoints"},F={class:"tags"},L=I(()=>a("div",{class:"title"},"\u30BF\u30B0\u3067\u7D5E\u308A\u8FBC\u307F",-1)),M={class:"tags"},S=["onClick"],b={class:"endpoints"},D={class:"name"},R={class:"summary"},T=h({__name:"MkEndpoints",props:{tags:null,endpoints:null},setup(t){const i=t,s=_([]),u=_(i.endpoints);function v(n){s.value.includes(n)?s.value=s.value.filter(l=>l!==n):s.value.push(n)}return k(s,()=>{s.value.length===0?u.value=i.endpoints:u.value=i.endpoints.filter(n=>s.value.every(l=>n.tags.includes(l)))},{deep:!0}),(n,l)=>{const m=x("RouterLink");return o(),c("div",w,[a("div",F,[L,a("div",M,[(o(!0),c(r,null,p(t.tags,e=>(o(),c("span",{class:g(["tag",{active:s.value.includes(e)}]),key:e,onClick:$=>v(e)},d(e),11,S))),128))])]),a("div",b,[(o(!0),c(r,null,p(u.value,e=>(o(),y(m,{key:e.name,class:"endpoint",to:`./endpoints/${e.name}.html`},{default:B(()=>[a("div",D,d(e.name),1),a("div",R,d(e.summary),1)]),_:2},1032,["to"]))),128))])])}}});var z=f(T,[["__scopeId","data-v-4bcfe99e"],["__file","MkEndpoints.vue"]]);export{z as default};
