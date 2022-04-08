const itens = [
    {tag: 'p', texto: 'frase 1'}, //lista de itens
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
]

const doc = document.querySelector('.container'); //variavel para pegar o item dentro do html
const div = document.createElement('div'); // criação de DIV para adicionar itens dentro dela


for (let i = 0; i < itens.length; i++){ //repetição somando +1 ao indice até ser = a 4
   let { tag, texto} = itens[i] ;
   let tagCriada = document.createElement(tag);
   tagCriada.innerHTML = texto; // ou usa-se tagCriada.innerText ou declarando a variavel let textoCriado = document.createElement(texto);
   div.appendChild(tagCriada);  // e colocando dentro da tag criada
}

doc.appendChild(div); //Criando a DIV principal dentro do container
