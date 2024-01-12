let resultado: number = 0;

function multiplicar (x: number, y: number): number {
    resultado = x * y;
    return resultado
}

multiplicar(10,2)
console.log(resultado)

function dizerOla(nome: string){
    const ola = `Olá ${nome}`
    console.log(ola)
}

dizerOla("Pedro")