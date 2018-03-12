svg = document.getElementById("svg_id");
clear = document.getElementById("clear");

var drawCircle = function(e){
    var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cir.setAttribute("cx", e.offsetX);
    cir.setAttribute("cy", e.offsetY);
    cir.setAttribute("dx", 5.4);
    cir.setAttribute("dy", 3.3);
    cir.setAttribute("r", 10);
    svg.appendChild(cir);
};

svg.addEventListener("click", function(e){
    drawCircle(e);
});

clear.addEventListener("click", function(){
    while (svg.firstChild) {
	svg.removeChild(svg.firstChild);
    }
});

var id = setInterval(function(){
    var cirs = document.getElementsByTagName("circle");
    for(var i = 0; i < cirs.length; i ++){
	let cir = cirs[i];
	let cx = parseInt(cir.getAttribute("cx"));
	let dx = parseInt(cir.getAttribute("dx"))
	let cy = parseInt(cir.getAttribute("cy"));
	let dy = parseInt(cir.getAttribute("dy"))
	if(cx < 10 || cx > 510){
	    cir.setAttribute("dx", -1 * dx);
	    dx *= -1;
	}
	if(cy < 10 || cy > 510){
	    cir.setAttribute("dy", -1 * dy);
	    dy *= -1;
	}
	cir.setAttribute("cx", cx + dx);
	cir.setAttribute("cy", cy + dy);
    };
}, 10);
