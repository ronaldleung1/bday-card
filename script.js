VanillaTilt.init(document.querySelectorAll(".card"),{
	max: 30,
	speed: 600,
  scale: 1,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 800,
  glare: true
});

(function() {
    let canvas = document.getElementById('confetti-canvas'),
            context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
            // do your drawing stuff here
          let confettiSettings = {"target":canvas,"max":"128","size":"1","animate":true,"props":["circle","square","triangle","line"],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"16","rotate":true,"width":"","height":"","start_from_edge":false,"respawn":true};
      
      let confetti = new ConfettiGenerator(confettiSettings);
            confetti.render();
    }
})();