var width = 640;
var height = 960;
var numberOfElement = 20;
var elementHeight = height/numberOfElement;

var Piece = function() {
  this.element = document.createElement('div');
  this.element.classList.add('piece');
}