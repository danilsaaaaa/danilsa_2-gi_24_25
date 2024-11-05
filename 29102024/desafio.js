let num = parseInt(prompt("Introduza a um número:"));

if (num < 18) {
    document.write("Muito novo para votar");
} else {
    document.write("Já tem idade suficiente para votar");
}
let idade = parseInt(prompt("Introduza a sua idade:"));

if (idade < 18) {
    document.write("Muito novo para votar");
} else {
    document.write("Já tem idade suficiente para votar");
}
switch (new Date().getDay()) {
    case 0:document.write("<h1>É fim de semana</h1>");
    break;}