class PFC {
    constructor() {
        this.tbl = ["pierre","feuille","ciseaux"];
    }

    alea() {
        return this.tbl[Math.floor(Math.random() * 3)];
    }

    run(choix) {
        this.resBot = this.alea();
        
        if ((choix === "pierre" && this.resBot === "feuille") || (choix === "ciseaux" && this.resBot === "pierre") || (choix === "feuille" && this.resBot === "ciseaux"))
            console.log(`Vous: ${choix} \tL'ordinateur: ${this.resBot} \nVous avez perdu...`);
        else if ((choix === "feuille" && this.resBot === "pierre") || (choix === "pierre" && this.resBot === "ciseaux") || (choix === "ciseaux" && this.resBot === "feuille"))
            console.log(`Vous: ${choix} \tL'ordinateur: ${this.resBot} \nVous avez gagné !`);
        else if (choix === this.resBot)
            console.log(`Vous: ${choix} \tL'ordinateur: ${this.resBot} \nÉgalité !`);
        else {
            console.log("Attention, vous ne pouvez pas jouer ça !");
        }
    }
}

const robot = new PFC();

// console.log(robot.run());