const darkButton = document.querySelector('#dark');
const lightButton = document.querySelector('#light');
const body = document.body;


const theme = localStorage.getItem('theme');

// Check if there's a theme saved and set it.
if (theme) {
	body.classList.add(theme);

	// Set's the radio button's 'checked' state according with the theme, so the toggle switcher stays on the right side
	if (theme === 'dark') {
		darkButton.checked = true;
	} else {
		lightButton.checked = true;
	}

} else { 
  // if there's no theme saved the default will be set to dark
  body.classList.add('dark')
  darkButton.checked = true;
}


// Click events
darkButton.addEventListener('click', () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
});

lightButton.addEventListener('click', () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
});