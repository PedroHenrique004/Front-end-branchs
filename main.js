function Pokemon (raca, cor) {
    this.raca = raca;
    this.cor = cor;
}


function Froakie(apelido, tipagem, evolucoesPossiveis, shiny, dono ){
        Pokemon.call(this,"Froakie", "Azul");
        this.apelido = apelido;
        this.tipagem = tipagem;
        this.evolucoesPossiveis =  evolucoesPossiveis;
        this.shiny = shiny;
        this.eShiny = function(){
            if (this.shiny == true){
                console.log(`O pokemon tem a cor ${this.cor} Brilhante`)
            }

            else {
                console.log(`O pokemon tem a cor ${this.cor}`)
            }
        }
        this.dono = dono;

}


function Charmander(apelido, tipagem, evolucoesPossiveis, shiny, dono ){
    Pokemon.call(this,"Charmander", "vermelho");
    this.apelido = apelido;
    this.tipagem = tipagem;
    this.evolucoesPossiveis =  evolucoesPossiveis;
    this.shiny = shiny;
    this.eShiny = function(){
        if (this.shiny == true){
            console.log(`O pokemon tem a cor ${this.cor} Brilhante`)
        }

        else {
            console.log(`O pokemon tem a cor ${this.cor}`)
        }
    }
    this.dono = dono;

}



const froakieDoPedro = new Froakie("Sapo","Agua", 2, true, "Pedro")
const froakieDaAna = new Froakie("SaltimbancoAzul","Agua", 2, false, "Ana")
const froakieDoGabriel = new Charmander ("Dragao","Fogo", 2, false, "Gabriel")




console.log(froakieDoPedro);
froakieDoPedro.eShiny();

console.log(froakieDoGabriel);
froakieDoGabriel.eShiny();

console.log(froakieDaAna);
froakieDaAna.eShiny();

