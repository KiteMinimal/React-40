let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let btn = document.querySelector('button')
// console.log(img1);


btn.addEventListener('click', ()=>{
    // console.log("ok");
    
    let imgSrc1 = img1.getAttribute('src')
    console.log( img1.getAttribute('src'));
    let imgSrc2 = img2.getAttribute('src')

    img1.setAttribute('src', imgSrc2)
    img2.setAttribute('src', imgSrc1)

})