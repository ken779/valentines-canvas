var c = document.getElementById('gameCanvas');
var ctx = c.getContext('2d');


const canvasHeight = 600;
const canvasWidth = 800;

var snowmanPosX = 300;
var snowmanPosY = 375;

var snow1PosX = 40;
var snow1PosY = 40;
var snow2PosX = 568;
var snow2PosY = 40;
var snow3PosX = 512;
var snow3PosY = 400;
var snow4PosX = 189;
var snow4PosY = 500;
var snow5PosX = 205;
var snow5PosY = 240;
var snow6PosX = 487;
var snow6PosY = 353;
var snow7PosX = 746;
var snow7PosY = 138;
var snow8PosX = 691;
var snow8PosY = 577;


setInterval(myMethod, 100);
function myMethod( )
{
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    ctx.beginPath();
    ctx.rect(0, canvasHeight - 80, canvasWidth, 80);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    //draw snowman body
    ctx.beginPath();
    ctx.arc(snowmanPosX, snowmanPosY, 25, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(snowmanPosX, snowmanPosY+55, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(snowmanPosX, snowmanPosY+120, 35, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //draw snowman face
    ctx.beginPath();
    ctx.arc(snowmanPosX-8, snowmanPosY+6, 2, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(snowmanPosX+8, snowmanPosY+6, 2, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(snowmanPosX, snowmanPosY+14, 5, 0, Math.PI, false);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
    //draw snowman arms
    ctx.beginPath();
    ctx.moveTo(snowmanPosX-28,snowmanPosY+45);
    ctx.lineTo(snowmanPosX-50,snowmanPosY+65);
    ctx.strokeStyle = 'darkbrown';
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(snowmanPosX+28,snowmanPosY+45);
    ctx.lineTo(snowmanPosX+50,snowmanPosY+65);
    ctx.strokeStyle = 'darkbrown';
    ctx.stroke();
    ctx.closePath();

    //draw text
    ctx.font = '40px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('happy valentines day :)', 200, 40);

    //draw snow
    
    if(snow1PosY > canvasHeight - 80){
        snow1PosX = setRandom();
        snow1PosY = 0;
    }
    else{
        ctx.beginPath();
        ctx.arc(snow1PosX, snow1PosY, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    if(snow2PosY > canvasHeight - 80){
        snow2PosX = setRandom();
        snow2PosY = 0;
    }
    else{
        ctx.beginPath();
        ctx.arc(snow2PosX, snow2PosY, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    if(snow3PosY > canvasHeight - 80){
        snow3PosX = setRandom();
        snow3PosY = 0;
    }
    else{
        ctx.beginPath();
        ctx.arc(snow3PosX, snow3PosY, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    if(snow4PosY > canvasHeight - 80){
        snow4PosX = setRandom();
        snow4PosY = 0;
    }
    else{
        ctx.beginPath();
        ctx.arc(snow4PosX, snow4PosY, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    if(snow5PosY > canvasHeight - 80){
        snow5PosX = setRandom();
        snow5PosY = 0;
    }
    else{
        ctx.beginPath();
        ctx.arc(snow5PosX, snow5PosY, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    if(snow6PosY > canvasHeight - 80){
        snow6PosX = setRandom();
        snow6PosY = 0;
    }
    else{
        ctx.beginPath();
        ctx.arc(snow6PosX, snow6PosY, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    if(snow7PosY > canvasHeight - 80){
        snow7osX = setRandom();
        snow7PosY = 0;
    }
    else{
        ctx.beginPath();
        ctx.arc(snow7PosX, snow7PosY, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    if(snow8PosY > canvasHeight - 80){
        snow8PosX = setRandom();
        snow8PosY = 0;
    }
    else{
        ctx.beginPath();
        ctx.arc(snow8PosX, snow8PosY, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }


    snowmanPosX+=0.1;
    snow1PosY+=8;
    snow2PosY+=10;
    snow3PosY+=11;
    snow4PosY+=7.5;
    snow5PosY+=9;
    snow6PosY+=9;
    snow7PosY+=9;
    snow8PosY+=9;
}

function setRandom(){
    return Math.floor(Math.random() * 800);
}