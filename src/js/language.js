document.addEventListener('DOMContentLoaded', function () {
  const languageDropdown = document.getElementById('languageDropdown');
  const languageContainer = document.querySelector('header-language-container');
  const targetInput = document.getElementById('target');
  const languageUrl = document.getElementById('changer');

  languageDropdown.addEventListener('click', function() {
    if (languageDropdown && ) {

    }
  })

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
});
