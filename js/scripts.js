/* Criar um jogo da memória usando HTML, CSS e JS. 
Como deve funcionar:
- Criar um layout com no mínimo 10 duplas de cartas (ou seja, no mínimo 20 cartas)
- A ordem das cartas deve ser aleatória, cada vez que recarregar a página
- As cartas ficam viradas para baixo (usar estilo padrão)
- Ao clicar em uma carta, exibir o valor real, como se tivesse sido viradas
- Ao clicar na segunda carta, exibir o valor real assim como acima
- Se ambos os valores forem iguais, as cartas permanecem viradas pra cima
- Se os valores forem diferentes, após 3 segundos, as cartas voltam a ser viradas para baixo
- Criar um display de pontos, a cada dupla de cartas certas, somar 10 pontos
- Ao acertar todas as duplas de cartas, deve exibir uma mensagem de parabéns e a pontuação final */

//-----------------------------------------------------------------------------------------------

//faz sorteio para embaralhamento das cartas
 
var sorteio = [
    { carta: "img/imagem01.jpg"},
    { carta: "img/imagem02.jpg"},
    { carta: "img/imagem03.jpg"},
    { carta: "img/imagem04.jpg"},
    { carta: "img/imagem05.jpg"},
    { carta: "img/imagem06.jpg"},
    { carta: "img/imagem07.jpg"},
    { carta: "img/imagem08.jpg"},
    { carta: "img/imagem09.jpg"},
    { carta: "img/imagem10.jpg"},
    { carta: "img/imagem01.jpg"},
    { carta: "img/imagem02.jpg"},
    { carta: "img/imagem03.jpg"},
    { carta: "img/imagem04.jpg"},
    { carta: "img/imagem05.jpg"},
    { carta: "img/imagem06.jpg"},
    { carta: "img/imagem07.jpg"},
    { carta: "img/imagem08.jpg"},
    { carta: "img/imagem09.jpg"},
    { carta: "img/imagem10.jpg"},    
]

sorteio.sort(() => Math.random() - 0.5);

for (var i = 0; i < 20; i++) {
    document.getElementsByClassName('cartas')[i].dataset.valor = sorteio[0].carta;
    sorteio.splice(0, 1);
};

var temp = ""
var cpf1 = ""
var cpf2 = ""
var vira1 = ""
var vira2 = ""

//verifica se já virou duas, se está na primeira ou na segunda carta
//vira as cartas selecionadas
function virarCarta(event) {
    if (cpf2 === "") {
        temp = event.target.src;
        if (cpf1 === "") {
            cpf1 = event.target.id;
            vira1 = event.target.dataset.valor;
            event.target.classList.add('flip');
            setTimeout (function(){   
                event.target.src = event.target.dataset.valor;                                   
            }, 300);
        } else {
            cpf2 = event.target.id;
            if (cpf1 != cpf2) {
                vira2 = event.target.dataset.valor;
                event.target.classList.add('flip');
                setTimeout (function(){   
                    event.target.src = event.target.dataset.valor;
                    cartasIguais();                    
                }, 300);
            } else {
                cpf2 = "";
                event.target.classList.remove('flip');
            }
        }
    }
}

var pontuacao = 0;

//verifica se são iguais
//Se forem iguais, verifica se já foram todas, soma pontuação e reseta variáveis temporárias
//se não forem iguais conta o tempo e desvira
function cartasIguais() {
    if (vira1 === vira2) {  
        cpf1 = "";
        cpf2 = "";
        vira1 = "";
        vira2 = "";
        pontuacao += 10;
        document.getElementById('score').value = (`score: ${pontuacao}`);
        verificarFinal();
    } else {
        setTimeout (function(){   
            document.getElementById(cpf1).classList.remove('flip');                 
            document.getElementById(cpf1).src = temp;
            document.getElementById(cpf2).classList.remove('flip');
            document.getElementById(cpf2).src = temp;
            cpf1 = "";
            cpf2 = "";
            vira1 = "";
            vira2 = "";
        }, 2000);
    }
}

//Se já foram todas exibe pontuação e os parabéns
function verificarFinal() {
    if (pontuacao === 100) {
        alert(`Parabéns! Você completou o jogo com uma pontuação de ${pontuacao} pontos`);
    }
}

function redistribuir() {
    window.location.reload();
}

//----------------------------------------------------------

/* function populateCards() {
    var sorteio = [
        'img/imagem01.jpg',
        'img/imagem02.jpg',
        'img/imagem03.jpg',
        'img/imagem04.jpg',
        'img/imagem05.jpg',
        'img/imagem06.jpg',
        'img/imagem07.jpg',
        'img/imagem08.jpg',
        'img/imagem09.jpg',
        'img/imagem10.jpg',
    ] 
    
    cards = cards.concat(cards);
    cards = sorteio.sort(() => .5 - Math.random());
    
    for (cards of cards) {
        const img = createCard(card);
        document.getElementsByClassName('cards')[0],
    }    
}

function createCard(card) {
    const img = document.createElement('img');
    img.src = 'imagem/verso.jpg';
    img.dataset.img = card;
    img.alt = 'card';
    img.addEventListener('click', function(event) {
        flip(event);
    })
    return img;
}

populateCards(); */
