


function sp(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('multiPage').style.display = "none";
    document.getElementById('singlePage').style.display = "block";
}

function mp(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('multiPage').style.display = "block";
}



function draw(){
    var ctx = document.getElementById("hangman").getContext('2d');
        ctx.fillStyle = "white";
        ctx.lineWidth=3;
        ctx.fillRect(0, 0, 300, 300);
        ctx.beginPath(); //vertical bar
            ctx.moveTo(50,270);
            ctx.lineTo(50,25);
            ctx.stroke();
        ctx.beginPath(); //vertical bar long piece
            ctx.moveTo(65,270);
            ctx.lineTo(65,85);
            ctx.stroke();
        ctx.beginPath(); //vertical bar short piece
            ctx.moveTo(65,64);
            ctx.lineTo(65,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar
            ctx.moveTo(49,25);
            ctx.lineTo(175,25);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar short piece
            ctx.moveTo(49,40);
            ctx.lineTo(86,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar long piece
            ctx.moveTo(106,40);
            ctx.lineTo(175,40);
            ctx.stroke();
        ctx.beginPath(); //small vertical bar
            ctx.moveTo(173,25);
            ctx.lineTo(173,40);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(100,25);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(60,90);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(60,90);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(100,25);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //ground
            ctx.moveTo(35,270);
            ctx.lineTo(265,270);
            ctx.stroke();
        ctx.beginPath(); //noose
            ctx.moveTo(150,40);
            ctx.lineTo(150,80);
            ctx.stroke();
    var cntx = document.getElementById("homeHangman").getContext('2d');
        cntx.fillStyle = "white";
        cntx.lineWidth=3;
        cntx.fillRect(0, 0, 300, 300);
        cntx.beginPath(); //vertical bar
            cntx.moveTo(50,270);
            cntx.lineTo(50,25);
            cntx.stroke();
        cntx.beginPath(); //vertical bar long piece
            cntx.moveTo(65,270);
            cntx.lineTo(65,85);
            cntx.stroke();
        cntx.beginPath(); //vertical bar short piece
            cntx.moveTo(65,64);
            cntx.lineTo(65,40);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar
            cntx.moveTo(49,25);
            cntx.lineTo(175,25);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar short piece
            cntx.moveTo(49,40);
            cntx.lineTo(86,40);
            cntx.stroke();
        cntx.beginPath(); //horizontal bar long piece
            cntx.moveTo(106,40);
            cntx.lineTo(175,40);
            cntx.stroke();
        cntx.beginPath(); //small vertical bar
            cntx.moveTo(173,25);
            cntx.lineTo(173,40);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(50,80);
            cntx.lineTo(100,25);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(60,90);
            cntx.lineTo(111,35);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(50,80);
            cntx.lineTo(60,90);
            cntx.stroke();
        cntx.beginPath(); //cross bar
            cntx.moveTo(100,25);
            cntx.lineTo(111,35);
            cntx.stroke();
        cntx.beginPath(); //ground
            cntx.moveTo(35,270);
            cntx.lineTo(265,270);
            cntx.stroke();
        cntx.beginPath(); //noose
            cntx.moveTo(150,40);
            cntx.lineTo(150,80);
            cntx.stroke();
}
