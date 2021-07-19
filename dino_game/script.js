let dino = document.querySelector('.dino');
let cactus = document.querySelector('.cactus');
// let cactus2 = document.querySelector('.cactus2');
let stopwatch = document.querySelector('.time_game span');
let gameOver = document.querySelector('.game_over');
let resetGame = document.querySelector('.game_over i');


let ms = 0,
    s = 0,
    m = 0;

let timer;
getTimer();

function run() {
    stopwatch.textContent = getTimer()
    ms++;
    if(ms == 100) {
        ms = 0;
        s++
    }
    if(s == 60) {
        s = 0;
        m++
    }

    if(stopwatch.textContent == '00:05:00') {
        cactus.classList.add('cactusAnimSpeed')
    }
}

function getTimer() {
    return (m < 10 ? '0' + m : m) + ':' +(s < 10 ? '0' + s : s) + ':' +(ms < 10 ? '0' + ms : ms);
  }

  function stopTimer() {
      clearInterval(timer);
       timer = false
  }

  function clearTimer() {
    ms = 0;
    s = 0;
    s = 0;
    stopwatch.textContent = getTimer()
    stopTimer();
  }

  resetGame.addEventListener('click', () => {
      clearTimer()
      gameOver.classList.remove('gameOver')
  })


window.onkeydown = function jump() {
    if(dino.classList != 'jump' && dino.classList != 'dinoAnim' && cactus.classList != 'cactusAnim') {
        dino.classList.add('jump')
        dino.classList.add('dinoAnim')
        cactus.classList.add('cactusAnim')
        // cactus2.classList.add('cactus2Anim')
    }

    

    if(!timer) {
        timer = setInterval(run, 10)
    }

    setTimeout(() => {
        dino.classList.remove('jump')
    }, 500);
}


let checkDead = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if(cactusLeft < 60 && cactusLeft > 0 && dinoTop >= 60) {
        gameOver.classList.add('gameOver')
        dino.classList.remove('dinoAnim')
        cactus.classList.remove('cactusAnim')
        cactus.classList.remove('cactusAnimSpeed')
        // cactus2.classList.remove('cactus2Anim')
        stopTimer()
    }

}, 10);