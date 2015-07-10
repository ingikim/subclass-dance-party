$(document).ready(function(){
  window.dancers = [];

  var currentBackground = "images/danceFloor.jpg";
  $(".changeBackground").on("click", function(){
    var backgrounds = ["images/adventureTimeBackground.jpg", "images/danceFloor.jpg"]
    if(currentBackground === backgrounds[1]) {
      currentBackground = backgrounds[0];
      $('body').css('background-image','url("images/adventureTimeBackground.jpg")');
    } else {
      currentBackground = backgrounds[1];
      $('body').css('background-image','url("images/danceFloor.jpg")');
    }

  });

  $(".lineUp").on("click", function(){
    var numOfDancers = dancers.length;
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].setPosition($(window).height() * 0.5,(i+1)/numOfDancers * ($(window).width() -480));
   }
  });



  var calledOnce = false;
  $(".coupleDance").on("click", function(){
    if (!calledOnce){
      var shortestDistance = Math.sqrt(Math.pow((dancers[0].$node.position().top - dancers[1].$node.position().top),2) +  Math.pow((dancers[0].$node.position().left - dancers[1].$node.position().left),2));
      var closestCouple = [0, 1];
      for (var i = 0; i < dancers.length; i++) {
        for (var j=i+1; j < dancers.length; j++) {
          if (Math.sqrt(Math.pow((dancers[i].$node.position().top - dancers[j].$node.position().top),2) +  Math.pow((dancers[i].$node.position().left - dancers[j].$node.position().left),2)) < shortestDistance){
            closetCouple = [i, j];
            shortestDistance = Math.sqrt(Math.pow((dancers[i].$node.position().top - dancers[j].$node.position().top),2) +  Math.pow((dancers[i].$node.position().left - dancers[j].$node.position().left),2));
          }
        }
      }
      if(closetCouple === undefined) {
        var closetCouple = [0, 1];
      }
      dancers[closetCouple[0]].setPosition($(window).height() * 0.2, $(window).width() * 0.47);
      dancers[closetCouple[1]].setPosition($(window).height() * 0.2, $(window).width() * 0.53);

      dancers[closetCouple[0]].$node.addClass("coupleEnlarge");
      dancers[closetCouple[1]].$node.addClass("coupleEnlarge");
      calledOnce = true;
    }
    $(".coupleDance").hide();
  })

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var imgHeight = Number($(this).data("img-height"));
    var imgWidth = Number($(this).data("img-width"));

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var height = $(window).height() * Math.random();
    var width = $(window).width() * Math.random();

    if(height + imgHeight > $(window).height()) {
      height = height - imgHeight;
    }

    if(width + imgWidth > $(window).width()) {
      width = width - imgWidth;
    }

    var dancer = new dancerMakerFunction(
      height,
      width,
      Math.random() * 1000 + 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
});

