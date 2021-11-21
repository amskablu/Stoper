const czasmierz = document.getElementById('stoper');

var godz = 0;
var min = 0;
var sek = 0;
var milsek = 0;
var stopczas = true;

function startTimer() {
  if (stopczas == true) {
        stopczas = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stopczas == false) {
    stopczas = true;
  }
}

function timerCycle() {
    if (stopczas == false) {
    milsek = parseInt(milsek);
    sek = parseInt(sek);
    min = parseInt(min);
    godz = parseInt(godz);
    
    milsek = milsek + 10;
    //sek = sek + 1;

    if (milsek == 1000){
      sek = sek + 1;
      milsek = 0;
    }

    if (sek == 60) {
      min = min + 1;
      sek = 0;
    }
    if (min == 60) {
      godz = godz + 1;
      min = 0;
      sek = 0;
    }

    if (milsek < 10 || milsek == 0) {
      milsek = '0' + milsek;
    }

    if (sek < 10 || sek == 0) {
      sek = '0' + sek;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (godz < 10 || godz == 0) {
      godz = '0' + godz;
    }

    czasmierz.innerHTML = godz + ':' + min + ':' + sek + ':' + milsek;

    setTimeout("timerCycle()", );
  }
}

function resetCzas() {
    czasmierz.innerHTML = '00:00:00:000';
}

