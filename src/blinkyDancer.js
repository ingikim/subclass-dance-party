var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"></span>');
  this.setPosition(top, left);
  this.$node.hover(function(){
    $(this).css({"top": "-=120px", "left": "-=120px", "border": "150px solid green", "border-radius": "150px", "position": "absolute"});
  }, function() {
    $(this).css({"top": "+=120px", "left": "+=120px", "border": "30px solid red", "border-radius": "30px", "position": "absolute"});
  });
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  this.$node.toggle();
};
makeBlinkyDancer.prototype.lineUp = function() {
  var numOfDancers = dancers.length;
  for (var i = 0; i < dancers.length; i++) {
    if (dancers[i] === makeBlinkDancer) {
      dancers[i].setPosition(100,(i+1)/numOfDancers * $(window).width())
    }
  }
};