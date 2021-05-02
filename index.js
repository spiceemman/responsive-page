// Javascript code for making hamburger menu responsive

var burger = document.querySelector('.burger');
var navs = document.querySelector('.navs');
console.log(burger);
console.log(navs);

burger.addEventListener('click', function(){
	navs.classList.toggle('active');
	burger.classList.toggle('button-toggle');
})