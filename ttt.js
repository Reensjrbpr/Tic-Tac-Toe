//Create gameboard module
const gameBoard = (() => {
    let gboard = ['X','X','X','X','X','X','X','X','X'];

    //Generate gameboard
    function render(){
        const grid = document.querySelector('#grid');

        for(let i = 0; i < gboard.length; i++){
            
            const square = document.createElement('div');
            const squareText = document.createElement('div');
        
            square.classList.add('squares');
            squareText.setAttribute('id', `box${i}`);
            squareText.textContent = gboard[i];
            squareText.style.cssText = 'visibility: hidden;';

            grid.appendChild(square);
            square.appendChild(squareText);
        }
    }

    //Create function for player to choose which square to play on
    function gameplay(){
        const squares = document.querySelectorAll('.squares');
        
        squares.forEach((squares, index) => squares.addEventListener('mouseenter', () => {
            const showText = document.querySelector(`#box${index}`);
            showText.style.cssText = 'visibility: visible;';
        }));

        squares.forEach((squares, index) => squares.addEventListener('mouseleave', () => {
            const hideText = document.querySelector(`#box${index}`);
            hideText.style.cssText = 'visibility: hidden;';
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

