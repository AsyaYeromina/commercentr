document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".header-burger-button"),t=document.querySelector(".header"),n=t.querySelectorAll("a");function o(){document.body.classList.remove("modal-open"),document.removeEventListener("click",a)}function a(n){e.contains(n.target)||t.contains(n.target)||o()}function d(){o()}e&&t&&(e.addEventListener("click",function(e){e.stopPropagation(),document.body.classList.contains("modal-open")?o():(document.body.classList.add("modal-open"),document.addEventListener("click",a))}),n.forEach(e=>e.addEventListener("click",d)))}),document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("languageDropdownBtn"),t=document.querySelector(".language-dropdown"),n=document.querySelector(".language-list");e.addEventListener("click",function(o){o.stopPropagation(),n.classList.toggle("visually-hidden"),t.classList.toggle("language-dropdown--open");let a=!n.classList.contains("visually-hidden");e.setAttribute("aria-expanded",a)}),document.addEventListener("click",function(o){t.contains(o.target)||(n.classList.add("visually-hidden"),e.setAttribute("aria-expanded","false"),t.classList.remove("language-dropdown--open"))}),document.querySelectorAll(".language-list-item").forEach(o=>{o.addEventListener("click",function(){let o=this.querySelector("span").textContent;e.querySelector("span").textContent=o,n.classList.add("visually-hidden"),e.setAttribute("aria-expanded","false"),t.classList.remove("language-dropdown--open")})})});
//# sourceMappingURL=index.62235a30.js.map
