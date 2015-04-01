module.exports = function() {
  return function(deck) {
    deck.getActiveSlide = function() {
      var activeSlide = this.slides.filter(function(slide) {
        return slide.classList.contains('bespoke-active');
      });

      return activeSlide.length && activeSlide[0] || {};
    }
  }
};

