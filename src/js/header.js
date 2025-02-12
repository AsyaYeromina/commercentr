// header hiding/showing
document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".header-burger-button");

  if (!burgerButton) return; // Exit if button is missing

  function openModal() {
    document.body.classList.add("modal-open");
    document.addEventListener("click", closeModalOnOutsideClick);
  }

  function closeModal() {
    document.body.classList.remove("modal-open");
    document.removeEventListener("click", closeModalOnOutsideClick);
  }

  function toggleModal(event) {
    event.stopPropagation(); // Prevent event from triggering close immediately
    document.body.classList.contains("modal-open") ? closeModal() : openModal();
  }

  function closeModalOnOutsideClick(event) {
    if (!burgerButton.contains(event.target)) {
      closeModal();
    }
  }

  burgerButton.addEventListener("click", toggleModal);
});




// language change
document.addEventListener('DOMContentLoaded', function () {
  const languageDropdownButton = document.getElementById('languageDropdownBtn');
  const languageContainer = document.querySelector('.language-dropdown');
  const languageList = document.querySelector('.language-list');

    // Toggle dropdown when clicking the button
    languageDropdownButton.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent event from bubbling up

      //hiding language list and solving acesibility isues
      languageList.classList.toggle('visually-hidden');

      languageContainer.classList.toggle('language-dropdown--open');

      // Update aria-expanded attribute
      const isExpanded = !languageList.classList.contains('visually-hidden');
      languageDropdownButton.setAttribute('aria-expanded', isExpanded);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!languageContainer.contains(e.target)) {
        languageList.classList.add('visually-hidden');
        languageDropdownButton.setAttribute('aria-expanded', 'false');
        languageContainer.classList.remove('language-dropdown--open');
      }
    });

  // Handle language selection
  const languageItems = document.querySelectorAll('.language-list-item');
  languageItems.forEach(item => {
    item.addEventListener('click', function () {
      const selectedLanguage = this.querySelector('span').textContent;
      languageDropdownButton.querySelector('span').textContent = selectedLanguage;

      // Hide language list after selection
      languageList.classList.add('visually-hidden');
      languageDropdownButton.setAttribute('aria-expanded', 'false');
      languageContainer.classList.remove('language-dropdown--open');
    });
  });
});


// const targetInput = document.getElementById('target');
// const languageUrl = document.getElementById('changer');

// lang_select.addEventListener('change', function () {
//   let select_value = this.value;
//   let target_value = targetInput.value;
//   let xhr = new XMLHttpRequest();
//   xhr.open('POST', languageUrl.value, true);
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         console.log(xhr.responseText);
//         let response = JSON.parse(xhr.responseText);
//         if (response.url) {
//           window.location.href = response.url;
//         }
//       } else {
//         console.error('AJAX request failed with status: ' + xhr.status);
//       }
//     }
//   };
//   let formData = 'language=' + encodeURIComponent(select_value) + '&target=' + encodeURIComponent(target_value);
//   xhr.send(formData);
// });
