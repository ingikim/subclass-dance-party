describe("ingiDancer", function() {

  var ingiDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ingiDancer = new makeIngiDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(ingiDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(ingiDancer.$node, 'toggle');
    ingiDancer.step();
    expect(ingiDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(ingiDancer, "step");
      expect(ingiDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(ingiDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(ingiDancer.step.callCount).to.be.equal(2);
    });
  });
});
