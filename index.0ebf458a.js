const e=document.getElementById("form"),r=document.getElementById("name"),s=document.getElementById("email");document.getElementById("phone"),e.addEventListener("submit",e=>{e.preventDefault(),d()});const t=(e,r)=>{let s=e.parentElement;s.querySelector(".error").innerText=r,s.classList.add("error"),s.classList.remove("success")},a=e=>{let r=e.parentElement;r.querySelector(".error").innerText="",r.classList.add("success"),r.classList.remove("error")},o=e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),d=()=>{let e=r.value.trim(),d=s.value.trim(),l=password.value.trim(),n=password2.value.trim();""===e?t(r,"Username is required"):a(r),""===d?t(s,"Email is required"):o(d)?a(s):t(s,"Provide a valid email address"),""===l?t(password,"Password is required"):l.length<8?t(password,"Password must be at least 8 character."):a(password),""===n?t(password2,"Please confirm your password"):n!==l?t(password2,"Passwords doesn't match"):a(password2)};document.querySelectorAll("input[required], select[required]").forEach(e=>{let r=document.querySelector(`label[for="${e.id}"]`);r&&(r.innerHTML+=" <span>*</span>")});
//# sourceMappingURL=index.0ebf458a.js.map
