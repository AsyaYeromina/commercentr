// #region ========== Inputs data validation and sending ========
// Find inputs in form
const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const agree = document.getElementById("agree");
const select = document.getElementById("select");
// Adjust minimal length for name validation if needed
const MINIMAL_NAME_LENGTH = 3;
// Form Submission Handler
form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    // Validate inputs
    if (!validateTextInputs()) return;
    // Validate Select and Checkbox
    if (!validateSelect(select) || !validateCheckbox(agree)) return;
    // Prepare form data
    const formData = {
        username: username.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim(),
        title: select.value
    };
// Submit form data via AJAX
// try {
//   const response = await fetch("https://api-endpoint...", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formData),
//   });
//   if (!response.ok) {
//     throw new Error(`Error: ${response.statusText}`);
//   }
//   const result = await response.json();
//   console.log("Success:", result);
//   alert("Дякуємо за звернення, ми вас сповістимо на вказаний e-mail!");
//   form.reset();
// } catch (error) {
//   console.error("Error submitting form:", error);
//   alert("Сталась помилка при відправленні форми. Спробуйте ще раз");
// }
});
// Validate All Inputs
const validateTextInputs = ()=>{
    const isUsernameValid = validateField(username, isValidName, MINIMAL_NAME_LENGTH);
    const isEmailValid = validateField(email, isValidEmail);
    const isPhoneValid = validateField(phone, isValidPhone);
    return isUsernameValid && isEmailValid && isPhoneValid;
};
// Validate Select
const validateSelect = (select)=>{
    if (select.value === select.options[0].value) {
        setError(select);
        return false;
    }
    setSuccess(select);
    return true;
};
// Validate Checkbox
const validateCheckbox = (checkbox)=>{
    if (!checkbox.checkValidity()) {
        checkbox.reportValidity();
        return false;
    }
    return true;
};
// Validate Each Field
const validateField = (input, validationFn, minLength = 0)=>{
    const value = input.value.trim();
    if (value === "" || value.length < minLength) {
        setError(input);
        return false;
    }
    if (!validationFn(value)) {
        setError(input);
        return false;
    }
    setSuccess(input);
    return true;
};
const isValidEmail = (email)=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
const isValidPhone = (phone)=>/^(\+?\d{1,3})?[\s-]?(\d{3})[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/.test(phone.trim());
const isValidName = (name)=>/^[a-zA-Zа-яА-ЯіІїЇєЄ' ]+$/u.test(name.trim());
// Error Styles adding
const setError = (element)=>element.parentElement?.classList.add("form-group--error");
const setSuccess = (element)=>element.parentElement?.classList.remove("form-group--error");
// #endregion
// #region ================== Customize Select =========================
document.querySelectorAll("select").forEach((select)=>{
    const numberOfOptions = select.options.length;
    select.classList.add("select-hidden");
    // Wrap select in a div
    const selectWrapper = document.createElement("div");
    selectWrapper.classList.add("select");
    select.parentNode.insertBefore(selectWrapper, select);
    selectWrapper.appendChild(select);
    // Add a styled dropdown button (show placeholder initially)
    const styledSelect = document.createElement("div");
    styledSelect.classList.add("select-styled");
    styledSelect.textContent = select.options[0].textContent; // Placeholder text
    styledSelect.setAttribute("data-placeholder", select.options[0].textContent);
    selectWrapper.appendChild(styledSelect);
    // Create the dropdown options list
    const list = document.createElement("ul");
    list.classList.add("select-options");
    selectWrapper.appendChild(list);
    for(let i = 0; i < numberOfOptions; i++){
        if (i === 0) continue; // Skip first (placeholder) option
        const listItem = document.createElement("li");
        listItem.textContent = select.options[i].textContent;
        listItem.setAttribute("rel", select.options[i].value);
        list.appendChild(listItem);
    }
    const listItems = list.querySelectorAll("li");
    let currentIndex = -1;
    // Event listener to show/hide the dropdown
    styledSelect.addEventListener("click", (e)=>{
        e.stopPropagation();
        // Close other open dropdowns
        document.querySelectorAll(".select-styled.active").forEach((activeSelect)=>{
            if (activeSelect !== styledSelect) {
                activeSelect.classList.remove("active");
                activeSelect.nextElementSibling.style.display = "none";
            }
        });
        styledSelect.classList.toggle("active");
        list.style.display = styledSelect.classList.contains("active") ? "block" : "none";
        // Reset keyboard navigation index
        currentIndex = -1;
    });
    // Handle option selection
    listItems.forEach((item, index)=>{
        item.addEventListener("click", (e)=>{
            e.stopPropagation();
            styledSelect.textContent = item.textContent;
            select.value = item.getAttribute("rel");
            list.querySelectorAll(".is-selected").forEach((selectedItem)=>{
                selectedItem.classList.remove("is-selected");
            });
            item.classList.add("is-selected");
            styledSelect.classList.remove("active");
            list.style.display = "none";
        });
        item.addEventListener("mouseenter", ()=>{
            currentIndex = index;
            updateSelection();
        });
    });
    // Close dropdown when clicking outside
    document.addEventListener("click", ()=>{
        styledSelect.classList.remove("active");
        list.style.display = "none";
    });
    // Keyboard navigation (skip placeholder)
    styledSelect.addEventListener("keydown", (e)=>{
        switch(e.key){
            case "ArrowDown":
                e.preventDefault();
                if (currentIndex < listItems.length - 1) currentIndex++;
                else currentIndex = 0;
                updateSelection();
                break;
            case "ArrowUp":
                e.preventDefault();
                if (currentIndex > 0) currentIndex--;
                else currentIndex = listItems.length - 1;
                updateSelection();
                break;
            case "Enter":
                e.preventDefault();
                if (currentIndex > -1) listItems[currentIndex].click();
                break;
            case "Escape":
                styledSelect.classList.remove("active");
                list.style.display = "none";
                break;
        }
    });
    // Allow keyboard focus on the styled select
    styledSelect.setAttribute("tabindex", "0");
    function updateSelection() {
        listItems.forEach((item)=>item.classList.remove("is-selected"));
        if (currentIndex > -1) {
            listItems[currentIndex].classList.add("is-selected");
            styledSelect.textContent = listItems[currentIndex].textContent;
            select.value = listItems[currentIndex].getAttribute("rel");
        }
    }
});
// #endregion
// #region ============== Add Asterisk (*) to Required Field Labels ============
document.querySelectorAll("input[required], select[required]").forEach((field)=>{
    const label = document.querySelector(`label[for="${field.id}"]`);
    if (label) label.innerHTML += " <span>*</span>";
}); // #endregion

//# sourceMappingURL=index.aa69868b.js.map
