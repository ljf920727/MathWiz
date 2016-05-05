//first smoke cloud
var y = -50;
var x = 0;
var s = 5;

//second smoke cloud
var x2 = 0;
var y2 = 0;
var s2 = 5;

function init()
{
    setInterval(create, 35);
}

//creates picture
function create()
{
    drawBackground();
    
    animateSmoke1();
    
    animateSmoke2();
}

function drawBackground() {
		var shapes = document.getElementById("myShapes");
		var ctx = shapes.getContext("2d");

        //sky
        ctx.fillStyle = "#B8B1E0";
		ctx.fillRect(0, 0, 300, 300);
		
		//clouds
		ctx.fillStyle = "white"; //red
		ctx.beginPath();
		ctx.arc(200,30,15,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		
		ctx.fillStyle = "white"; //red
		ctx.beginPath();
		ctx.arc(218,30,15,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		
		ctx.fillStyle = "white"; //red
		ctx.beginPath();
		ctx.arc(236,30,15,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		
		//clouds
		ctx.fillStyle = "white"; //red
		ctx.beginPath();
		ctx.arc(100,30,15,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		
		ctx.fillStyle = "white"; //red
		ctx.beginPath();
		ctx.arc(118,30,15,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		
		ctx.fillStyle = "white"; //red
		ctx.beginPath();
		ctx.arc(136,30,15,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		
		//sun
		ctx.fillStyle = "#FF9900"; 
		ctx.beginPath();
		ctx.arc(0,15,45,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		
		//mountain 
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(-30, 250);
        ctx.lineTo(200, 35);
        ctx.lineTo(315, 200);
        ctx.fill();
		
	
        //mountain 
        ctx.fillStyle = "#766C63";
        ctx.beginPath();
        ctx.moveTo(0, 200);
        ctx.lineTo(130, 50);
        ctx.lineTo(250, 200);
        ctx.fill();
			
		//snow tops
		ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(95, 90);
        ctx.lineTo(130, 50);
        ctx.lineTo(162, 90);
        ctx.fill();
			
        //tree
        ctx.fillStyle = "#2A6321";
        ctx.beginPath();
        ctx.moveTo(0, 190);
        ctx.lineTo(35, 100);
        ctx.lineTo(75, 190);
        ctx.fill();
        
        //trunk
        ctx.fillStyle = "brown";
		ctx.fillRect(30, 190, 15, 35);
    
        //tree2
        ctx.fillStyle = "#338926";
        ctx.beginPath();
        ctx.moveTo(225, 190);
        ctx.lineTo(260, 100);
        ctx.lineTo(300, 190);
        ctx.fill();
        
        //trunk2
        ctx.fillStyle = "brown";
		ctx.fillRect(255, 190, 15, 35);
        
        //ground
        ctx.fillStyle = "green";
		ctx.fillRect(0, 200, 300, 150);
    
		//Front
		ctx.fillStyle = "#856B55";
		ctx.fillRect(70, 170, 100, 50);
    
        //Door
		ctx.fillStyle = "#5D4028";
		ctx.fillRect(110, 195, 15, 25);
		
    
        //path
		ctx.fillStyle = "yellow";
		ctx.beginPath();
    
        ctx.moveTo(110, 220);
        ctx.lineTo(125, 220);
        ctx.lineTo(0, 235);
        ctx.lineTo(0, 230);
        ctx.fill();
		
		//Windows
		ctx.fillStyle = "grey";
		ctx.beginPath();
		ctx.fillRect(80, 180, 15, 15);
	
		ctx.fillStyle = "grey";
		ctx.beginPath();
		ctx.fillRect(140, 180, 15, 15);
		
		
        //chimney
        ctx.fillStyle = "grey";
		ctx.fillRect(96, 125, 15, 25);
		
		
    
        //Roof front
        ctx.fillStyle = "#261D14";
        ctx.beginPath();
    
        ctx.moveTo(70, 170);
        ctx.lineTo(120, 120);
        ctx.lineTo(170, 170);
        ctx.fill();
    
        //Roof Side
        ctx.fillStyle = "#0E0803";
        ctx.beginPath();
    
        ctx.moveTo(120, 120);
        ctx.lineTo(170, 170);
        ctx.lineTo(250, 170);
        ctx.lineTo(200, 130);
        ctx.fill();
    
        //Side
        ctx.fillStyle = "#9E9686";
        ctx.beginPath();
    
        ctx.moveTo(170, 170);
        ctx.lineTo(250, 170);
        ctx.lineTo(250, 210);
        ctx.lineTo(170, 220);
        ctx.fill();
    
    	
}

function smoke() {
    
    var shapes = document.getElementById("myShapes");
    var ctx = shapes.getContext("2d");
    
    //smoke
	ctx.fillStyle = "rgba(232,232,232," + (100 - arguments[0]) * 0.01 + ")";
	ctx.beginPath();
	ctx.arc(105, 120 - arguments[0], arguments[2] * 1.5, 0, Math.PI*2);
	ctx.closePath();
	ctx.fill();
    
	ctx.fillStyle = "rgba(232,232,232," + (100 - arguments[0]) * 0.01 + ")";
	ctx.beginPath();
	ctx.arc(105 + arguments[1]/2, 120 - arguments[0], arguments[2], 0, Math.PI*2);
	ctx.closePath();
	ctx.fill();
		
	ctx.fillStyle = "rgba(232,232,232," + (100 - arguments[0]) * 0.01 + ")";
	ctx.beginPath();
	ctx.arc(105 - arguments[1]/2,120 - arguments[0], arguments[2], 0, Math.PI*2);
	ctx.closePath();
	ctx.fill();
    
}

function animateSmoke1()
{
    
    if(y<100)
    {
        y++;

        if (y > 0)
        {
            s *= 1.01;
            x+= .5;
            smoke(y,x,s);
        }    
    }
    
    else
    {
        y = 0;
        x = 0;
        s = 5;   
    }
}

function animateSmoke2()
{
    
    if(y2<100)
    {
        y2++;
        
        if (y2 => 0)
        {
            s2 *= 1.01;
            x2+= .5;
            smoke(y2,x2,s2);
        }
       
    }
    
    else
    {
        y2 = 0;
        x2 = 0;
        s2 = 5;   
    }
}