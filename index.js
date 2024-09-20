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



// for faq


document.addEventListener('DOMContentLoaded', function() {
    let currentlyVisibleAnswer = null;  // Track the currently visible answer

    // Select all toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    // Function to hide all .faq_ans elements
    function hideAllAnswers() {
        document.querySelectorAll('.faq_ans').forEach(answer => {
            answer.style.display = 'none';
        });
    }

    // Function to reset all buttons to "+"
    function resetAllButtons() {
        toggleButtons.forEach(button => {
            button.textContent = '+';
        });
    }

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent .faq_text_content element
            const faqTextContent = this.closest('.faq_text_content');
            
            // Find the corresponding answer element
            const answer = faqTextContent.nextElementSibling;

            // Check if the answer element exists and is of class .faq_ans
            if (answer && answer.classList.contains('faq_ans')) {
                // Hide all other answers and reset all buttons
                hideAllAnswers();
                resetAllButtons();

                // Toggle the current answer
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    this.textContent = '+';
                    currentlyVisibleAnswer = null;
                } else {
                    answer.style.display = 'block';
                    this.textContent = '-';
                    currentlyVisibleAnswer = answer;
                }
            } else {
                console.error('Corresponding answer element not found.');
            }
        });
    });
});





