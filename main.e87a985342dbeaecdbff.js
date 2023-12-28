(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function o(o){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){var r,c,i,u;r=o,c=t,i=n[t],u=function(t,o){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(c),(c="symbol"==e(u)?u:String(u))in r?Object.defineProperty(r,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[c]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(n,e))}))}return o}var r=function(){return localStorage.getItem("food")?JSON.parse(localStorage.getItem("food")):[]},n=function(e){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]},c=function(e){localStorage.getItem(e)&&localStorage.removeItem(e)},i=r(),u=document.querySelector(".popup__radio-form"),a=function(e){u.innerHTML="",e.forEach((function(e){l(e,u)}))},l=function(e,t){var o=function(e){var t=e.name,o=e.calories,r=e.id,n=document.querySelector("#food-template").content.querySelector(".popup__label").cloneNode(!0);return n.querySelector(".popup__food").textContent=t,n.querySelector(".popup__calories").textContent="".concat(o," ккал / 100 г"),n.querySelector(".popup__radio").value=r,n}(e);t.append(o)},f=function(){var e=n("breakfast"),t=n("lunch"),o=n("dinner"),r=n("nosh");return e.concat(t,o,r)},s=function(){var e=f();return Math.ceil(e.reduce((function(e,t){return e+ +t.calories*+t.weight/100}),0))},d=function(e){var t=n(e);return Math.ceil(t.reduce((function(e,t){return e+ +t.calories*+t.weight/100}),0))},p=function(e){e.classList.add("popup_opened")},y=function(e){e.classList.remove("popup_opened")};document.querySelectorAll(".popup").forEach((function(e){e.querySelector(".popup__close-button").addEventListener("click",(function(){y(e)}))}));var m=document.querySelector("#popup-new-norm"),v=document.forms.changeNormForm;v.addEventListener("submit",(function(e){e.preventDefault(),L(v.querySelector(".popup__input").value),y(m)}));var b=document.querySelector("#callories"),S=document.querySelector("#hydrocarbons"),_=document.querySelector("#proteins"),g=document.querySelector("#fats"),h=document.querySelector("#norm"),q=document.querySelector(".info__change-norm"),O=localStorage.getItem("norm")?localStorage.getItem("norm"):2200,w=function(){h.textContent="".concat(O," ккал")},L=function(e){O=e,function(e){localStorage.setItem("norm",e)}(e),w()},P=function(){var e;b.textContent=s(),_.textContent=(e=f(),Math.ceil(e.reduce((function(e,t){return e+ +t.proteins*+t.weight/100}),0))),S.textContent=function(){var e=f();return Math.ceil(e.reduce((function(e,t){return e+ +t.hydrocarbons*+t.weight/100}),0))}(),g.textContent=function(){var e=f();return Math.ceil(e.reduce((function(e,t){return e+ +t.fats*+t.weight/100}),0))}()};w(),q.addEventListener("click",(function(){v.reset(),p(m)}));var j=document.querySelector("#popup-new-food"),E=document.forms.newFoodForm;function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function I(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function x(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?I(Object(o),!0).forEach((function(t){var r,n,c,i;r=e,n=t,c=o[t],i=function(e,t){if("object"!=C(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!=C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n),(n="symbol"==C(i)?i:String(i))in r?Object.defineProperty(r,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[n]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):I(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}E.addEventListener("submit",(function(e){e.preventDefault();var t=E.querySelectorAll(".popup__input"),n={};t.forEach((function(e){n[e.name]=e.value})),function(e){var t=r();t.push(o(o({},e),{},{id:t.length})),localStorage.setItem("food",JSON.stringify(t))}(n);var c=r();a(c),y(j),p(document.querySelector("#popup-add-food"))}));var M,k=document.forms.addForm,D=document.querySelector("#popup-add-food"),N=document.querySelector(".popup__new-food"),J=document.querySelector("#alert");k.addEventListener("submit",(function(e){e.preventDefault();var t=k.elements.food.value,o=r().find((function(e){return e.id===+t})),c=+k.querySelector("#weight-input").value;!function(e,t){var o=n(e);o.push(t),localStorage.setItem(e,JSON.stringify(o))}(M,x(x({},o),{},{weight:c})),U(),P(),y(D),s()>O&&p(J)})),N.addEventListener("click",(function(){y(D),p(j),E.reset()}));var T,F=document.querySelector(".statistics__canvas").getContext("2d"),A=document.querySelector("#statistics-breakfast"),H=document.querySelector("#statistics-lunch"),z=document.querySelector("#statistics-dinner"),B=document.querySelector("#statistics-nosh"),G=function(e,t,o,r,n,c){F.fillStyle=c,F.beginPath(),F.moveTo(e,t),F.arc(e,t,o,r,n),F.closePath(),F.fill()},K=function(){var e=s(),t=d("breakfast"),o=d("lunch"),r=d("dinner");!function(e,t,o,r){A.textContent="".concat(e," ккал"),H.textContent="".concat(t," ккал"),z.textContent="".concat(o," ккал"),B.textContent="".concat(r," ккал")}(t,o,r,d("nosh"));var n=t/e*2*Math.PI,c=n+o/e*2*Math.PI;!function(e,t,o,r){G(150,150,150,0,2*Math.PI,"violet"),G(150,150,150,e,t,"blue"),G(150,150,150,t,o,"orange"),G(150,150,150,o,r,"green"),G(150,150,150,r,2*Math.PI,"yellow")}(0,n,c,c+r/e*2*Math.PI)},Q=document.querySelector(".food__button"),R=document.querySelectorAll(".card"),U=function(){R.forEach((function(e){!function(e){var t=e.querySelector(".card__display"),o=e.querySelector(".card__food"),r=t.querySelector(".card__button"),c=e.id.replace("#",""),i=n(c);if(o.innerHTML="",i.length>0){t.classList.contains("card__display_visible")||t.classList.add("card__display_visible");var u=Math.ceil(i.reduce((function(e,t){return e+ +t.calories*+t.weight/100}),0));e.querySelector(".card__calories").textContent="".concat(u," ккал"),i.forEach((function(e){return function(e,t,o){var r=function(e,t){var o=e.name,r=e.calories,n=e.weight,c=document.querySelector("#food-card-template").content.querySelector(".food-card").cloneNode(!0);return c.querySelector(".food-card__name").textContent=o,c.querySelector(".food-card__calories").textContent="".concat(Math.ceil(+r*+n/100)," ккал"),c.querySelector(".food-card__weight").textContent="".concat(+n," г"),c.querySelector(".food-card__delite").addEventListener("click",(function(){V(t,o)})),c}(e,o);t.append(r)}(e,o,c)}))}else t.classList.contains("card__display_visible")&&t.classList.remove("card__display_visible"),o.classList.contains("card__food_visible")&&(o.classList.remove("card__food_visible"),r.classList.remove("card__button_active"))}(e)})),K()},V=function(e,t){!function(e,t){var o=n(e);o=o.filter((function(e){e.name,t.name})),localStorage.setItem(e,JSON.stringify(o))}(e,t),U(),P()};Q.addEventListener("click",(function(){c("breakfast"),c("lunch"),c("dinner"),c("nosh"),U(),P()})),R.forEach((function(e){var t=e.id.replace("#",""),o=e.querySelector(".card__add-button"),r=e.querySelector(".card__button"),n=e.querySelector(".card__food");o.addEventListener("click",(function(){!function(e){p(D),M=e,k.reset()}(t)})),r.addEventListener("click",(function(){n.classList.toggle("card__food_visible"),r.classList.toggle("card__button_active")}))}));var W=document.querySelector(".popup__search"),X=document.querySelector(".popup__select");i.forEach((function(e){l(e,u)})),U(),P(),K(),W.addEventListener("input",(function(){!function(e){T=""===e.value?i:i.filter((function(t){return t.name.toLowerCase().includes(e.value.toLowerCase())})),a(T)}(W)})),X.addEventListener("change",(function(){!function(e){var t,o;"name"===e.value&&(o="name",t=i.sort((function(e,t){return e[o].toLowerCase()>t[o].toLowerCase()?1:-1}))),"calories"===e.value&&(t=function(e,t){return e.sort((function(e,o){return+e[t]-+o[t]}))}(i,"calories")),a(t)}(X)}))})();