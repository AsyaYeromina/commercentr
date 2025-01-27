document.querySelectorAll('select').forEach((select)=>{
    const numberOfOptions = select.options.length;
    select.classList.add('select-hidden');
    // Wrap select in a div
    const selectWrapper = document.createElement('div');
    selectWrapper.classList.add('select');
    select.parentNode.insertBefore(selectWrapper, select);
    selectWrapper.appendChild(select);
    // Add a styled dropdown button (show placeholder initially)
    const styledSelect = document.createElement('div');
    styledSelect.classList.add('select-styled');
    styledSelect.textContent = select.options[0].textContent; // Placeholder text
    styledSelect.setAttribute('data-placeholder', select.options[0].textContent);
    selectWrapper.appendChild(styledSelect);
    // Create the dropdown options list
    const list = document.createElement('ul');
    list.classList.add('select-options');
    selectWrapper.appendChild(list);
    for(let i = 0; i < numberOfOptions; i++){
        if (i === 0) continue; // Skip placeholder option
        const listItem = document.createElement('li');
        listItem.textContent = select.options[i].textContent;
        listItem.setAttribute('rel', select.options[i].value);
        list.appendChild(listItem);
    }
    const listItems = list.querySelectorAll('li');
    let currentIndex = -1;
    // Event listener to show/hide the dropdown
    styledSelect.addEventListener('click', (e)=>{
        e.stopPropagation();
        // Close other open dropdowns
        document.querySelectorAll('.select-styled.active').forEach((activeSelect)=>{
            if (activeSelect !== styledSelect) {
                activeSelect.classList.remove('active');
                activeSelect.nextElementSibling.style.display = 'none';
            }
        });
        styledSelect.classList.toggle('active');
        list.style.display = styledSelect.classList.contains('active') ? 'block' : 'none';
        // Reset keyboard navigation index
        currentIndex = -1;
    });
    // Handle option selection
    listItems.forEach((item, index)=>{
        item.addEventListener('click', (e)=>{
            e.stopPropagation();
            styledSelect.textContent = item.textContent;
            select.value = item.getAttribute('rel');
            list.querySelectorAll('.is-selected').forEach((selectedItem)=>{
                selectedItem.classList.remove('is-selected');
            });
            item.classList.add('is-selected');
            styledSelect.classList.remove('active');
            list.style.display = 'none';
        });
        item.addEventListener('mouseenter', ()=>{
            currentIndex = index;
            updateSelection();
        });
    });
    // Close dropdown when clicking outside
    document.addEventListener('click', ()=>{
        styledSelect.classList.remove('active');
        list.style.display = 'none';
    });
    // Keyboard navigation (skip placeholder)
    styledSelect.addEventListener('keydown', (e)=>{
        switch(e.key){
            case 'ArrowDown':
                e.preventDefault();
                if (currentIndex < listItems.length - 1) currentIndex++;
                else currentIndex = 0;
                updateSelection();
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex > 0) currentIndex--;
                else currentIndex = listItems.length - 1;
                updateSelection();
                break;
            case 'Enter':
                e.preventDefault();
                if (currentIndex > -1) listItems[currentIndex].click();
                break;
            case 'Escape':
                styledSelect.classList.remove('active');
                list.style.display = 'none';
                break;
        }
    });
    // Allow keyboard focus on the styled select
    styledSelect.setAttribute('tabindex', '0');
    function updateSelection() {
        listItems.forEach((item)=>item.classList.remove('is-selected'));
        if (currentIndex > -1) {
            listItems[currentIndex].classList.add('is-selected');
            styledSelect.textContent = listItems[currentIndex].textContent;
            select.value = listItems[currentIndex].getAttribute('rel');
        }
    }
});

//# sourceMappingURL=index.8c6a9f9c.js.map
