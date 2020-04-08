//Create gameboard module
const gameBoard = (() => {
    let gboard = ['','','','','','','','',''];

    //Generate gameboard
    function render(){
        const grid = document.querySelector('#grid');

        for(let i = 0; i < gboard.length; i++){
            
            const square = document.createElement('div');

            square.textContent = gboard[i];
            square.classList.add('squares');

            grid.appendChild(square);
        }
    }

    //Create function for player to choose which square to play on
    function gameplay(){
        const squares = document.querySelectorAll('.squares');

        squares.forEach((squares, index) => squares.addEventListener('mouseenter', () => {
            squares.textContent = 'X';
        }));

        squares.forEach((squares, index) => squares.addEventListener('mouseleave', () => {
            squares.textContent = '';
        }));
    }
    return {render, gameplay};
})();

//Create controller module
const controller = (() => {

    let type = '';

    //Create function for player to choose gamemode (Single or Multi)
    const gamemode = document.querySelectorAll('.gamemode');

    gamemode.forEach(gamemode => gamemode.addEventListener('click', (gamemode) => {
        let clearMenu = document.querySelector('#menu');
        clearMenu.style.cssText = 'display: none;';

        //if(gamemode.id === 'single') const single = Player();
        //if(gamemode.id === 'multi') const multi = Player();
    }));

    
})();

//Create player factory
const Player = () => {
    let name = name;
    let score;
    let type;

    return {name, score, type};
};

gameBoard.render();
gameBoard.gameplay();

