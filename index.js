let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lenghtItems =items.length-1;

next.onclick = function(){
  if(active+1> lenghtItems){
    active=0;
  }
  else{
    active=active+1;
  }
  reloadSlider();
}
prev.onclick = function(){
  if(active-1< 0){
    active=lenghtItems;
  }
  else{
    active=active-1;
  }
  reloadSlider();
}
let refreshSlider=setInterval(()=>{next.click()},5000);
function reloadSlider(){
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft+'px';

  let lastActiveDot = document.querySelector('.slider .dots li.active');
  lastActiveDot.classList.remove('active')
  dots[active].classList.add('active');
  clearInterval(refreshSlider);
  refreshSlider=setInterval(()=>{next.click()},5000);
}

dots.forEach((li,key)=>{
  li.addEventListener('click',function(){
    active=key;
    reloadSlider();
  })
})


// for navbar


document.addEventListener('DOMContentLoaded', function() {
  var affixElement = document.getElementById('affixElement');
  var offset = affixElement.offsetTop;

  function handleScroll() {
    if (window.pageYOffset > offset) {
      affixElement.classList.add('fixed');
    } else {
      affixElement.classList.remove('fixed');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run on page load to handle the case where the user starts at a scrolled position
});
