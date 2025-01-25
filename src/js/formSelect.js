document.querySelectorAll('select').forEach(select => {
  const numberOfOptions = select.options.length;

  select.classList.add('select-hidden');

  // Wrap select in a div
  const selectWrapper = document.createElement('div');
  selectWrapper.classList.add('select');
  select.parentNode.insertBefore(selectWrapper, select);
  selectWrapper.appendChild(select);

  // Add a styled dropdown button
  const styledSelect = document.createElement('div');
  styledSelect.classList.add('select-styled');
  styledSelect.textContent = select.options[0].textContent;
  selectWrapper.appendChild(styledSelect);

  // Create the dropdown options list
  const list = document.createElement('ul');
  list.classList.add('select-options');
  selectWrapper.appendChild(list);

  for (let i = 0; i < numberOfOptions; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = select.options[i].textContent;
      listItem.setAttribute('rel', select.options[i].value);
      list.appendChild(listItem);

      if (select.options[i].selected) {
          listItem.classList.add('is-selected');
      }
  }

  const listItems = list.querySelectorAll('li');

  // Event listener to show/hide the dropdown
  styledSelect.addEventListener('click', (e) => {
      e.stopPropagation();

      // Close other open dropdowns
      document.querySelectorAll('.select-styled.active').forEach(activeSelect => {
          if (activeSelect !== styledSelect) {
              activeSelect.classList.remove('active');
              activeSelect.nextElementSibling.style.display = 'none';
          }
      });

      styledSelect.classList.toggle('active');
      list.style.display = styledSelect.classList.contains('active') ? 'block' : 'none';
  });

  // Handle option selection
  listItems.forEach(item => {
      item.addEventListener('click', (e) => {
          e.stopPropagation();
          styledSelect.textContent = item.textContent;
          select.value = item.getAttribute('rel');

          list.querySelectorAll('.is-selected').forEach(selectedItem => {
              selectedItem.classList.remove('is-selected');
          });

          item.classList.add('is-selected');

          styledSelect.classList.remove('active');
          list.style.display = 'none';
      });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
      styledSelect.classList.remove('active');
      list.style.display = 'none';
  });
});
