!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var i={title:document.querySelector("#titel-list"),titleLib:document.querySelector("#titel-list-lib"),backDrop:document.querySelector(".backdrop"),btnAddWatched:document.querySelector('button[data-action="add-to-watched-lib"]'),btnQueve:document.querySelector('button[data-action="queve-lib"]')};function c(e){var t=!0,n=!1,a=void 0;try{for(var c,r=i.titleLib.children[Symbol.iterator]();!(t=(c=r.next()).done);t=!0){c.value.addEventListener("click",o)}}catch(e){n=!0,a=e}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}}function o(e){var t,n;i.backDrop.classList.remove("is-hidden"),i.backDrop.addEventListener("click",r),i.backDrop.classList.contains("is-hidden")||window.addEventListener("keydown",d,{once:!0}),i.backDrop.classList.contains("is-hidden")&&i.backDrop.removeEventListener("click",r),t=parseInt(e.target.name),n=[],(0,m.getIdMovies)(t).then((function(e){var t=e.data;t.genres.filter((function(e){return n.push(e.name),n})),i.backDrop.innerHTML="",i.backDrop.insertAdjacentHTML("beforeend",(0,p.renderModal_Lib)(t,n)),f(t)})).catch(console.error)}function r(e){"backdrop"===e.target.className&&i.backDrop.classList.add("is-hidden")}function d(e){if("Escape"===e.code)return i.backDrop.classList.add("is-hidden")}function s(e){return"watched"===e?(i.btnQueve.classList.remove("active"),void i.btnAddWatched.classList.add("active")):"queve"===e?(i.btnAddWatched.classList.remove("active"),void i.btnQueve.classList.add("active")):void 0}function l(e){i.titleLib.innerHTML="";var t=localStorage.getItem(e);JSON.parse(t).map((function(e){var t,n,a,o,r,d,s,l,u;i.titleLib.insertAdjacentHTML("beforeend",(n=(t=e).filmsName,a=t.filmsImg,o=t.filmRelise,r=t.filmGanre,d=t.filmRait,s=t.id,u=[],r.map((function(e){return u.push(e.name)})),u.length>2&&u.splice(2,3),l=u.join(" "),'\n  <li class="list--title">\n          <img name="'.concat(s,'" src="https://image.tmdb.org/t/p/w500').concat(a,'" alt="').concat(n,'" />\n        <div class="conteiner--image__title">\n          <p class="image--title">\n            ').concat(n,' <br />\n            <div class="list--ganre_date--conteiner">\n            <span class="image--text">\n              ').concat(l," | ").concat(o,'\n            </span>\n            <span class="rait">').concat(d.toFixed(2),"</span>\n            </div>\n          </p>\n        </div>\n      </li>\n    "))),c()}))}function u(e,t,n){e.addEventListener("click",(function(){var e=[];JSON.parse(localStorage.getItem(n[0])).filter((function(n){if(n.id!==t.id)return e.push(n)})),localStorage.removeItem(n[0]),localStorage.setItem(n[0],JSON.stringify(e)),i.backDrop.classList.add("is-hidden"),l(n[0])}))}function v(e,t,n){e.addEventListener("click",(function(){var e=[];JSON.parse(localStorage.getItem(n[1])).filter((function(n){if(n.id!==t.id)return e.push(n)})),localStorage.removeItem(n[1]),localStorage.setItem(n[1],JSON.stringify(e)),i.backDrop.classList.add("is-hidden"),l(n[1])}))}function b(e,t,n){var a=n.btnWt,i=n.btnQueve,c=n.btnRemoveCard;return JSON.parse(localStorage.getItem(t[0])).map((function(e){return e.id})).includes(e.id)?(i.classList.add("active"),a.classList.add("opaciti"),c.classList.remove("opaciti"),void c.classList.add("remove")):JSON.parse(localStorage.getItem(t[1])).map((function(e){return e.id})).includes(e.id)?(i.classList.add("opaciti"),a.classList.add("active"),c.classList.remove("opaciti"),void c.classList.add("remove")):void 0}function f(e){var t={btnWt:document.querySelector('button[data-action="add-to-watch"]'),btnQueve:document.querySelector('button[data-action="queve"]'),btnRemoveCard:document.querySelector('button[data-action="remove"]')};b(e,Object.keys(localStorage),t),v(t.btnRemoveCard,e,Object.keys(localStorage)),u(t.btnRemoveCard,e,Object.keys(localStorage))}i.btnAddWatched.addEventListener("click",(function(e){s(e.target.name),l(Object.keys(localStorage)[1])})),i.btnQueve.addEventListener("click",(function(e){s(e.target.name),l(Object.keys(localStorage)[0])}));var m=a("gbT2k");a("fpFLL");var p=a("gQM3s");m=a("gbT2k")}();
//# sourceMappingURL=myLibrary.c0f24449.js.map