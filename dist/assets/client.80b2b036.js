import{S as b,i as k,s as S,H as d,z as f,I as j,J as h,j as p,K as y,L as C,q as $,r as M,p as g,d as l,M as w,N as m,O as v,C as N,e as T,c as q,b as A,B as E}from"./vendor.a6414195.js";function H(a){let e;return{c(){e=T("astro-fragment")},l(t){e=q(t,"ASTRO-FRAGMENT",{});var n=A(e);n.forEach(l)},m(t,n){p(t,e,n),e.innerHTML=a[1]},p:E,d(t){t&&l(e)}}}function L(a){let e,t=a[1]&&H(a);return{c(){t&&t.c(),e=f()},l(n){t&&t.l(n),e=f()},m(n,r){t&&t.m(n,r),p(n,e,r)},p(n,r){n[1]&&t.p(n,r)},d(n){t&&t.d(n),n&&l(e)}}}function O(a){let e,t,n;const r=[a[2]];var i=a[0];function _(s){let o={$$slots:{default:[L]},$$scope:{ctx:s}};for(let c=0;c<r.length;c+=1)o=m(o,r[c]);return{props:o}}return i&&(e=new i(_(a))),{c(){e&&d(e.$$.fragment),t=f()},l(s){e&&j(e.$$.fragment,s),t=f()},m(s,o){e&&h(e,s,o),p(s,t,o),n=!0},p(s,[o]){const c=o&4?y(r,[C(s[2])]):{};if(o&16&&(c.$$scope={dirty:o,ctx:s}),i!==(i=s[0])){if(e){N();const u=e;$(u.$$.fragment,1,0,()=>{w(u,1)}),M()}i?(e=new i(_(s)),d(e.$$.fragment),g(e.$$.fragment,1),h(e,t.parentNode,t)):e=null}else i&&e.$set(c)},i(s){n||(e&&g(e.$$.fragment,s),n=!0)},o(s){e&&$(e.$$.fragment,s),n=!1},d(s){s&&l(t),e&&w(e,s)}}}function R(a,e,t){const{__astro_component:n,__astro_children:r,...i}=e;return a.$$set=_=>{t(3,e=m(m({},e),v(_)))},e=v(e),[n,r,i]}class W extends b{constructor(e){super();k(this,e,R,O,S,{})}}var z=W,F=a=>(e,t,n)=>{delete t.class;try{new z({target:a,props:{__astro_component:e,__astro_children:n,...t},hydrate:!0})}catch{}};export{F as default};
