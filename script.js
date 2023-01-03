function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    context.beginPath();

    context.arc(200,200,40,0,2.5*Math.PI);
    context.fillStyle ='orange';
    context.fill();

    context.beginPath();
    context.moveTo(200,160);
    context.bezierCurveTo(150,0,250,0,200,160);
    context.fillStyle = 'red';
    context.fill();
    

}

window.addEventListener("load", pageLoaded);