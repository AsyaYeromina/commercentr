//  ========== Inputs data validation and sending ========
(()=>{
    // Find inputs in form
    const username = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const agree = document.getElementById("agree");
    const select = document.getElementById("select");
    const form = document.getElementById("form");
    // Adjust minimal length for name validation if needed
    const MINIMAL_NAME_LENGTH = 3;
    console.log("test");
    // Form Submission Handler
    form.addEventListener("submit", async (event)=>{
        event.preventDefault();
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
    //  ============== Add Asterisk (*) to Required Field Labels ============
    document.querySelectorAll("input[required], select[required]").forEach((field)=>{
        console.log(field.name);
        const label = document.querySelector(`label[for="${field.id}"]`);
        if (label) label.innerHTML += " <span>*</span>";
    });
})();

//# sourceMappingURL=index.aa69868b.js.map
