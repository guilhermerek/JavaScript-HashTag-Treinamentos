class Stopwatch {
  #elapsedTimeInSeconds = 0; //em segundos, o use de # torna a propriedade PRIVADA
  #intervalId = null; //referencia para o contador que está executando

  constructor() {} //construtor 'padrão' utilizamos para montar o objeto

  get elapsedTime() {
    return Stopwatch.formatTime(this.#elapsedTimeInSeconds);
  }

  start(callback = () => {}) {
    this.#intervalId = setInterval(() => {
      this.#elapsedTimeInSeconds++;
      callback();
    }, 1000);
  }

  stop(callback = () => {}) {
    clearInterval(this.#intervalId);
    callback();
  }

  reset(callback = () => {}) {
    this.#elapsedTimeInSeconds = 0;
    callback();
  }

  static formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;
    return `${Stopwatch.zeroPadding(hours)}:${Stopwatch.zeroPadding(
      minutes
    )}:${Stopwatch.zeroPadding(seconds)}`;
  }

  static zeroPadding(originalNum, desiredAmountDigits = 2) {
    let stringNumber = String(originalNum);
    const zeroRequired = desiredAmountDigits - stringNumber.length;

    if (zeroRequired <= 0) {
      return stringNumber;
    }

    for (let i = 0; i < zeroRequired; i++) {
      stringNumber = `0${stringNumber}`;
    }

    return stringNumber;
  }
}

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const stopwatchDisplay = document.getElementById('stopwatch-display');

function updateDisplay() {
  stopwatchDisplay.innerText = sw.elapsedTime;
}

const sw = new Stopwatch();

startButton.addEventListener('click', () => {
  sw.start(updateDisplay);
});

stopButton.addEventListener('click', () => {
  sw.stop();
});

resetButton.addEventListener('click', () => {
  sw.reset(updateDisplay);
});
