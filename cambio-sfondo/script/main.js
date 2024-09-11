/**
 * @file        main.js
 * @author      Nicolò Galizia
 * @date        2024-09-10
 * @description 
 * Modalità notturna dopo un click
 */

document.addEventListener('DOMContentLoaded', function () {
    clickButtom();
});

function clickButtom() {
    let checkbox = document.getElementById('night-mode-edit');

    checkbox.addEventListener('click', function () {
        if (this.checked) {
            document.body.classList.add('night-mode');
            // document.body.classList.add('light');
        } else {
            document.body.classList.remove('night-mode');
            // document.body.classList.remove('night-mode');
        }
    });
};