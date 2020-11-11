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
}