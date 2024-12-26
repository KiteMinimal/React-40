let btn = document.querySelector('button')
let h2 = document.querySelector('h2')
let proces = document.querySelector('.process')

let num = 0 

var ddd 
let rem
btn.addEventListener('click', function(){
     rem = Math.floor(Math.random()*100)
   
    ddd = setInterval(function(){
        num++
        proces.style.width = num + '%'
        h2.innerHTML = num + '%'
        btn.style.pointerEvents = "none"
    },rem)
    setTimeout(() => {
        clearInterval(ddd)
        btn.style.color = "gray"
    }, rem*100);
})

