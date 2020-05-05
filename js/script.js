var user_weapon = document.getElementsByClassName('user_weapon')[0];
var cpu_weapon = document.getElementsByClassName('cpu_weapon')[0];
var start_button = document.getElementsByClassName('startgame')[0];
var btn = document.getElementsByClassName('btn'); // HTML collection!
var user_score = document.getElementsByClassName('user_score')[0];
var cpu_score = document.getElementsByClassName('cpu_score')[0];
var timer = document.getElementsByClassName('timer')[0];
var winner = document.getElementsByClassName('winner')[0];
var weaponText = document.getElementsByClassName('weapon'); // HTML collection!

let rock = 0;
let paper = 1;
let scissors = 2;

let userScore = 0;
let cpuScore = 0;
let userWeapon = 0;

function activateRound() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function() {
            this.style.backgroundColor = 'lightgreen';
            for (let j = 0; j < btn.length; j++) {
                btn[j].disabled = true;
            }
            for (let v = 0; v < weaponText.length; v++) {
                weaponText[v].innerText = "Awaiting selection...";
                weaponText[v].style.fontStyle = "italic";
            }
            if (this.innerText == "ROCK") {
                userWeapon = rock;
                countdown();
            }
            if (this.innerText == "PAPER") {
                userWeapon = paper;
                countdown();
            }
            if (this.innerText == "SCISSORS") {
                userWeapon = scissors;
                countdown();
            }
        });
    }
}
activateRound();

function countdown() {
    winner.className = 'winner';
	winner.innerText = "";
	timer.innerText = "";
	var seconds = 3;
	var interval = setInterval(function(){
		timer.innerText = seconds;
		seconds--;
		if (seconds < 0) {
			clearInterval(interval);
			timer.innerText = "Go!";
            playGame();
		}
	}, 1000);
}

function playGame() {
	start_button.innerText = "RESTART";
    
// RNG for CPU & winner declarations
	let cpuWeapon = Math.floor(Math.random() * 3);
	if (cpuWeapon == rock) {
        cpu_weapon.innerText = "ROCK!";
        cpu_weapon.style.fontStyle = "normal";
        if (userWeapon == paper) {
            user_weapon.innerText = "PAPER!";
            user_weapon.style.fontStyle = "normal";
            winner.innerText = "YOU WIN!";
            userScore++;
            winner.className += ' youwin';
        } else if (userWeapon == rock) {
            user_weapon.innerText = "ROCK!";
            user_weapon.style.fontStyle = "normal";
            winner.innerText = "DRAW!";
        } else if (userWeapon == scissors) {
            user_weapon.innerText = "SCISSORS!";
            user_weapon.style.fontStyle = "normal";
            winner.innerText = "YOU LOSE!";
            cpuScore++;
        }
    }
    if (cpuWeapon == scissors) {
        cpu_weapon.innerText = "SCISSORS!";
        cpu_weapon.style.fontStyle = "normal";
        if (userWeapon == rock) {
            user_weapon.innerText = "ROCK!";
            user_weapon.style.fontStyle = "normal";
            winner.innerText = "YOU WIN!";
            userScore++;
            winner.className += ' youwin';
        } else if (userWeapon == scissors) {
            user_weapon.innerText = "SCISSORS!";
            user_weapon.style.fontStyle = "normal";
            winner.innerText = "DRAW!";
        } else if (userWeapon == paper) {
            user_weapon.innerText = "PAPER!";
            user_weapon.style.fontStyle = "normal";
            winner.innerText = "YOU LOSE!";
            cpuScore++;
        }
    }
    if (cpuWeapon == paper) {
        cpu_weapon.innerText = "PAPER!";
        cpu_weapon.style.fontStyle = "normal";
        if (userWeapon == scissors) {
            user_weapon.innerText = "SCISSORS!";
            user_weapon.style.fontStyle = "normal";
            winner.innerText = "YOU WIN!";
            userScore++;
            winner.className += ' youwin';
        } else if (userWeapon == paper) {
            user_weapon.innerText = "PAPER!";
            user_weapon.style.fontStyle = "normal";
            winner.innerText = "DRAW!";
        } else if (userWeapon == rock) {
            user_weapon.innerText = "ROCK!";
            user_weapon.style.fontStyle = "normal";
            winner.innerText = "YOU LOSE!";
            cpuScore++;
        }
    }
    
    user_score.innerText = userScore;
	cpu_score.innerText = cpuScore;
    for (let i = 0; i < btn.length; i++) {
        btn[i].disabled = false;
        btn[i].style.backgroundColor = 'buttonface';
    }
    start_button.style.display = 'flex';
}

start_button.addEventListener('click', function() {
    start_button.style.display = 'none';
    for (let v = 0; v < weaponText.length; v++) {
        weaponText[v].innerText = "Awaiting selection...";
        weaponText[v].style.fontStyle = "italic";
    }
    userScore = 0;
    cpuScore = 0;
    user_score.innerText = userScore;
    cpu_score.innerText = cpuScore;
    timer.innerText = "";
    winner.innerText = "";
    winner.className = 'winner';
});