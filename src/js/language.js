document.addEventListener('DOMContentLoaded', function () {
  let lang_select = document.getElementById('languageDropdown');
  let target_input = document.getElementById('target');
  let language_url = document.getElementById('changer');

  lang_select.addEventListener('change', function () {
    let select_value = this.value;
    let target_value = target_input.value;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', language_url.value, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
          let response = JSON.parse(xhr.responseText);
          if (response.url) {
            window.location.href = response.url;
          }
        } else {
          console.error('AJAX request failed with status: ' + xhr.status);
        }
      }
    };
    let formData = 'language=' + encodeURIComponent(select_value) + '&target=' + encodeURIComponent(target_value);
    xhr.send(formData);
  });
});
