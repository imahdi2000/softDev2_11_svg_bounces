var svg = document.getElementById('svg');
var clearp = document.getElementById('clearp');
var requestID
var touchx = 1;
var touchy = 1;
var x1 = 250;
var y1 = 200;

var edgeTouchx = function(x1){
  if (x1 > 490){
    touchx = 0;
  }
  if (x1 < -5){
    touchx = 1;
  }
};

var edgeTouchy = function(y1){
  if (y1 > 490){
    touchy = 0;
  }
  if (y1 < -5){
    touchy = 1;
  }
};

var clearo = function()
{
  console.log("clicked clear");
  svg = document.getElementById("svg");
  clearInterval(requestID)
  console.log("clearo");
  while (svg.firstChild){
	svg.removeChild(svg.firstChild);
  }
};

var stop = function() {
  clearInterval(requestID)
};

var test = 250;

var reset = function() {
  test = 250;
}
var run = function()
{
  stop();
  reset();
  var drawR = function(){
    clearo();
    edgeTouchy(y1);
    edgeTouchx(x1);
    if (touchx == 1){
      x1 = x1 + (Math.random() * 3);
    }
    if ( touchx == 0){
      x1 = x1 - (Math.random() * 3);
    }
    if (touchy == 1){
      y1 = y1 + (Math.random() * 2);
    }
    if (touchy == 0){
      y1 = y1 - (Math.random() * 2);
    }
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("height", 10);
    rect.setAttribute("width", 10);
    rect.setAttribute("x", x1);
    rect.setAttribute("y",y1);
    rect.setAttribute("fill", "black");
    svg.appendChild(rect);
    requestID = setInterval(drawR,10);
  };
  drawR();
};


svg.addEventListener("click", run);
clearp.addEventListener("click", clearo);
