// Wrap every letter in a span
var textWrapper = document.querySelector('.introInfo');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.introInfo .letter',
    scale: [2.5,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  })

  $(document).ready(function(){
      $("submit-btn").submit();
  });

