let btn = document.getElementById('btn');
let colorSelect = document.getElementById('colorSelect');

btn.addEventListener('click', function () {
    let selectedIndex = colorSelect.selectedIndex;
    if (selectedIndex !== -1) {  // Ensure something is selected
        colorSelect.remove(selectedIndex);
    }
});
