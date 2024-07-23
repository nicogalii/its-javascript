/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @description 
 */


/**
 * Descrizione della funzione
 * @param {TipoInput1} NomeInput1 - DescrizioneInput1
 * @param {TipoInput2} NomeInput2 - DescrizioneInput2
 * @returns {TipoOutput} - DescrizioneOutput
 */
const catWalk = () => {
    let cat = document.querySelector('img');
    let currentPositionCat = parseInt(window.getComputedStyle(cat).left, 10);
    cat.style.left = (currentPositionCat + 10) + 'px';
}



setInterval(catWalk, 50);