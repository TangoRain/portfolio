import{S as x,o as Y,l as j,m as y,n as z,q as b,U as l,v as D,g,w as L,x as G,y as H,z as K,A as Z,L as $,P as J,B as V,b as q,C as Q,R as W,D as C,E as X,F as k,G as p,f as F,H as ee,I as re,J as te}from"./runtime.DmIzA1C0.js";import{d as ne}from"./disclose-version.DO2YKsTc.js";function E(f,v=null,o){if(typeof f!="object"||f===null||x in f)return f;const P=H(f);if(P!==Y&&P!==j)return f;var i=new Map,c=K(f),R=y(0);c&&i.set("length",y(f.length));var m;return new Proxy(f,{defineProperty(a,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&z();var t=i.get(e);return t===void 0?(t=y(r.value),i.set(e,t)):b(t,E(r.value,m)),!0},deleteProperty(a,e){var r=i.get(e);if(r===void 0)e in a&&i.set(e,y(l));else{if(c&&typeof e=="string"){var t=i.get("length"),n=Number(e);Number.isInteger(n)&&n<t.v&&b(t,n)}b(r,l),U(R)}return!0},get(a,e,r){var d;if(e===x)return f;var t=i.get(e),n=e in a;if(t===void 0&&(!n||(d=D(a,e))!=null&&d.writable)&&(t=y(E(n?a[e]:l,m)),i.set(e,t)),t!==void 0){var u=g(t);return u===l?void 0:u}return Reflect.get(a,e,r)},getOwnPropertyDescriptor(a,e){var r=Reflect.getOwnPropertyDescriptor(a,e);if(r&&"value"in r){var t=i.get(e);t&&(r.value=g(t))}else if(r===void 0){var n=i.get(e),u=n==null?void 0:n.v;if(n!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(a,e){var u;if(e===x)return!0;var r=i.get(e),t=r!==void 0&&r.v!==l||Reflect.has(a,e);if(r!==void 0||L!==null&&(!t||(u=D(a,e))!=null&&u.writable)){r===void 0&&(r=y(t?E(a[e],m):l),i.set(e,r));var n=g(r);if(n===l)return!1}return t},set(a,e,r,t){var S;var n=i.get(e),u=e in a;if(c&&e==="length")for(var d=r;d<n.v;d+=1){var _=i.get(d+"");_!==void 0?b(_,l):d in a&&(_=y(l),i.set(d+"",_))}n===void 0?(!u||(S=D(a,e))!=null&&S.writable)&&(n=y(void 0),b(n,E(r,m)),i.set(e,n)):(u=n.v!==l,b(n,E(r,m)));var w=Reflect.getOwnPropertyDescriptor(a,e);if(w!=null&&w.set&&w.set.call(t,r),!u){if(c&&typeof e=="string"){var A=i.get("length"),I=Number(e);Number.isInteger(I)&&I>=A.v&&b(A,I+1)}U(R)}return!0},ownKeys(a){g(R);var e=Reflect.ownKeys(a).filter(n=>{var u=i.get(n);return u===void 0||u.v!==l});for(var[r,t]of i)t.v!==l&&!(r in a)&&e.push(r);return e},setPrototypeOf(){G()}})}function U(f,v=1){b(f,f.v+v)}function M(f){for(var v=L,o=L;v!==null&&!(v.f&(Q|W));)v=v.parent;try{return C(v),f()}finally{C(o)}}function ie(f,v,o,P){var B;var i=(o&X)!==0,c=(o&k)!==0,R=(o&p)!==0,m=(o&re)!==0,a=!1,e;R?[e,a]=ne(()=>f[v]):e=f[v];var r=(B=D(f,v))==null?void 0:B.set,t=P,n=!0,u=!1,d=()=>(u=!0,n&&(n=!1,m?t=q(P):t=P),t);e===void 0&&P!==void 0&&(r&&c&&Z(),e=d(),r&&r(e));var _;if(c)_=()=>{var s=f[v];return s===void 0?d():(n=!0,u=!1,s)};else{var w=M(()=>(i?F:ee)(()=>f[v]));w.f|=$,_=()=>{var s=g(w);return s!==void 0&&(t=void 0),s===void 0?t:s}}if(!(o&J))return _;if(r){var A=f.$$legacy;return function(s,h){return arguments.length>0?((!c||!h||A||a)&&r(h?_():s),s):_()}}var I=!1,S=!1,N=te(e),O=M(()=>F(()=>{var s=_(),h=g(N);return I?(I=!1,S=!0,h):(S=!1,N.v=s)}));return i||(O.equals=V),function(s,h){if(arguments.length>0){const T=h?g(O):c&&R?E(s):s;return O.equals(T)||(I=!0,b(N,T),u&&t!==void 0&&(t=T),q(()=>g(O))),s}return g(O)}}export{E as a,ie as p};