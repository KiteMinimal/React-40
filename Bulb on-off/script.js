const bulb = document.getElementById('bulb');
const toggleButton = document.getElementById('toggleButton');

let isOn = false;

toggleButton.addEventListener('click', () => {
  isOn = !isOn; // Toggle the state of the bulb
  bulb.classList.toggle('on', isOn); // Add or remove the 'on' class
  toggleButton.textContent = isOn ? 'Turn Off' : 'Turn On'; // Update button text
});
