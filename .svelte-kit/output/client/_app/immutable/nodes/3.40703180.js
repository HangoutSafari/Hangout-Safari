import{S as K,i as R,s as j,k as d,l as m,m as p,h as f,b as C,E as q,K as w,q as S,a as I,r as k,c as P,n as V,D as c,u as x}from"../chunks/index.2921e8e9.js";function A(i,l,n){const e=i.slice();return e[1]=l[n],e}function B(i){let l,n,e,t=i[1].name+"",s,a,h,_=i[1].Specie+"",u,g,b,E;return{c(){l=d("div"),n=d("p"),e=d("a"),s=S(t),h=S(" - "),u=S(_),g=I(),b=d("br"),E=I(),this.h()},l(r){l=m(r,"DIV",{});var o=p(l);n=m(o,"P",{});var v=p(n);e=m(v,"A",{href:!0});var D=p(e);s=k(D,t),D.forEach(f),h=k(v," - "),u=k(v,_),v.forEach(f),g=P(o),b=m(o,"BR",{}),E=P(o),o.forEach(f),this.h()},h(){V(e,"href",a="/events/"+i[1].id)},m(r,o){C(r,l,o),c(l,n),c(n,e),c(e,s),c(n,h),c(n,u),c(l,g),c(l,b),c(l,E)},p(r,o){o&1&&t!==(t=r[1].name+"")&&x(s,t),o&1&&a!==(a="/events/"+r[1].id)&&V(e,"href",a),o&1&&_!==(_=r[1].Specie+"")&&x(u,_)},d(r){r&&f(l)}}}function y(i){let l,n=i[0].items,e=[];for(let t=0;t<n.length;t+=1)e[t]=B(A(i,n,t));return{c(){l=d("div");for(let t=0;t<e.length;t+=1)e[t].c()},l(t){l=m(t,"DIV",{});var s=p(l);for(let a=0;a<e.length;a+=1)e[a].l(s);s.forEach(f)},m(t,s){C(t,l,s);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(l,null)},p(t,[s]){if(s&1){n=t[0].items;let a;for(a=0;a<n.length;a+=1){const h=A(t,n,a);e[a]?e[a].p(h,s):(e[a]=B(h),e[a].c(),e[a].m(l,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=n.length}},i:q,o:q,d(t){t&&f(l),w(e,t)}}}function z(i,l,n){let{data:e}=l;return console.log(e),i.$$set=t=>{"data"in t&&n(0,e=t.data)},[e]}class G extends K{constructor(l){super(),R(this,l,z,y,j,{data:0})}}export{G as component};
