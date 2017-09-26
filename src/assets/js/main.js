class Slider {

  constructor(selector) {
    this.slider = document.querySelector(selector);
    this.interval = null;
  }

  start(){

  }
}

(function() {

  new Slider(".slider");

})();
