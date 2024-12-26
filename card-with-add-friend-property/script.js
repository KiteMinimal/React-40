const users = [
    {
        img : 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjBwcm9maWxlfGVufDB8fDB8fHww',
        userName : 'Rihan',
        age : 22,
        statusbar : 'stranger',
        description : "A skilled frontend developer who loves creating dynamic UIs."

    },
    {
        img : 'https://plus.unsplash.com/premium_photo-1671656349076-0a8ebbb706fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjBwcm9maWxlfGVufDB8fDB8fHww',
        userName : 'Shoyeb',
        age : 24,
        statusbar :'stranger',
        description : "Passionate backend developer focused on scalable solutions.."

    },
    {
        img : 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0JTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        userName : 'Anish',
        age : 23,
        statusbar : 'stranger',
        description : "Full-stack wizard with a knack for building complex systems."

    },
    {
        img : 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0JTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        userName : 'Qazi',
        age : 25,
        statusbar :'stranger',
        description : "Expert in cloud infrastructure and scalable architectures."

    },
    {
        img : 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnRyYWl0JTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        userName : 'Vaibhav',
        age : 21,
        statusbar :'stranger',
        description : "Frontend magician with strong design sensibilities."

    },
    {
        img : 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcnRyYWl0JTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        userName : 'Manish',
        age : 21,
        statusbar :'stranger',
        description : "Cybersecurity expert with a focus on ethical hacking."

    },
];

var str = ''

users.forEach(function(elem,index){
    str += `<div class="card">
        <img src=${elem.img} alt="">
        <h1>${elem.userName}</h1>
        <h3 >${elem.age}</h3>
        <h4 class="status">Stranger</h4>
        <p>${elem.description}</p>
        <button class="friend-btn" data-index="${index}">Add Friend</button>
    </div>`

var body = document.querySelector('body')
body.innerHTML = str

// Attach event listeners to all buttons
document.querySelectorAll('.friend-btn').forEach((button) => {
    button.addEventListener('click', function () {
      const card = button.parentElement;
      const statusElement = card.querySelector('.status');
  
      if (statusElement.textContent === 'Stranger') {
        statusElement.textContent = 'Friend';
        statusElement.style.color = 'green'
        button.textContent = 'Unfriend'; // Change button text
      } else {
        statusElement.textContent = 'Stranger';
        button.textContent = 'Add Friend';
        statusElement.style.color = 'red'
         // Reset button text
      }
    //   console.log(body)
    });
  });
})
