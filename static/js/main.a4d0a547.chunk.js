(this["webpackJsonpfave-movies"]=this["webpackJsonpfave-movies"]||[]).push([[0],{37:function(e,i,t){},38:function(e,i,t){},64:function(e,i,t){"use strict";t.r(i);var n=t(0),c=t.n(n),o=t(29),s=t.n(o),a=(t(37),t(38),t(13)),r=t(2),l={movies:[],isLoading:!1,likedMoviesList:[],likeMovie:function(e){},unLikeMovie:function(e){}},j=Object(n.createContext)(l),d=j,b=j.Provider,u=(j.Consumer,t(8)),v=t(30),O=t.n(v);var h=t(19);var k=t(1),x=function(e){var i=e.likeMovie,t=e.unLikeMovie,c=e.movie,o=Object(n.useState)(!1),s=Object(u.a)(o,2),a=s[0],r=s[1];return Object(k.jsxs)("div",{className:"movie-tile",children:[Object(k.jsx)("div",{className:"like-btn-wrapper",children:Object(k.jsx)("label",{htmlFor:c.id.toString(),className:"like-label",children:Object(k.jsx)("input",{id:c.id.toString(),className:"like-btn",type:"checkbox",checked:c.liked,onChange:function(){!function(e){!e&&c.liked?t(c):i(c)}(a)},onClick:function(){r(a=!a)}})})}),Object(k.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(c.poster_path),alt:c.overview}),Object(k.jsx)("br",{}),Object(k.jsx)("small",{children:"Title"}),Object(k.jsx)("p",{children:c.original_title}),Object(k.jsx)("small",{children:"Popularity"}),Object(k.jsx)("p",{children:c.popularity})]})},m=function(){var e=Object(n.useContext)(d),i=e.movies,t=e.likeMovie,c=e.unLikeMovie;return Object(k.jsx)("div",{className:"movies-browser",children:i.map((function(e){return Object(k.jsx)(x,{movie:e,likeMovie:t,unLikeMovie:c},e.id)}))})},f=function(){var e=Object(n.useContext)(d),i=e.likedMoviesList,t=e.likeMovie,c=e.unLikeMovie;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h2",{children:"Your Favourite Movies"}),Object(k.jsx)("div",{className:"movies-browser",children:i.map((function(e){return Object(k.jsx)(x,{movie:e,likeMovie:t,unLikeMovie:c},e.id)}))})]})},p=function(){var e=function(){var e=Object(n.useState)([]),i=Object(u.a)(e,2),t=i[0],c=i[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),a=s[0],r=s[1],l=Object(n.useCallback)((function(){r(!0),O.a.get("".concat("https://api.themoviedb.org/3/movie/popular","?api_key=").concat("d0f5f2e135336200362af8a1a73acb17","&page=1")).then((function(e){c(e.data.results),r(!1)})).catch((function(e){console.error(e),r(!1)}))}),[c]);return Object(n.useEffect)((function(){return l()}),[l]),{isLoading:a,movies:t}}(),i=e.movies,t=e.isLoading,c=function(){var e=Object(n.useState)([]),i=Object(u.a)(e,2),t=i[0],c=i[1],o=Object(n.useCallback)((function(e){e.liked=!0;var i=Object(h.a)(t);i.some((function(i){return i.id===e.id}))||(i=i.concat(e),c(i))}),[t]),s=Object(n.useCallback)((function(e){var i=Object(h.a)(t);e.liked=!1;var n=i.findIndex((function(i){return i.id===e.id}));if(n>-1){var o=i.slice(0,n),s=i.slice(n+1);i=o.concat(s)}c(i)}),[t]);return{likedMoviesList:t,likeMovie:o,unLikeMovie:s}}(),o=c.likeMovie,s=c.unLikeMovie,l=c.likedMoviesList,j={movies:i,isLoading:t,likeMovie:o,likedMoviesList:l,unLikeMovie:s};return Object(k.jsxs)(a.a,{basename:"/imdb",children:[Object(k.jsx)("nav",{children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsx)(a.b,{to:"/",children:"Home"})}),Object(k.jsx)("li",{children:Object(k.jsx)(a.b,{to:"/liked",children:"Liked"})})]})}),Object(k.jsx)(r.c,{children:Object(k.jsx)("div",{className:"app-content",children:Object(k.jsxs)(b,{value:j,children:[Object(k.jsx)(r.a,{exact:!0,path:"/",children:t?Object(k.jsx)("p",{children:"Loading..."}):Object(k.jsx)(m,{})}),Object(k.jsx)(r.a,{exact:!0,path:"/liked",children:l&&l.length>0?Object(k.jsx)(f,{}):Object(k.jsx)("p",{children:"You don't have any faved movies!"})})]})})})]})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,65)).then((function(i){var t=i.getCLS,n=i.getFID,c=i.getFCP,o=i.getLCP,s=i.getTTFB;t(e),n(e),c(e),o(e),s(e)}))};t(32).config({path:"../.env"}),s.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(p,{})}),document.getElementById("root")),M()}},[[64,1,2]]]);
//# sourceMappingURL=main.a4d0a547.chunk.js.map