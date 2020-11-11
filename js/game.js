let game = {
    choose(fighterID) {
        if (partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS) { return; }
        let fighterChoosedPosition = Number(fighterID) - 1;
        let currentTeam = 2;

        if (partida.teamPlayer1.length == EMPTY || partida.teamPlayer2.length == partida.teamPlayer1.length) {
            partida.teamPlayer1.push(partida.allFighters[fighterChoosedPosition]);

            currentTeam = 1;
            this.changeTextPlayer(currentTeam, 2);

        } else {
            partida.teamPlayer2.push(partida.allFighters[fighterChoosedPosition]);
            this.changeTextPlayer(currentTeam, 1);
        }

        this.disableFighter(fighterID);
        this.updateTeam(currentTeam);

        if (partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS) { this.nextStage(); }
    },

    //DESHABILITAR CAMPEON
    disableFighter(fighterID) {
        let fighter = document.getElementById(`fighter${fighterID}`);
        fighter.setAttribute(`onclick`, ``);

        let classFighter = fighter.getAttribute('class');
        classFighter += ' disable';
        fighter.setAttribute('class', classFighter);
    },

    updateTeam(team) {
        let player = document.getElementById(`chossedPlayer${team}`);
        player.innerHTML = '';
        let teamList = partida.teamPlayer2;

        if (team == Number(1)) { teamList = partida.teamPlayer1; }

        for (const person of teamList) {
            let luchador = document.createElement('img');
            let indexLuchador = allNameFighters.indexOf(person.nombre) + 1;
            luchador.setAttribute("src", `img/human${indexLuchador}.png`);
            luchador.setAttribute("class", "luchador");
            luchador.setAttribute('title', ` Name:${person.nombre} Attack:${person.ataque} Defense:${person.defensa}`);

            player.appendChild(luchador);
        };
    },
}