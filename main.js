const row = 3;
const column = 3;
const cells = document.querySelectorAll('.cell');

const players = ['X', 'O'];

function nextPlayer(){
    
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const cellIndex = parseInt(cell.getAttribute('data-cell'));
        console.log('Clicked cell index:', cellIndex);
    });
});