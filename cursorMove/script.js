var circle = document.querySelector(".circle");
document.addEventListener("mousemove",function(dets){
    var v1 = Math.floor(Math.random()*256);
    var v2 = Math.floor(Math.random()*256);
    var v3 = Math.floor(Math.random()*256);
    var bgColor = `rgb(${v1},${v2},${v3})`;

    circle.style.left = dets.x+'px'
    circle.style.top = dets.y+'px'
    circle.style.backgroundColor = bgColor;
})