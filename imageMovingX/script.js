let div1 = document.querySelectorAll('.div1')
div1.forEach(function(elem){
    elem.addEventListener("mousemove",(e) =>{
        let x = window.innerWidth - elem.childNodes[5].offsetWidth;
        if(e.x < x){
            elem.childNodes[5].style.opacity = 1
            elem.childNodes[5].style.left = e.x +'px'
        }
    })
    elem.addEventListener("mouseleave",(e) =>{
        elem.childNodes[5].style.opacity = 0

})  
})