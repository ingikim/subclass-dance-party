var makeKevinDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="kevinDance"><img class = "kevinDance" src="images/blueShark.gif" height="254px" width="219px"></span>');
  this.setPosition(top, left);
  this.$node.on("click", function(){
    console.log('test');
    console.log($(this).find("img"));
    $(this).find("img").attr("src", "images/pinkShark.gif");
    // $(this).attr("src", "images/adventureTime.gif");
  });
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};

makeKevinDancer.prototype = Object.create(makeDancer.prototype);
makeKevinDancer.prototype.constructor = makeKevinDancer;

makeKevinDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  // this.$node.toggle();
};