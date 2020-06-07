//Create gameboard module
const gameBoard = (() => {
    let gboard = [{text: 'X', clicked: false},
    {text: 'X', clicked: false},
    {text: 'X', clicked: false},
    {text: 'X', clicked: false},
    {text: 'X', clicked: false},
    {text: 'X', clicked: false},
    {text: 'X', clicked: false},
    {text: 'X', clicked: false},
    {text: 'X', clicked: false}];

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
        let turn = true;

        squares.forEach((squares, index) => squares.addEventListener('click', () => {
            if(gboard[index].clicked === false){
                turn = !turn;

                gboard[index].clicked = true;
                gboard[index].text = squares.textContent;
            }
           // console.log(turn);
        }));

        squares.forEach((squares, index) => squares.addEventListener('mouseenter', () => {
            if(gboard[index].clicked === false){
                const showText = document.querySelector(`#box${index}`);
            
                if(turn === false) showText.textContent = 'O';
                else showText.textContent = 'X';

                showText.style.cssText = 'visibility: visible;';
            }
        }));

        squares.forEach((squares, index) => squares.addEventListener('mouseleave', () => {
            const hideText = document.querySelector(`#box${index}`);

            if(gboard[index].clicked !== true) hideText.style.cssText = 'visibility: hidden;';
        })); 
    }

    
    return {render, gameplay};
})();

//Create controller module
const controller = (() => {

    //Create function for player to choose gamemode (Single or Multi)
    const gamemode = document.querySelectorAll('.gamemode');

    gamemode.forEach(gamemode => gamemode.addEventListener('click', () => {

        let clearOpt1 = document.querySelector('#single');
        let clearOpt2 = document.querySelector('#multi');
        let showStart = document.querySelector('#start');

        clearOpt1.style.cssText = 'display: none;';
        clearOpt2.style.cssText = 'display: none;';
        showStart.style.cssText = 'display: inline-block;';


        const updateTitle = document.querySelector('#question');

        if(gamemode.id === 'single') {
            updateTitle.textContent = 'Singleplayer';
            startGame(gamemode.id);
        }
        if(gamemode.id === 'multi') {
            const showInput = document.querySelector('#playerNames');

            updateTitle.textContent = 'Multiplayer';
            showInput.style.cssText = 'display: block;';

            startGame(gamemode.id);
        }
    }));

    //Show game board to start game
   function startGame(id){
       const start = document.querySelector('#start');

       start.addEventListener('click', () => {
            const hideMenu = document.querySelector('#menu');
            const showGame = document.querySelector('main');

            hideMenu.style.cssText = 'display: none;';
            showGame.style.cssText = 'display: block;';

            if(id === 'single'){
               // const single = Player(name, type);
            }
            if(id === 'multi'){
                const getName1 = document.querySelector('#name1');
                const getName2 = document.querySelector('#name2');

                const player1 = Player(getName1.value, 'X');
                const player2 = Player(getName2.value, 'O');

                gameBoard.render();
                gameBoard.gameplay();
           }
       });
   }

})();

//Create player factory
const Player = (name, type) => {
    this.name = name;
    this.type = type;
    let score = 0;

    return {name, score, type};
};




