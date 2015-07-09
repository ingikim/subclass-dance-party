var makeIngiDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ingiDance"><img src="images/adventureTime.gif" height="235.5.2px" width="189.6px"></span>');
  this.width = 400;
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};

makeIngiDancer.prototype = Object.create(makeDancer.prototype);
makeIngiDancer.prototype.constructor = makeIngiDancer;

makeIngiDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  // this.$node.toggle();
};