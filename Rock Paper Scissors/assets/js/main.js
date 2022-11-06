"use strict";

// radio buttons

const rounds5 = document.querySelector(".input5");
const rounds10 = document.querySelector(".input10");
const rounds15 = document.querySelector(".input15");
const rounds20 = document.querySelector(".input20");

// html output Runden
const roundsTotal = document.querySelector(".rounds-total-h2");
const activeRound = document.querySelector(".active-round-h2");

// html output Announcer + Counter
const announcer = document.querySelector(".announcer");
const playerCounter = document.querySelector(".player-counter");
const computerCounter = document.querySelector(".computer-counter");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// globale Variablen Zähler Player/Computer - Rundenzähler
let playerScore = 0;
let computerScore = 0;
let activeRoundScore = 0;
let totalRoundScore = 5;
let trackScorePlayer = 0;
let trackScoreComputer = 0;

// überprüfe welcher Radio Button ist aktiv
function checkRounds(event) {
	event.preventDefault();

	if (rounds5.checked) {
		totalRoundScore = 5;
		roundsTotal.innerHTML = 5;
		activeRound.innerHTML = 0;
		console.log("5 is checked");
	}
	if (rounds10.checked) {
		totalRoundScore = 10;
		roundsTotal.innerHTML = 10;
		activeRound.innerHTML = 0;
		console.log("10 is checked");
	}
	if (rounds15.checked) {
		totalRoundScore = 15;
		roundsTotal.innerHTML = 15;
		activeRound.innerHTML = 0;
		console.log("15 is checked");
	}
	if (rounds20.checked) {
		totalRoundScore = 20;
		roundsTotal.innerHTML = 20;
		activeRound.innerHTML = 0;
		console.log("20 is checked");
	}
}

// click auf Button Stein
function playerChooseRock(event) {
	event.preventDefault();

	const rock = 1; // Stein = 1
	console.log("Players Chois: rock: ", rock);

	compareChoises(rock);
}

// click auf Button Papier
function playerChoosePaper(event) {
	event.preventDefault();

	const paper = 2; // Papier = 2
	console.log("Players Chois: paper: ", paper);

	compareChoises(paper);
}

// click auf Button Schere
function playerChooseScissors(event) {
	event.preventDefault();

	const scissors = 3; // Schere = 3
	console.log("Players Chois: scissors: ", scissors);

	compareChoises(scissors);
}

// Funktionsaufruf Vergleich wer was gewählt hat, es wird 1, 2, oder 3 als Argument übergeben
function compareChoises(choisPlayer) {
	event.preventDefault();

	let compChoise = Math.floor(Math.random() * 3) + 1; // Random Wahl des Computers 1-3

	if (
		rounds5.checked ||
		rounds10.checked || // schauen ob ein Radio-Button angeclickt wurde
		rounds15.checked ||
		rounds20.checked
	) {
		// falls Radio-Button ausgewählt, verstecke section radio-buttons, und lass section Counter erscheinen indem man classe "hide-content" hinzufügt/entfernt
		document.querySelector(".rounds").classList.add("hide-content");
		document.querySelector(".rounds-counter").classList.remove("hide-content");
		document
			.querySelector(".rounds-counter-headline")
			.classList.remove("hide-content");

		// Überprüfe ob aktuelle Runde !== max Rundenzahl ist
		if (activeRoundScore !== totalRoundScore) {
			console.log("computers Chois: ", compChoise);

			// überprüfe ob das Gleiche gewählt wurde,
			if (choisPlayer == compChoise) {
				announcer.innerHTML = "DRAW"; // falls ja = Unentschieden
				activeRoundScore++; // Rundenzähler um 1 erhöhen
				activeRound.innerHTML = activeRoundScore; // ins HTML schreiben
				document.querySelector(".rock").style.animation = `draw-animation 1s`;
			}

			// Spieler hat Stein(1) UND Computer hat Papier(2)
			if (choisPlayer == 1 && compChoise == 2) {
				announcer.innerHTML = "Computer winns this Round"; // Ausgabe Computer gewinnt diese Runde
				computerScore++; // Zähler Computer +1
				computerCounter.innerHTML = computerScore; //Zählerstand ins HTML schreiben
				activeRoundScore++; // Rundenzähler +1
				activeRound.innerHTML = activeRoundScore; // Rundenzähler ins HTML schreiben
			}

			// Spieler hat Stein(1) UND Computer hat Schere(3)
			if (choisPlayer == 1 && compChoise == 3) {
				announcer.innerHTML = "Player winns this round";
				playerScore++;
				playerCounter.innerHTML = playerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
				// document.querySelector(".rock").style.animation = `win-animation 1s`;
			}

			// Spieler hat Papier(2) UND Computer hat Stein(1)
			if (choisPlayer == 2 && compChoise == 1) {
				announcer.innerHTML = "Player winns this round";
				playerScore++;
				playerCounter.innerHTML = playerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
			}

			// Spieler hat Papier(2) UND Computer hat Schere(3)
			if (choisPlayer == 2 && compChoise == 3) {
				announcer.innerHTML = "Computer winns this Round";
				computerScore++;
				computerCounter.innerHTML = computerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
			}

			// Spieler hat Schere(3) UND Computer hat Stein(1)
			if (choisPlayer == 3 && compChoise == 1) {
				announcer.innerHTML = "Computer winns this Round";
				computerScore++;
				computerCounter.innerHTML = computerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
			}

			// Spieler hat Schere(3) UND Computer hat Papier(2)
			if (choisPlayer == 3 && compChoise == 2) {
				announcer.innerHTML = "Player winns this round";
				playerScore++;
				playerCounter.innerHTML = playerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
			}
		} else {
			// wenn Rundenzähler maximum Runden erreicht hat vergleiche Spielstand und gib im HTML aus ob der Spieler gewonnen/verloren hat oder obs ein Unentschieden ist.
			if (playerScore > computerScore) {
				announcer.innerHTML = "Winner Winner Chicken Dinner !!!";
				announcer.style.color = "green";
			}
			if (playerScore < computerScore) {
				announcer.innerHTML = "YOU LOOSE, geh nach Hause !!!";
				announcer.style.color = "red";
			}
			if (playerScore == computerScore) {
				announcer.innerHTML = "DRAW";
				announcer.style.color = "yellow";
			}
		}
	} else {
		document.querySelector(".how-many-rounds").innerHTML =
			"Wähle Rundenanzahl zuerst!";
		document.querySelector(".how-many-rounds").style.color = `red`;
	}
}

rockBtn.addEventListener(`click`, () => {
	if (playerScore > trackScorePlayer) {
		document.querySelector(".rock").style.animation = `win-animation 1s`;
		trackScorePlayer = playerScore;
	} else if (computerScore > trackScoreComputer) {
		document.querySelector(".rock").style.animation = `loose-animation 1s`;
		trackScoreComputer = computerScore;
	}
});
