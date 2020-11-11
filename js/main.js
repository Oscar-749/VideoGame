const MAXNUMTEAMFIGHTERS = 3;
const EMPTY = 0;

let allNameFighters = ['Bea','Carl','Colt','Dinamyke','Jacky','Rosa','Shelly','Spike'];
let screens = ['init-scrn' , 'loading-scrn' , 'choose-scrn', 'fight-scrn','win-scrn'];
let actualScreen = 0;

let partida = {

    teamPlayer1: [],
    teamPlayer2: [],
    allFighters: [],
};
game.generateFighters();

//FUNCION RANDOM
const utils = {

    random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}