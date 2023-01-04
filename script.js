function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    // TRANSLATE to rotation point.    
    context.translate(canvas.width/2, canvas.height/2);
    
    
    
    
    /*circle */
    
        context.beginPath();
    
        let circleX = 0;
        let circleY = 0;
        let circleRadius = 40;
        let circleStart = 0;
        let circleEnd = 2.5;


        //shadow on everything
        context.shadowOffsetX = 3;
        context.shadowOffsetY = 3;
        context.shadowBlur    = 5;
        context.shadowColor   = "gray";

        context.arc(circleX,circleY,circleRadius,circleStart,circleEnd*Math.PI);
        context.fillStyle ='orange';
        context.fill(); 
        
        //stalk
        context.beginPath();
        context.moveTo(0,circleRadius);
        context.lineTo(0,200);
        context.strokeStyle = 'green';
        context.lineWidth =10;
        context.stroke();
        
        
        //leaf
        
        function leaf () {

            for (let k = 0; k < 3; k++) {

                let leafStartX = 0;
                let leafStartY = 200;
                let leafCp1X = 200;
                let leafCp1Y = 10;
                let leafCp2X =300;
                let leafCp2Y = 180;
                let leafEndX = 0;
                let leafEndY = 200;        
            
                context.beginPath();
                context.moveTo(leafStartX,leafStartY);
                context.bezierCurveTo(leafCp1X,leafCp1Y,leafCp2X,leafCp2Y,leafEndX,leafEndY);
                context.fillStyle = 'green';
                context.fill();

            }


        }

        leaf();

   
   
    /*petal*/
  
    function drawPetal () {

        let petalRotation;
        
        /*shape parameters */
        let petalStartX = 0;
        let petalStartY = -circleRadius;
        let petalCp1X = 100;
        let petalCp1Y = -30;
        let petalCp2X = 0;
        let petalCp2Y = -300;
        let petalEndX = 0;
        let petalEndY = -circleRadius;        

        
        for (let i = 0; i <11; i++) {
            
            
            /*starting point */
            context.beginPath();
            context.moveTo(petalStartX,petalStartY);
    
            /*Bezier-curve */
            context.bezierCurveTo(petalCp1X,petalCp1Y,petalCp2X,petalCp2Y,petalEndX,petalEndY);
            
            /*fill petal */
            context.fillStyle = 'red';
            context.fill();
            
            /*rotation */       
            petalRotation = 20;
            context.rotate(petalRotation);
            console.log(petalRotation);

        }       
       
        
    }
    
    drawPetal();


    

}

window.addEventListener("load", pageLoaded);