function removeSelectedOption() {
    let colorSelect = document.getElementById('colorSelect');
    let selectedIndex = colorSelect.selectedIndex;
    
    if (selectedIndex !== -1) { // Ensure an option is selected before removing
        colorSelect.remove(selectedIndex);
    }
}
