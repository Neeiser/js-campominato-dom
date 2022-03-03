
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
            const element = document.createElement('div');
            element.classList.add('boxes');
            element.innerHTML = i;
            boxContainer.append(element);
        }
    } else if (modeSelecter.value == 'normal'){

        boxContainer.innerHTML = ""; /* BOX CLEARING */
        boxContainer.style.width = '690px'; /* RESIZE */

        for (i = 1; i <= 81; i++) {
            const element = document.createElement('div');
            element.classList.add('boxes');
            element.innerHTML = i;
            boxContainer.append(element);
        }
    } else {

        boxContainer.innerHTML = ""; /* BOX CLEARING */
        boxContainer.style.width = '550px'; /* RESIZE */

        for (i = 1; i <= 49; i++) {
            const element = document.createElement('div');
            element.classList.add('boxes');
            element.innerHTML = i;
            boxContainer.append(element);
        }
    }
});


/* Logica */
/*
- Creo un arrey contenitore
- Apro un ciclo while
- Metto come limite 16 del ciclo e lo faccio partire da 1, altrimenti mi da 17 risultati.
- Metto il generatore di numeri random all'interno di una variabile
- Paragono con un IF se i numeri estratti sono già presenti
- Se non sono presenti pusho i numeri all'interno dell'arrey.
*/


const randomBombArr = []
let i = 1;

while (randomBombArr.length < 16) {
    let randomBombNumber = Math.floor(Math.random() * 16) + 1;

    if (randomBombArr.includes(randomBombNumber) == false) { /* Se è falso che il numero estratto è incluso nell'arrey allora... */
        randomBombArr.push(randomBombNumber); /*... procedi aggiungendo il numero nell'arrey*/
    }

    
}

console.log(randomBombArr);






/* 
Il computer deve generare 16 numeri casuali nello stesso 
range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati. 
*/

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

/* 
reminder 
- ARREY: .include per i duplicati
*/