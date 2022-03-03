
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

/* 
reminder 
- ARREY: .include per i duplicati
*/