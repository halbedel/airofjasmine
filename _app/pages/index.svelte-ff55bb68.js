import{K as B,S as $,i as x,s as E,k as w,f as b,m as N,L as C,M as H,o as S,p as h,n as k,d as f,e as m,c as v,a as g,b as d,I as y,N as J,u as R,O as q,j as T,P as K,l as A,Q as L,R as I,T as P,t as Q,g as U,J as Y,v as z,w as F,x as G,A as W,U as X,V as Z}from"../chunks/vendor-c2801f82.js";function j(o,e){return{css:(t,r)=>`
        transform: translateY(${r*Math.cos(t+20)*1.4}em);
        opacity: ${t};
      `,easing:B,delay:e.delay,duration:500}}function M(o,e,t){const r=o.slice();return r[7]=e[t],r[9]=t,r}function D(o){let e=[],t=new Map,r,n,i=o[2];const l=a=>a[9];for(let a=0;a<i.length;a+=1){let s=M(o,i,a),c=l(s);t.set(c,e[a]=O(c,s))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();r=w()},l(a){for(let s=0;s<e.length;s+=1)e[s].l(a);r=w()},m(a,s){for(let c=0;c<e.length;c+=1)e[c].m(a,s);b(a,r,s),n=!0},p(a,s){s&12&&(i=a[2],N(),e=C(e,s,l,1,a,i,t,r.parentNode,H,O,r,M),S())},i(a){if(!n){for(let s=0;s<i.length;s+=1)h(e[s]);n=!0}},o(a){for(let s=0;s<e.length;s+=1)k(e[s]);n=!1},d(a){for(let s=0;s<e.length;s+=1)e[s].d(a);a&&f(r)}}}function O(o,e){let t,r,n=e[7]+"",i,l,a,s,c;function u(){return e[4](e[9])}return{key:o,first:null,c(){t=m("span"),r=new q,i=T(),this.h()},l(_){t=v(_,"SPAN",{class:!0,"aria-hidden":!0});var p=g(t);r=K(p),i=A(p),p.forEach(f),this.h()},h(){r.a=i,d(t,"class","char svelte-1lanhnx"),d(t,"aria-hidden","true"),this.first=t},m(_,p){b(_,t,p),r.m(n,t),y(t,i),a=!0,s||(c=L(t,"introend",u),s=!0)},p(_,p){e=_,(!a||p&4)&&n!==(n=e[7]+"")&&r.p(n)},i(_){a||(I(()=>{l||(l=P(t,j,{delay:e[9]*60},!0)),l.run(1)}),a=!0)},o(_){l||(l=P(t,j,{delay:e[9]*60},!1)),l.run(0),a=!1},d(_){_&&f(t),_&&l&&l.end(),s=!1,c()}}}function ee(o){let e,t,r,n=o[1]&&D(o);return{c(){e=m("section"),t=m("span"),n&&n.c(),this.h()},l(i){e=v(i,"SECTION",{class:!0});var l=g(e);t=v(l,"SPAN",{class:!0,"aria-label":!0,role:!0});var a=g(t);n&&n.l(a),a.forEach(f),l.forEach(f),this.h()},h(){d(t,"class","banner svelte-1lanhnx"),d(t,"aria-label",o[0]),d(t,"role","heading"),d(e,"class","container svelte-1lanhnx")},m(i,l){b(i,e,l),y(e,t),n&&n.m(t,null),r=!0},p(i,[l]){i[1]?n?(n.p(i,l),l&2&&h(n,1)):(n=D(i),n.c(),h(n,1),n.m(t,null)):n&&(N(),k(n,1,1,()=>{n=null}),S()),(!r||l&1)&&d(t,"aria-label",i[0])},i(i){r||(h(n),r=!0)},o(i){k(n),r=!1},d(i){i&&f(e),n&&n.d()}}}function te(o,e,t){let{text:r}=e;const n=J(),i=u=>{setTimeout(()=>{t(1,a=!a),i(l%2==0?4e3:850),l++},u)};R(()=>i(400));let l=0,a=!1,s;const c=u=>u===s.length-1&&n("end");return o.$$set=u=>{"text"in u&&t(0,r=u.text)},o.$$.update=()=>{o.$$.dirty&1&&t(2,s=r.split("").map(u=>u.trim()?u:"&nbsp;"))},[r,a,s,n,c]}class ne extends ${constructor(e){super();x(this,e,te,ee,E,{text:0})}}function V(o){let e,t,r;return{c(){e=m("span"),t=Q("coming soon"),this.h()},l(n){e=v(n,"SPAN",{class:!0});var i=g(e);t=U(i,"coming soon"),i.forEach(f),this.h()},h(){d(e,"class","-bottom-6 absolute")},m(n,i){b(n,e,i),y(e,t)},i(n){r||I(()=>{r=X(e,Z,{}),r.start()})},o:Y,d(n){n&&f(e)}}}function ae(o){let e,t,r,n,i;t=new ne({props:{text:"Air of Jasmine"}}),t.$on("end",o[1]);let l=o[0]&&V();return{c(){e=m("div"),z(t.$$.fragment),r=T(),n=m("div"),l&&l.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var s=g(e);F(t.$$.fragment,s),r=A(s),n=v(s,"DIV",{class:!0});var c=g(n);l&&l.l(c),c.forEach(f),s.forEach(f),this.h()},h(){d(n,"class","relative flex w-full justify-center"),d(e,"class","parent svelte-fbuw8x")},m(a,s){b(a,e,s),G(t,e,null),y(e,r),y(e,n),l&&l.m(n,null),i=!0},p(a,[s]){a[0]?l?s&1&&h(l,1):(l=V(),l.c(),h(l,1),l.m(n,null)):l&&(l.d(1),l=null)},i(a){i||(h(t.$$.fragment,a),h(l),i=!0)},o(a){k(t.$$.fragment,a),i=!1},d(a){a&&f(e),W(t),l&&l.d()}}}function le(o,e,t){let r=!1;return[r,()=>t(0,r=!0)]}class re extends ${constructor(e){super();x(this,e,le,ae,E,{})}}export{re as default};
