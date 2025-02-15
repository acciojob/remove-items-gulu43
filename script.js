//your JS code here. If required.
let btn = document.getElementById('btn');
let colorSelect = document.getElementById('colorSelect');

let g_index = 0;
colorSelect.addEventListener('change', function() {
	let index = colorSelect.selectedIndex;
	g_index = index;
})

btn.addEventListener('click', function () {
	// or g_index.remove();
    let selectedOption = colorSelect.options[g_index];
    selectedOption.remove()
});