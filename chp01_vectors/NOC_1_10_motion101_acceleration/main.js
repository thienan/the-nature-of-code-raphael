/* global Mover,PVector,utils */
(function () {
  var paper = utils.setup();
  var mover = new Mover(640, 320, paper);

  var mouse = new PVector(paper.width / 2, paper.height / 2);
  paper.canvas.onmousemove = function (e) {
    e = e || window.event;

    mouse.x = e.layerX;
    mouse.y = e.layerY;
  };

  utils.draw(function () {
    mover.update(mouse);
    mover.move();
  });
})();
