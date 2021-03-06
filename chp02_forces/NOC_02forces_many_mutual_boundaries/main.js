/* global utils,PVector,Mover,Attractor */
(function () {
  var paper = utils.setup(640, 360);

  var movers = [];
  for (var i = 0; i < 20; i++) {
    movers.push(new Mover(utils.random(1, 2),
      new PVector(utils.random(paper.width), utils.random(paper.height)),
      new PVector(0, 0), paper));
  }

  utils.draw(60, function () {
    for (var i = 0; i < movers.length; i++) {
      var mover = movers[i];
      for (var j = 0; j < movers.length; j++) {
        var attractor = movers[j];
        var f = attractor.attract(mover);
        mover.applyForce(f);
      }
      mover.boundaries().update().move();
    }
  });
})();
