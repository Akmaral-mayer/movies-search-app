(this["webpackJsonpfilms-search-app"]=this["webpackJsonpfilms-search-app"]||[]).push([[0],{137:function(e,t,a){e.exports=a(254)},142:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),o=(a(142),a(35)),i=a(260),s=a(261),m=a(257),u=a(258),E=a(51),p=a(21),f=a(263),h=a(256),d=a(262),g=a(259),b=(a(143),i.a.Header),v=i.a.Content,y=s.a.Search,w=m.a.Meta,j=u.a.Title,x=function(e){var t=e.searchHandler;return l.a.createElement(E.a,null,l.a.createElement(p.a,{span:12,offset:6},l.a.createElement(y,{placeholder:"enter movie, series, episode name",enterButton:"Search",size:"large",onSearch:function(e){return t(e)}})))},O=function(e){var t=e.Title,a=e.imdbID,n=e.Poster,c=e.Type,r=e.ShowDetail,o=e.DetailRequest,i=e.ActivateModal;return l.a.createElement(p.a,{style:{margin:"20px 0"},className:"gutter-row",span:4},l.a.createElement("div",{className:"gutter-box"},l.a.createElement(m.a,{style:{width:200},cover:l.a.createElement("img",{alt:t,src:"N/A"===n?"https://placehold.it/198x264&text=Image+Not+Found":n}),onClick:function(){return i(!0),o(!0),void fetch("https://www.omdbapi.com/?i=".concat(a,"&apikey=").concat("207cfbe5")).then((function(e){return e})).then((function(e){return e.json()})).then((function(e){o(!1),r(e)})).catch((function(e){e.message,o(!1)}))}},l.a.createElement(w,{title:t,description:!1}),l.a.createElement(E.a,{style:{marginTop:"10px"},className:"gutter-row"},l.a.createElement(p.a,null,l.a.createElement(f.a,{color:"magenta"},c))))))},S=function(e){var t=e.Title,a=e.Poster,n=e.imdbRating,c=e.Rated,r=e.Runtime,o=e.Genre,i=e.Plot;return l.a.createElement(E.a,null,l.a.createElement(p.a,{span:11},l.a.createElement("img",{src:"N/A"===a?"https://placehold.it/198x264&text=Image+Not+Found":a,alt:t})),l.a.createElement(p.a,{span:13},l.a.createElement(E.a,null,l.a.createElement(p.a,{span:21},l.a.createElement(j,{level:4},t)),l.a.createElement(p.a,{span:3,style:{textAlign:"right"}},l.a.createElement(j,{level:4},l.a.createElement("span",{style:{color:"#41A8F8"}},n)))),l.a.createElement(E.a,{style:{marginBottom:"20px"}},l.a.createElement(p.a,null,l.a.createElement(f.a,null,c),l.a.createElement(f.a,null,r),l.a.createElement(f.a,null,o))),l.a.createElement(E.a,null,l.a.createElement(p.a,null,i))))},A=function(){return l.a.createElement("div",{style:{margin:"20px 0",textAlign:"center"}},l.a.createElement(h.a,null))};var k=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(o.a)(r,2),m=s[0],u=s[1],p=Object(n.useState)(!1),f=Object(o.a)(p,2),h=f[0],y=f[1],w=Object(n.useState)("London"),k=Object(o.a)(w,2),N=k[0],D=k[1],R=Object(n.useState)(!1),T=Object(o.a)(R,2),B=T[0],I=T[1],F=Object(n.useState)(!1),H=Object(o.a)(F,2),M=H[0],P=H[1],C=Object(n.useState)(!1),q=Object(o.a)(C,2),J=q[0],W=q[1];return Object(n.useEffect)((function(){y(!0),u(null),c(null),fetch("https://www.omdbapi.com/?s=".concat(N,"&apikey=").concat("207cfbe5")).then((function(e){return e})).then((function(e){return e.json()})).then((function(e){"False"===e.Response?u(e.Error):c(e.Search),y(!1)})).catch((function(e){var t=e.message;u(t),y(!1)}))}),[N]),l.a.createElement("div",{className:"App"},l.a.createElement(i.a,{className:"layout"},l.a.createElement(b,null,l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(j,{style:{color:"#ffffff",marginTop:"14px"},level:3},"OMDB API + React"))),l.a.createElement(v,{style:{padding:"0 50px"}},l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},l.a.createElement(x,{searchHandler:D}),l.a.createElement("br",null),l.a.createElement(E.a,{gutter:16,type:"flex",justify:"center"},h&&l.a.createElement(A,null),null!==m&&l.a.createElement("div",{style:{margin:"20px 0"}},l.a.createElement(d.a,{message:m,type:"error"})),null!==a&&a.length>0&&a.map((function(e,t){return l.a.createElement(O,Object.assign({ShowDetail:P,DetailRequest:W,ActivateModal:I,key:t},e))})))),l.a.createElement(g.a,{title:"Detail",centered:!0,visible:B,onCancel:function(){return I(!1)},footer:null,width:800},!1===J?l.a.createElement(S,M):l.a.createElement(A,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.61a7cdf6.chunk.js.map