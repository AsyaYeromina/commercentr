(()=>{let e=document.getElementById("name"),t=document.getElementById("email"),r=document.getElementById("phone"),l=document.getElementById("agree"),n=document.getElementById("select"),m=document.getElementById("form");console.log("test"),m.addEventListener("submit",async m=>{m.preventDefault(),o()&&a(n)&&d(l)&&(e.value.trim(),r.value.trim(),t.value.trim(),n.value)});let o=()=>{let l=u(e,c,3),n=u(t,s),m=u(r,i);return l&&n&&m},a=e=>e.value===e.options[0].value?(g(e),!1):(p(e),!0),d=e=>!!e.checkValidity()||(e.reportValidity(),!1),u=(e,t,r=0)=>{let l=e.value.trim();return""===l||l.length<r||!t(l)?(g(e),!1):(p(e),!0)},s=e=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.trim()),i=e=>/^(\+?\d{1,3})?[\s-]?(\d{3})[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/.test(e.trim()),c=e=>/^[a-zA-Zа-яА-ЯіІїЇєЄ' ]+$/u.test(e.trim()),g=e=>e.parentElement?.classList.add("form-group--error"),p=e=>e.parentElement?.classList.remove("form-group--error");document.querySelectorAll("input[required], select[required]").forEach(e=>{console.log(e.name);let t=document.querySelector(`label[for="${e.id}"]`);t&&(t.innerHTML+=" <span>*</span>")})})();
//# sourceMappingURL=index.7c26e42c.js.map
