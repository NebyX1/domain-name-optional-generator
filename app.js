const pronoun = ['the', 'our', 'his', 'her', 'their'];
const adj = ['great', 'big', 'amazing', 'impressive', 'awesome'];
const noun = ['jogger', 'racoon', 'cat', 'smoothie', 'banana'];
const domain = ['.co.uk', '.org', '.net', '.com', '.info']
const startW = ['https://www.'];

var domainGenerator = () => {
    let arrayContenedor = [];
    for (let a = 0; a < pronoun.length; a++) {
        for (let b = 0; b < adj.length; b++) {
            for (let c = 0; c < noun.length; c++) {
                for (let d = 0; d < domain.length; d++) {
                    arrayContenedor.push(startW[0]+pronoun[a]+adj[b]+noun[c]+domain[d]);
                }
            }
        }
    }
    let sorteo = Math.floor(Math.random() * arrayContenedor.length);
    let elemento = arrayContenedor[sorteo];
    let seleccionado = String(elemento);
    // return seleccionado;
    document.getElementById("texto_aleatorio").innerHTML = seleccionado;  
}