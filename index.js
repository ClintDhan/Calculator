let showNumber = document.querySelector('.show');
let num = [];


for(let i = 0; i < document.querySelectorAll('.blue').length; i++ ) {

    document.querySelectorAll('.blue')[i].addEventListener("click", function() {
         num.push(this.textContent);
         showNumber.innerHTML = num;
    })
}