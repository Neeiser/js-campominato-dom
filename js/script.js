
/*
-----------
Get Element // Queryes
-----------
*/

// Header Get Element

const modeSelecter = document.getElementById('difficulty-selecter');
const hardModeSelected = document.getElementById('hard-mode');
const normalModeSelected = document.getElementById('normal-mode');
const easyModeSelected = document.getElementById('easy-mode');
const playButton = document.getElementById('play-btn');

// Main Queryes

const boxContainer = document.querySelector('.box-container');

/*
-----------
Event
-----------
*/

playButton.addEventListener('click', function(){

    if (modeSelecter.value == 'hard'){

        boxContainer.innerHTML = ""; /* BOX CLEARING */
        boxContainer.style.width = '760px'; /* RESIZE */

        for (i = 1; i <= 100; i++) {
            const jsBox = document.createElement('div');
            jsBox.classList.add('boxes');
            jsBox.innerHTML = i;
            jsBox.addEventListener('click', changeCellColor);
            boxContainer.append(jsBox);
        }
    } else if (modeSelecter.value == 'normal'){

        boxContainer.innerHTML = ""; /* BOX CLEARING */
        boxContainer.style.width = '690px'; /* RESIZE */

        for (i = 1; i <= 81; i++) {
            const jsBox = document.createElement('div');
            jsBox.classList.add('boxes');
            jsBox.innerHTML = i;
            jsBox.addEventListener('click', changeCellColor);
            boxContainer.append(jsBox);
        }
    } else {

        boxContainer.innerHTML = ""; /* BOX CLEARING */
        boxContainer.style.width = '550px'; /* RESIZE */

        for (i = 1; i <= 49; i++) {
            const jsBox = document.createElement('div');
            jsBox.classList.add('boxes');
            jsBox.innerHTML = i;
            jsBox.addEventListener('click', changeCellColor);
            boxContainer.append(jsBox);
        }
    }
});

function changeCellColor(event) {

	this.classList.add('selected');
	
}

/* 
PANICO!
MI SERVE BOXES MA NON RIESCO A RICHIAMARLO! SI TROVA QUA SOPRA MA NON SO 
COME TIRARLO FUORI DA LI PER APPICCICARGLI L'EVENTLISTENER CLICK.
Considerazioni:
1) Ogni azione di richiamo diretta tipo quella che riporto qua sotto mi dice che:
"non trovo l'elemento da selezionare"
2) Chiaramente non lo trova all'inizio, non esiste al caricamento della pagina...
3) Dovrei scoprire una qualche funzione...
*/

/* const box = document.getElementsByClassName('boxes');

box.addEventListener('click', function(){
    console.log('Clicked!')
}); */






/* 
Il computer deve generare 16 numeri casuali nello stesso 
range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati. 
*/

/*
- Creo un arrey contenitore
- Apro un ciclo while
- Metto come limite 16 del ciclo e lo faccio partire da 1, altrimenti mi da 17 risultati.
- Metto il generatore di numeri random all'interno di una variabile
- Paragono con un IF se i numeri estratti sono già presenti
- Se non sono presenti pusho i numeri all'interno dell'arrey.
*/

/* 
HARD RANDOM 
*/

const randomBombArrHard = []

while (randomBombArrHard.length < 16) {
    let randomBombNumber = Math.floor(Math.random() * 100) + 1;

    if (randomBombArrHard.includes(randomBombNumber) == false) { 
        randomBombArrHard.push(randomBombNumber);
    }
    console.log(randomBombArrHard, randomBombNumber);
}

console.log(randomBombArrHard);

/* 
NORMAL RANDOM 
*/

const randomBombArrNormal = []

while (randomBombArrNormal.length < 16) {
    let randomBombNumber = Math.floor(Math.random() * 81) + 1;

    if (randomBombArrNormal.includes(randomBombNumber) == false) { 
        randomBombArrNormal.push(randomBombNumber);
    }
    console.log(randomBombArrNormal, randomBombNumber);
}

console.log(randomBombArrNormal);

/* 
EASY RANDOM 
*/

const randomBombArrEasy = []

while (randomBombArrEasy.length < 16) {
    let randomBombNumber = Math.floor(Math.random() * 49) + 1;

    if (randomBombArrEasy.includes(randomBombNumber) == false) { 
        randomBombArrEasy.push(randomBombNumber);
    }
    console.log(randomBombArrEasy, randomBombNumber);
}

console.log(randomBombArrEasy);



/* 
In seguito l'utente clicca su una cella: 
se il numero è presente nella lista dei numeri generati - 
abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, 
altrimenti la cella cliccata si colora di azzurro e 
l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba 
o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una b. 
*/

