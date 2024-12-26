const div = document.querySelector('.box')

const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    console.log('clicked')
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgba(${r}, ${g}, ${b})`
      
})