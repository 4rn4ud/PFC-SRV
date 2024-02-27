class PFC {
    constructor() {
        this.tbl = ["pierre","feuille","ciseaux"];
    }

    alea() {
        return this.tbl[Math.floor(Math.random() * 3)];
    }

    run(choix) {
        this.resBot = this.alea();
        
        let resultat = null;
        if ((choix === "pierre" && this.resBot === "feuille") || (choix === "ciseaux" && this.resBot === "pierre") || (choix === "feuille" && this.resBot === "ciseaux"))
            {resultat = `<p>Vous: ${choix} \tL'ordinateur: ${this.resBot} \nVous avez perdu...</p>`;
            console.log(`Vous: ${choix} \tL'ordinateur: ${this.resBot} \nVous avez perdu...`);}
        else if ((choix === "feuille" && this.resBot === "pierre") || (choix === "pierre" && this.resBot === "ciseaux") || (choix === "ciseaux" && this.resBot === "feuille"))
            {resultat = `<p>Vous: ${choix} \tL'ordinateur: ${this.resBot} \nVous avez gagné !</p>`;
            console.log(`Vous: ${choix} \tL'ordinateur: ${this.resBot} \nVous avez gagné !`);}
        else if (choix === this.resBot)
            {resultat = `<p>Vous: ${choix} \tL'ordinateur: ${this.resBot} \nÉgalité !</p>`;
            console.log(`Vous: ${choix} \tL'ordinateur: ${this.resBot} \nÉgalité !`);}
        else {
            resultat = `<p>Attention, vous ne pouvez pas jouer ça !`;
            console.log("Attention, vous ne pouvez pas jouer ça !");
        }
        return resultat;
    }
}

module.exports = new PFC();