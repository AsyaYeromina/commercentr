// Find all inputs
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const agree = document.getElementById('agree');
const formFields = [
    username,
    email,
    phone,
    agree
];
form.addEventListener('submit', async (e)=>{
    if (!form.checkValidity()) {
        applyCustomValidationStyles();
        return;
    }
    e.preventDefault();
    if (validateInputs() && agree.checked) {
        const formData = {
            username: username.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim()
        };
        try {
            const response = await fetch('https://api-endpoint...', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
            const result = await response.json();
            console.log('Success:', result);
            alert("\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u0437\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F, \u043C\u0438 \u0432\u0430\u0441 \u0441\u043F\u043E\u0432\u0456\u0441\u0442\u0438\u043C\u043E \u043D\u0430 \u0432\u043A\u0430\u0437\u0430\u043D\u0438\u0439 e-mail!");
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("\u0421\u0442\u0430\u043B\u0430\u0441\u044C \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u0456 \u0444\u043E\u0440\u043C\u0438. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437");
        }
    }
});
// inputs values validation end error settings
const applyCustomValidationStyles = ()=>{
    formFields.forEach((input)=>{
        if (!input.checkValidity()) setError(input);
        else setSuccess(input);
    });
};
const setError = (element)=>{
    const inputControl = element.parentElement;
    if (inputControl && !inputControl.classList.contains('form-group--error')) inputControl.classList.add('form-group--error');
    return;
};
const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    if (inputControl && inputControl.classList.contains('form-group--error')) inputControl.classList.remove('form-group--error');
    return;
};
const isValidEmail = (email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const isValidPhone = (phone)=>{
    const re = /^(\+?\d{1,3})?[\s-]?(\d{3})[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/;
    return re.test(phone.trim());
};
const isValidName = (name)=>{
    const re = /^[a-zA-Zа-яА-ЯіІїЇєЄ' ]+$/u;
    return re.test(name.trim());
};
const validateField = (input, validationFn, minLength = 0)=>{
    const value = input.value.trim();
    if (value === '' || value.length < minLength) {
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
const validateInputs = ()=>{
    const isUsernameValid = validateField(username, isValidName, 3);
    const isEmailValid = validateField(email, isValidEmail);
    const isPhoneValid = validateField(phone, isValidPhone);
    return isUsernameValid && isEmailValid && isPhoneValid;
};
// Add * to all laels that has required inputs
document.querySelectorAll("input[required], select[required]").forEach((field)=>{
    const label = document.querySelector(`label[for="${field.id}"]`);
    if (label) label.innerHTML += ' <span>*</span>';
});

//# sourceMappingURL=index.4fe4e4d1.js.map
