var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);const i={title:document.querySelector("#titel-list"),titleLib:document.querySelector("#titel-list-lib"),backDrop:document.querySelector(".backdrop"),btnAddWatched:document.querySelector('button[data-action="add-to-watched-lib"]'),btnQueve:document.querySelector('button[data-action="queve-lib"]'),poster:document.querySelector("#poster")};function o({filmsName:e,filmsImg:t,filmRelise:n,filmGanre:a,filmRait:i,id:o}){return`\n  <li class="list--title">\n          <img name="${o}" src="https://image.tmdb.org/t/p/w500${t}" alt="${e}" />\n        <div class="conteiner--image__title">\n          <p class="image--title">\n            ${e} <br />\n            <div class="list--ganre_date--conteiner">\n            <span class="image--text">\n              ${function(e){let t=[];e.map((e=>t.push(e.name))),t.length>2&&t.splice(2,3);return t.join(" ")}(a)} | ${n}\n            </span>\n            <span class="rait">${i.toFixed(2)}</span>\n            </div>\n          </p>\n        </div>\n      </li>\n    `}function c(e){return"watched"===e?(i.btnQueve.classList.remove("active"),void i.btnAddWatched.classList.add("active")):"queve"===e?(i.btnAddWatched.classList.remove("active"),void i.btnQueve.classList.add("active")):void 0}function r(){for(let e of i.titleLib.children)e.addEventListener("click",s)}function s(e){i.backDrop.classList.remove("is-hidden"),i.backDrop.addEventListener("click",d),i.backDrop.classList.contains("is-hidden")||window.addEventListener("keydown",l,{once:!0}),i.backDrop.classList.contains("is-hidden")&&i.backDrop.removeEventListener("click",d),k(parseInt(e.target.name))}function d(e){"backdrop"===e.target.className&&i.backDrop.classList.add("is-hidden")}function l(e){if("Escape"===e.code)return i.backDrop.classList.add("is-hidden")}function u(e){i.titleLib.innerHTML="",JSON.parse(localStorage.getItem(e)).map((e=>{i.titleLib.insertAdjacentHTML("beforeend",o(e)),r()}))}function m(e){return g("watch",e)}function v(e){return g("queve",e)}function p(e,t,n){e.addEventListener("click",(e=>{console.log(e.target),m(n)})),t.addEventListener("click",(e=>{console.log(e.target),v(n)}))}function g(e,t){let n=[];console.log(e),JSON.parse(localStorage.getItem(e)).filter((e=>{if(e.id!==t.id)return n.push(e)})),localStorage.removeItem(e),localStorage.setItem(e,JSON.stringify(n)),i.backDrop.classList.add("is-hidden"),u(e)}function f(e,{btnWt:t,btnQueve:n,btnRemoveWatch:a,btnRemoveQueve:i}){const o=JSON.parse(localStorage.getItem("find-tru-page"));return"watch"===o?(t.classList.add("opaciti"),a.classList.remove("opaciti"),void a.classList.add("remove")):"queve"===o?(n.classList.add("opaciti"),i.classList.remove("opaciti"),void i.classList.add("remove")):void 0}function b(e){const t={btnWt:document.querySelector('button[data-action="add-to-watch"]'),btnQueve:document.querySelector('button[data-action="queve"]'),btnRemoveWatch:document.querySelector('button[data-action="removeWatch"]'),btnRemoveQueve:document.querySelector('button[data-action="removeQueve"]')};f(0,t),p(t.btnRemoveWatch,t.btnRemoveQueve,e)}i.btnAddWatched.addEventListener("click",(function(e){localStorage.setItem("find-tru-page",JSON.stringify("watch")),c(e.target.name),u("watch")})),i.btnQueve.addEventListener("click",(function(e){localStorage.setItem("find-tru-page",JSON.stringify("queve")),c(e.target.name),u("queve")}));var S=a("cjwWu");function h(e,t,n,a){e.addEventListener("click",(e=>{let i=[],o=[];o=JSON.parse(localStorage.getItem(a)),i=JSON.parse(localStorage.getItem(n))||[],o.map((e=>e.id)).includes(t.id)&&!i.map((e=>e.id)).includes(t.id)&&i.push(t),localStorage.removeItem(n),localStorage.setItem(n,JSON.stringify(i))}))}function L(e,t,n,a){e.addEventListener("click",(e=>{let i=[],o=[];i=JSON.parse(localStorage.getItem(n)),o=JSON.parse(localStorage.getItem(a))||[],!o.map((e=>e.id)).includes(t.id)&&i.map((e=>e.id)).includes(t.id)&&o.push(t),localStorage.removeItem(a),localStorage.setItem(a,JSON.stringify(o))}))}function w(e){const t={btnWt:document.querySelector('button[data-action="add-to-watch"]'),btnQueve:document.querySelector('button[data-action="queve"]'),btnRemoveCard:document.querySelector('button[data-action="remove"]')},n="watch",a="queve";h(t.btnWt,e,n,a),L(t.btnQueve,e,n,a)}a("3ZI3M");var q=a("bBupM");S=a("cjwWu");function y(e){const t=new Date(e.release_date).getFullYear();return{filmsName:e.original_title,filmsImg:e.poster_path,filmRelise:t,filmGanre:e.genres,filmRait:e.vote_average,id:e.id}}function k(e){let t=[];(0,S.getIdMovies)(e).then((({data:e})=>{e.genres.filter((e=>(t.push(e.name),t))),i.backDrop.innerHTML="",i.backDrop.insertAdjacentHTML("beforeend",(0,q.renderModal_Lib)(e,t)),w(y(e)),b(e)})).catch(console.error)}localStorage.setItem("find-tru-page",JSON.stringify("watch")),JSON.parse(localStorage.getItem("watch")).length<1?i.poster.classList.remove("dis"):(i.poster.classList.add("dis"),i.btnAddWatched.classList.add("active"),u("watch"));
//# sourceMappingURL=myLibrary.5ef85a4b.js.map