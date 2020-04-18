//Create gameboard module
const gameBoard = (() => {
    let gboard = [{text: 'X', clicked: 'no'},
    {text: 'X', clicked: 'no'},
    {text: 'X', clicked: 'no'},
    {text: 'X', clicked: 'no'},
    {text: 'X', clicked: 'no'},
    {text: 'X', clicked: 'no'},
    {text: 'X', clicked: 'no'},
    {text: 'X', clicked: 'no'},
    {text: 'X', clicked: 'no'}];

    //Generate gameboard
    function render(){
        const grid = document.querySelector('#grid');

        for(let i = 0; i < gboard.length; i++){
            
            const square = document.createElement('div');
            const squareText = document.createElement('div');
        
            square.classList.add('squares');
            squareText.setAttribute('id', `box${i}`);
            squareText.textContent = gboard[i].text;
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

            //Mark box as "clicked"
            showText.addEventListener('click', () => {
                gboard[index].clicked = 'yes';
            });
        }));

        squares.forEach((squares, index) => squares.addEventListener('mouseleave', () => {
            const hideText = document.querySelector(`#box${index}`);

            if(gboard[index].clicked !== 'yes') hideText.style.cssText = 'visibility: hidden;';
        })); 
    }
    return {render, gameplay};
})();

//Create controller module
const controller = (() => {

    let type = '';

    //Create function for player to choose gamemode (Single or Multi)
    const gamemode = document.querySelectorAll('.gamemode');

    gamemode.forEach(gamemode => gamemode.addEventListener('click', () => {

       // gameBoard.gameplay();

        let clearMenu = document.querySelector('#menu');
        let showGame = document.querySelector('main');
        let clearOpt1 = document.querySelector('#single');
        let clearOpt2 = document.querySelector('#multi');
        let showStart = document.querySelector('#start');

        clearOpt1.style.cssText = 'display: none;';
        clearOpt2.style.cssText = 'display: none;';
        
        showStart.style.cssText = 'display: inline-block;';
      //  clearMenu.style.cssText = 'display: none;';
        //showGame.style.cssText = 'display: block;';

        if(gamemode.id === 'single') {const single = Player()};
        if(gamemode.id === 'multi') {
            const player1 = Player();
            const player2 = Player();
        }
    }));

    
})();

//Create player factory
const Player = () => {
    let name;
    let score;
    let type;

    return {name, score, type};
};

gameBoard.render();


