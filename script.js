//your JS code here. If required.
let btn = document.getElementById('btn');
let colorSelect = document.getElementById('colorSelect');

btn.addEventListener('click', function () {
    let selectedOption = colorSelect.options[colorSelect.selectedIndex];
    if (selectedOption) {
        console.log('Removing:', selectedOption.value);
        selectedOption.remove(); // Remove the selected option
    }
});