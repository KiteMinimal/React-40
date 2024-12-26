var secondHand = document.querySelector('.secondHand')
var minuteHand = document.querySelector('.minuteHand')
var hourHand = document.querySelector('.hourHand')

setInterval(()=>{
    var d = new Date().getSeconds();
    // console.log(d*6);
    var degree = d*6
    secondHand.style.rotate = `${degree}deg`
},1000)

setInterval(()=>{
    var d = new Date().getMinutes();
    // console.log(d*6);
    var degree = d*6
    minuteHand.style.rotate = `${degree}deg`
},1000)

setInterval(()=>{
    var d = new Date().getHours();
    // console.log(d*30);
    var degree = d*30
    hourHand.style.rotate = `${degree}deg`
},1000)