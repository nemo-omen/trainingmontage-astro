function k(){}const z=t=>t;function Dt(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function X(){return Object.create(null)}function E(t){t.forEach(Q)}function F(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function at(t){return Object.keys(t).length===0}function Ft(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ht(t){return t??""}const Y=typeof window!="undefined";let Z=Y?()=>window.performance.now():()=>Date.now(),H=Y?t=>requestAnimationFrame(t):k;const S=new Set;function U(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&H(U)}function tt(t){let e;return S.size===0&&H(U),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let j=!1;function ut(){j=!0}function ft(){j=!1}function dt(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(o>0&&e[n[o]].claim_order<=l?o+1:dt(1,o,u=>e[n[u]].claim_order,l))-1;r[s]=n[f]+1;const d=f+1;n[d]=s,o=Math.max(d,o)}const c=[],i=[];let a=e.length-1;for(let s=n[o]+1;s!=0;s=r[s-1]){for(c.push(e[s-1]);a>=s;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);c.reverse(),i.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<i.length;s++){for(;l<c.length&&i[s].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(i[s],f)}}function ht(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=nt("style");return pt(et(t),e),e}function pt(t,e){ht(t.head||t,e)}function yt(t,e){if(j){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){j&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function gt(t){t.parentNode.removeChild(t)}function nt(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function Pt(){return I(" ")}function Gt(){return I("")}function Jt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,r,o=!1){wt(t);const c=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const a=t[i];if(e(a)){const s=n(a);return s===void 0?t.splice(i,1):t[i]=s,o||(t.claim_info.last_index=i),a}}for(let i=t.claim_info.last_index-1;i>=0;i--){const a=t[i];if(e(a)){const s=n(a);return s===void 0?t.splice(i,1):t[i]=s,o?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,a}}return r()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function xt(t,e,n,r){return it(t,o=>o.nodeName===e,o=>{const c=[];for(let i=0;i<o.attributes.length;i++){const a=o.attributes[i];n[a.name]||c.push(a.name)}c.forEach(i=>o.removeAttribute(i))},()=>r(e))}function Vt(t,e,n){return xt(t,e,n,nt)}function bt(t,e){return it(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>I(e),!0)}function Wt(t){return bt(t," ")}function Qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function vt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}const P=new Set;let O=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function G(t,e,n,r,o,c,i,a=0){const s=16.666/r;let l=`{
`;for(let m=0;m<=1;m+=s){const y=e+(n-e)*c(m);l+=m*100+`%{${i(y,1-y)}}
`}const f=l+`100% {${i(n,1-n)}}
}`,d=`__svelte_${kt(f)}_${a}`,u=et(t);P.add(u);const _=u.__svelte_stylesheet||(u.__svelte_stylesheet=mt(t).sheet),h=u.__svelte_rules||(u.__svelte_rules={});h[d]||(h[d]=!0,_.insertRule(`@keyframes ${d} ${f}`,_.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${r}ms linear ${o}ms 1 both`,O+=1,d}function st(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),o=n.length-r.length;o&&(t.style.animation=r.join(", "),O-=o,O||Et())}function Et(){H(()=>{O||(P.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),P.clear())})}function Xt(t,e,n,r){if(!e)return k;const o=t.getBoundingClientRect();if(e.left===o.left&&e.right===o.right&&e.top===o.top&&e.bottom===o.bottom)return k;const{delay:c=0,duration:i=300,easing:a=z,start:s=Z()+c,end:l=s+i,tick:f=k,css:d}=n(t,{from:e,to:o},r);let u=!0,_=!1,h;function g(){d&&(h=G(t,0,1,i,c,a,d)),c||(_=!0)}function m(){d&&st(t,h),u=!1}return tt(y=>{if(!_&&y>=s&&(_=!0),_&&y>=l&&(f(1,0),m()),!u)return!1;if(_){const $=y-s,w=0+1*a($/i);f(w,1-w)}return!0}),g(),f(0,1),m}function Yt(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:r}=e,o=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=r,St(t,o)}}function St(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const r=getComputedStyle(t),o=r.transform==="none"?"":r.transform;t.style.transform=`${o} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let R;function q(t){R=t}function Ct(){if(!R)throw new Error("Function called outside component initialization");return R}function Zt(t){Ct().$$.on_mount.push(t)}const C=[],ot=[],B=[],rt=[],Mt=Promise.resolve();let J=!1;function At(){J||(J=!0,Mt.then(lt))}function L(t){B.push(t)}let K=!1;const V=new Set;function lt(){if(!K){K=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];q(e),Nt(e.$$)}for(q(null),C.length=0;ot.length;)ot.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];V.has(e)||(V.add(e),e())}B.length=0}while(C.length);for(;rt.length;)rt.pop()();J=!1,K=!1,V.clear()}}function Nt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let M;function jt(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function W(t,e,n){t.dispatchEvent(vt(`${e?"intro":"outro"}${n}`))}const T=new Set;let v;function Ut(){v={r:0,c:[],p:v}}function te(){v.r||E(v.c),v=v.p}function ct(t,e){t&&t.i&&(T.delete(t),t.i(e))}function ee(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),v.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Ot={duration:0};function ne(t,e,n,r){let o=e(t,n),c=r?0:1,i=null,a=null,s=null;function l(){s&&st(t,s)}function f(u,_){const h=u.b-c;return _*=Math.abs(h),{a:c,b:u.b,d:h,duration:_,start:u.start,end:u.start+_,group:u.group}}function d(u){const{delay:_=0,duration:h=300,easing:g=z,tick:m=k,css:y}=o||Ot,$={start:Z()+_,b:u};u||($.group=v,v.r+=1),i||a?a=$:(y&&(l(),s=G(t,c,u,h,_,g,y)),u&&m(0,1),i=f($,h),L(()=>W(t,u,"start")),tt(w=>{if(a&&w>a.start&&(i=f(a,h),a=null,W(t,i.b,"start"),y&&(l(),s=G(t,c,i.b,i.duration,0,g,o.css))),i){if(w>=i.end)m(c=i.b,1-c),W(t,i.b,"end"),a||(i.b?l():--i.group.r||E(i.group.c)),i=null;else if(w>=i.start){const A=w-i.start;c=i.a+i.d*g(A/i.duration),m(c,1-c)}}return!!(i||a)}))}return{run(u){F(o)?jt().then(()=>{o=o(),d(u)}):d(u)},end(){l(),i=a=null}}}function Rt(t,e){t.d(1),e.delete(t.key)}function ie(t,e){t.f(),Rt(t,e)}function se(t,e,n,r,o,c,i,a,s,l,f,d){let u=t.length,_=c.length,h=u;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,$=new Map;for(h=_;h--;){const p=d(o,c,h),x=n(p);let b=i.get(x);b?r&&b.p(p,e):(b=l(x,p),b.c()),y.set(x,m[h]=b),x in g&&$.set(x,Math.abs(h-g[x]))}const w=new Set,A=new Set;function D(p){ct(p,1),p.m(a,f),i.set(p.key,p),f=p.first,_--}for(;u&&_;){const p=m[_-1],x=t[u-1],b=p.key,N=x.key;p===x?(f=p.first,u--,_--):y.has(N)?!i.has(b)||w.has(b)?D(p):A.has(N)?u--:$.get(b)>$.get(N)?(A.add(b),D(p)):(w.add(N),u--):(s(x,i),u--)}for(;u--;){const p=t[u];y.has(p.key)||s(p,i)}for(;_;)D(m[_-1]);return m}function oe(t,e){const n={},r={},o={$$scope:1};let c=t.length;for(;c--;){const i=t[c],a=e[c];if(a){for(const s in i)s in a||(r[s]=1);for(const s in a)o[s]||(n[s]=a[s],o[s]=1);t[c]=a}else for(const s in i)o[s]=1}for(const i in r)i in n||(n[i]=void 0);return n}function re(t){return typeof t=="object"&&t!==null?t:{}}function le(t){t&&t.c()}function ce(t,e){t&&t.l(e)}function qt(t,e,n,r){const{fragment:o,on_mount:c,on_destroy:i,after_update:a}=t.$$;o&&o.m(e,n),r||L(()=>{const s=c.map(Q).filter(F);i?i.push(...s):E(s),t.$$.on_mount=[]}),a.forEach(L)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(C.push(t),At(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,n,r,o,c,i,a=[-1]){const s=R;q(t);const l=t.$$={fragment:null,ctx:null,props:c,update:k,not_equal:o,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:X(),dirty:a,skip_bound:!1,root:e.target||s.$$.root};i&&i(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(d,u,..._)=>{const h=_.length?_[0]:u;return l.ctx&&o(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),f&&Lt(t,d)),u}):[],l.update(),f=!0,E(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){ut();const d=$t(e.target);l.fragment&&l.fragment.l(d),d.forEach(gt)}else l.fragment&&l.fragment.c();e.intro&&ct(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),ft(),lt()}q(s)}class ue{$destroy(){Bt(this,1),this.$destroy=k}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Tt(t){const e=t-1;return e*e*e+1}function fe(t){return--t*t*t*t*t+1}function de(t,{from:e,to:n},r={}){const o=getComputedStyle(t),c=o.transform==="none"?"":o.transform,[i,a]=o.transformOrigin.split(" ").map(parseFloat),s=e.left+e.width*i/n.width-(n.left+i),l=e.top+e.height*a/n.height-(n.top+a),{delay:f=0,duration:d=_=>Math.sqrt(_)*120,easing:u=Tt}=r;return{delay:f,duration:F(d)?d(Math.sqrt(s*s+l*l)):d,easing:u,css:(_,h)=>{const g=h*s,m=h*l,y=_+h*e.width/n.width,$=_+h*e.height/n.height;return`transform: ${c} translate(${g}px, ${m}px) scale(${y}, ${$});`}}}function _e(t,{delay:e=0,duration:n=400,easing:r=z}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:c=>`opacity: ${c*o}`}}async function he(t,e,n){var r,o;const c=document.querySelectorAll(`astro-root[uid="${t}"]`),i=(o=(r=c[0].querySelector("astro-fragment"))==null?void 0:r.innerHTML)!=null?o:null,a=async()=>{const l=await n();for(const f of c)l(f,i)},s=new IntersectionObserver(([l])=>{!l.isIntersecting||(s.disconnect(),a())});for(const l of c)for(let f=0;f<l.children.length;f++){const d=l.children[f];s.observe(d)}}export{se as A,k as B,Ut as C,ie as D,fe as E,de as F,he as G,le as H,ce as I,qt as J,oe as K,re as L,Bt as M,Dt as N,Ft as O,ue as S,Pt as a,$t as b,Vt as c,gt as d,nt as e,Wt as f,bt as g,Kt as h,ae as i,It as j,yt as k,Jt as l,Qt as m,L as n,ne as o,ct as p,ee as q,te as r,zt as s,I as t,Zt as u,_e as v,Ht as w,Yt as x,Xt as y,Gt as z};
