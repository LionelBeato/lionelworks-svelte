import{S,i as H,s as J,k as u,l as d,m as _,h,n as f,b as P,E as i,A as x,J as M,q as k,a as y,r as q,c as C}from"../../../chunks/index-dcb258cc.js";import"../../../chunks/marked.esm-54748e82.js";function I(r,a,n){const l=r.slice();return l[2]=a[n],l}function L(r){let a,n,l,s=r[2].title+"",t,o,e,c=r[2].outline+"",v,E;return{c(){a=u("article"),n=u("a"),l=u("h2"),t=k(s),o=y(),e=u("p"),v=k(c),E=y(),this.h()},l(m){a=d(m,"ARTICLE",{class:!0});var p=_(a);n=d(p,"A",{rel:!0,href:!0});var g=_(n);l=d(g,"H2",{class:!0});var b=_(l);t=q(b,s),b.forEach(h),o=C(g),e=d(g,"P",{class:!0});var A=_(e);v=q(A,c),A.forEach(h),g.forEach(h),E=C(p),p.forEach(h),this.h()},h(){f(l,"class","text-3xl my-2 font-bold"),f(e,"class","italic font-light"),f(n,"rel","prefetch"),f(n,"href","blog/"+r[2].slug),f(a,"class","p-6")},m(m,p){P(m,a,p),i(a,n),i(n,l),i(l,t),i(n,o),i(n,e),i(e,v),i(a,E)},p:x,d(m){m&&h(a)}}}function N(r){let a,n,l=r[0],s=[];for(let t=0;t<l.length;t+=1)s[t]=L(I(r,l,t));return{c(){a=u("main"),n=u("ul");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){a=d(t,"MAIN",{class:!0});var o=_(a);n=d(o,"UL",{});var e=_(n);for(let c=0;c<s.length;c+=1)s[c].l(e);e.forEach(h),o.forEach(h),this.h()},h(){f(a,"class","col-span-5 sm:col-start-2 sm:col-end-5 m-auto p-8")},m(t,o){P(t,a,o),i(a,n);for(let e=0;e<s.length;e+=1)s[e].m(n,null)},p(t,[o]){if(o&1){l=t[0];let e;for(e=0;e<l.length;e+=1){const c=I(t,l,e);s[e]?s[e].p(c,o):(s[e]=L(c),s[e].c(),s[e].m(n,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=l.length}},i:x,o:x,d(t){t&&h(a),M(s,t)}}}function R(r,a,n){let{data:l}=a;console.log("data exported",l);const s=l.posts.reverse();return r.$$set=t=>{"data"in t&&n(1,l=t.data)},[s,l]}class j extends S{constructor(a){super(),H(this,a,R,N,J,{data:1})}}export{j as default};