function makeBubble() {
    bubbleList = ""
    for(var i = 1; i <= 216; i++){
        let num = Math.floor(Math.random() * 10);
        bubbleList += `<div class="bubble">${num}</div>`;
    }
    var pbtm = document.querySelector("#pbtm");
    pbtm.innerHTML = bubbleList;
}


var timer = 60;
function startTimer() {
    var interval = setInterval(function() {
        document.querySelector("#timer").innerHTML = timer;
        if (timer < 1) {
            clearInterval(interval);
            document.querySelector("#pbtm").innerHTML=`<h2>Game Over</h2>`;

        }
        timer--;
    }, 1000);
}


function hitBubble() {
    var num = Math.floor(Math.random() * 10);
    var hit = document.querySelector("#hit");
    hit.innerHTML = num;
}

var score = 0;
function addScore() {
    score += 5;
    document.querySelector("#score").innerHTML = score;
}

function clickBubble() {
    document.querySelector("#pbtm").addEventListener("click",function (dets){
        var clickedNumber = Number(dets.target.textContent);
        var hit = document.querySelector("#hit");
        if(clickedNumber == hit.innerHTML){
            addScore();
            makeBubble();
            hitBubble();
        }
    })
}



hitBubble();
startTimer();
makeBubble();
clickBubble();
