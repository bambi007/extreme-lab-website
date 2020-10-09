let navigation = document.getElementById('top-bar');
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    navigation.classList.add('small');
  } else {
    navigation.classList.remove('small');
  }

})