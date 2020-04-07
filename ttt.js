//Create gameboard module
const gameBoard = (() => {
    let gboard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

    //Generate gameboard
    function render(){
        let grid = document.querySelector('#grid');

        for(let i = 0; i < gboard.length; i++){
            
            let square = document.createElement('div');

            square.textContent = gboard[i];
            square.classList.add('squares');

            grid.appendChild(square);
        }
    }

    return {render};
})();

//Create controller module
const controller = (() => {


})();

//Create player factory
const Player = () => {
    let name;
    let score;
    let type;

    return {name, score, type};
};

gameBoard.render();