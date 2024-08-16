// let showNumber = document.querySelector('.show');


// for(let i = 0; i < document.querySelectorAll('.blue').length; i++ ) {

//     document.querySelectorAll('.blue')[i].addEventListener("click", function() {
    
      
      
    
//     })
// }
let showNumber = document.querySelector('.show');
Number(showNumber);
document.querySelector('.seven').addEventListener("click", function(){
    showNumber.innerHTML = showNumber.innerHTML + 7;
})
document.querySelector('.eight').addEventListener("click", function(){
    showNumber.innerHTML = showNumber.innerHTML + 8;
})
document.querySelector('.nine').addEventListener("click", function(){
    showNumber.innerHTML = showNumber.innerHTML + 9;
})

document.querySelector('.four').addEventListener("click", function(){
    showNumber.innerHTML = showNumber.innerHTML + 4;
})
document.querySelector('.five').addEventListener("click", function(){
    showNumber.innerHTML = showNumber.innerHTML + 5;
})
document.querySelector('.six').addEventListener("click", function(){
    showNumber.innerHTML = showNumber.innerHTML + 6;
})

document.querySelector('.three').addEventListener("click", function(){
    showNumber.innerHTML = showNumber.innerHTML + 3;
})
document.querySelector('.two').addEventListener("click", function(){
    showNumber.innerHTML = showNumber.innerHTML + 2;
})
document.querySelector('.one').addEventListener("click", function(){
    showNumber.innerHTML = showNumber.innerHTML + 1;
})