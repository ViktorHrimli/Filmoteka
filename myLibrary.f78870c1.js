var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=i);const n={title:document.querySelector("#titel-list"),titleLib:document.querySelector("#titel-list-lib"),backDrop:document.querySelector(".backdrop"),btnAddWatched:document.querySelector('button[data-action="add-to-watched-lib"]'),btnQueve:document.querySelector('button[data-action="queve-lib"]')};function o(e){for(let e of n.titleLib.children)e.addEventListener("click",c)}function c(e){n.backDrop.classList.remove("is-hidden"),n.backDrop.addEventListener("click",r),n.backDrop.classList.contains("is-hidden")||window.addEventListener("keydown",d,{once:!0}),n.backDrop.classList.contains("is-hidden")&&n.backDrop.removeEventListener("click",r),k(parseInt(e.target.name))}function r(e){"backdrop"===e.target.className&&n.backDrop.classList.add("is-hidden")}function d(e){if("Escape"===e.code)return n.backDrop.classList.add("is-hidden")}function l(e){return"watched"===e?(n.btnQueve.classList.remove("active"),void n.btnAddWatched.classList.add("active")):"queve"===e?(n.btnAddWatched.classList.remove("active"),void n.btnQueve.classList.add("active")):void 0}function s(e){n.titleLib.innerHTML="",JSON.parse(localStorage.getItem(e)).map((e=>{n.titleLib.insertAdjacentHTML("beforeend",function({filmsName:e,filmsImg:t,filmRelise:a,filmGanre:i,filmRait:n,id:o}){return`\n  <li class="list--title">\n          <img name="${o}" src="https://image.tmdb.org/t/p/w500${t}" alt="${e}" />\n        <div class="conteiner--image__title">\n          <p class="image--title">\n            ${e} <br />\n            <div class="list--ganre_date--conteiner">\n            <span class="image--text">\n              ${function(e){let t=[];return e.map((e=>t.push(e.name))),t.length>2&&t.splice(2,3),t.join(" ")}(i)} | ${a}\n            </span>\n            <span class="rait">${n.toFixed(2)}</span>\n            </div>\n          </p>\n        </div>\n      </li>\n    `}(e)),o()}))}function u(e,t,a){e.addEventListener("click",(e=>JSON.parse(localStorage.getItem(a[0])).map((e=>e.id)).includes(t.id)?m(a[0],t):JSON.parse(localStorage.getItem(a[1])).map((e=>e.id)).includes(t.id)?m(a[1],t):void 0))}function m(e,t){let a=[];JSON.parse(localStorage.getItem(e)).filter((e=>{if(e.id!==t.id)return a.push(e)})),localStorage.removeItem(e),localStorage.setItem(e,JSON.stringify(a)),n.backDrop.classList.add("is-hidden"),s(e)}function p(e,t,{btnWt:a,btnQueve:i,btnRemoveCard:n}){return JSON.parse(localStorage.getItem(t[0])).map((e=>e.id)).includes(e.id)?(i.classList.add("opaciti"),n.classList.remove("opaciti"),void n.classList.add("remove")):JSON.parse(localStorage.getItem(t[1])).map((e=>e.id)).includes(e.id)?(a.classList.add("opaciti"),n.classList.remove("opaciti"),void n.classList.add("remove")):void 0}function v(e){const t={btnWt:document.querySelector('button[data-action="add-to-watch"]'),btnQueve:document.querySelector('button[data-action="queve"]'),btnRemoveCard:document.querySelector('button[data-action="remove"]')};p(e,Object.keys(localStorage),t),u(t.btnRemoveCard,e,Object.keys(localStorage))}n.btnAddWatched.addEventListener("click",(function(e){l(e.target.name),s("watch")})),n.btnQueve.addEventListener("click",(function(e){l(e.target.name),s("queve")}));var b=i("cjwWu");function g(e,t,a,i){e.addEventListener("click",(e=>{let n=[],o=[];o=JSON.parse(localStorage.getItem(i)),n=JSON.parse(localStorage.getItem(a))||[],o.map((e=>e.id)).includes(t.id)&&!n.map((e=>e.id)).includes(t.id)&&n.push(t),localStorage.removeItem(a),localStorage.setItem(a,JSON.stringify(n))}))}function f(e,t,a,i){e.addEventListener("click",(e=>{let n=[],o=[];n=JSON.parse(localStorage.getItem(a)),o=JSON.parse(localStorage.getItem(i))||[],!o.map((e=>e.id)).includes(t.id)&&n.map((e=>e.id)).includes(t.id)&&o.push(t),localStorage.removeItem(i),localStorage.setItem(i,JSON.stringify(o))}))}function S(e){const t={btnWt:document.querySelector('button[data-action="add-to-watch"]'),btnQueve:document.querySelector('button[data-action="queve"]'),btnRemoveCard:document.querySelector('button[data-action="remove"]')},a="watch",i="queve";g(t.btnWt,e,a,i),f(t.btnQueve,e,a,i)}i("3ZI3M");var L=i("bBupM");b=i("cjwWu");function h(e){const t=new Date(e.release_date).getFullYear();return{filmsName:e.original_title,filmsImg:e.poster_path,filmRelise:t,filmGanre:e.genres,filmRait:e.vote_average,id:e.id}}function k(e){let t=[];(0,b.getIdMovies)(e).then((({data:e})=>{e.genres.filter((e=>(t.push(e.name),t))),n.backDrop.innerHTML="",n.backDrop.insertAdjacentHTML("beforeend",(0,L.renderModal_Lib)(e,t)),S(h(e)),v(e)})).catch(console.error)}
//# sourceMappingURL=myLibrary.f78870c1.js.map
