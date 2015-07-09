$(document).ready(function(){
  window.dancers = [];

  $(".lineUp").on("click", function(){
    var numOfDancers = dancers.length;
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].setPosition($("body").height() * 0.5,(i+1)/numOfDancers * ($("body").width() -480));
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
      dancers[closetCouple[0]].setPosition($("body").height() * 0.2, $("body").width() * 0.47);
      dancers[closetCouple[1]].setPosition($("body").height() * 0.2, $("body").width() * 0.53);

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
    var height = $("body").height() * Math.random();
    var width = $("body").width() * Math.random();

    if(height + imgHeight > $("body").height()) {
      height = height - imgHeight;
    }

    if(width + imgWidth > $("body").width()) {
      width = width - imgWidth;
    }

    var dancer = new dancerMakerFunction(
      height,
      width,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
});

