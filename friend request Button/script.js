const friendButton = document.getElementById('friendButton');
const message = document.getElementById('message');

// Initial state
let isFriend = false;

friendButton.addEventListener('click', () => {
  isFriend = !isFriend; // Toggle the state

  if (isFriend) {
    friendButton.textContent = 'Friend'; // Change button text to 'Friend'
    friendButton.classList.add('friend'); // Add green background style
    message.textContent = 'Friend request sent!'; // Update the message
  } else {
    friendButton.textContent = 'Add Friend'; // Change button text to 'Add Friend'
    friendButton.classList.remove('friend'); // Revert to default background style
    message.textContent = 'You removed the friend request.'; // Update the message
  }
});
