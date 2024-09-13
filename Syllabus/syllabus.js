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