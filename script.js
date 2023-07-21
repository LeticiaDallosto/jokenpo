var contUser = 0;
var contPc = 0;
var contTie = 0;

const imgUser = document.getElementById("user");
const imgPC = document.getElementById("pc");
const playing = document.getElementById("playing");
const contador = document.getElementById("contador");

var player1 = "";
var player2 = "";

playing.addEventListener("click", () => {
    reset();
    playPc();
})

function reset() {
    player1 = document.querySelector('input[name="play"]:checked').value;
    imgUser.innerHTML = "<img src='assets/images/" + player1 + ".png'>";
    imgPC.innerHTML = "";
}

function playPc() {
    let opt = ['rock', 'paper', 'scissor'];
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num];
    imgPC.innerHTML = "<img src='assets/images/" + player2 + ".png'>";
    analyze();
}

function analyze() {

    playing.disabled = true;

    let win = "0";

    if (player1 == player2) {
        win = 0;
    } else if (player1 == "rock") {
        win = player2 == 'scissor' ? 1 : -1;
    } else if (player1 == 'paper') {
        win = player2 == 'rock' ? 1 : -1;
    } else if (player1 == 'scissor') {
        win = player2 == 'paper' ? 1 : -1;
    }

    if (win == 0) {
        showCustomAlert('Tie!');
        contTie = contTie + 1;
    } else if (win > 0) {
        showCustomAlert('Congratulations, you win!');
        contUser = contUser + 1;
    } else {
        showCustomAlert("You Lose!");
        contPc = contPc + 1;
    }

    document.querySelector('#User').innerText = contUser;
    document.querySelector('#PC').innerText = contPc;
    document.querySelector('#Tie').innerText = contTie;

    setTimeout(() => {
        playing.disabled = false;
        clear();
    }, 2000)
}

function clear() {
    imgPC.innerHTML = "";
    imgUser.innerHTML = "";
}

function showCustomAlert(message) {
    const alertContainer = document.getElementById('alert-container');
    alertContainer.innerHTML = `<p>${message}</p>`;
    alertContainer.style.display = 'block';

    setTimeout(() => {
        alertContainer.style.display = 'none';
    }, 1000);
}
