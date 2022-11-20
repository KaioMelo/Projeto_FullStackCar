//let carts = document.querySelectorAll('add-cart');

let carts = document.querySelectorAll('add-cart').HTMLButtonElement.onclick

let produtos = [
    {
        nome: 'kit cabo e vela',
        tag: 'box1',
        preco: 63.98,
        quantidadeCarrinho: 0
    },
    {
        nome: 'câmera de ré',
        tag: 'box2',
        preco: 159.98,
        quantidadeCarrinho: 0
    },
    {
        nome: 'central multimidia',
        tag: 'box3',
        preco: 355.75,
        quantidadeCarrinho: 0
    },
    {
        nome: 'filtro de ar automotivo',
        tag: 'box4',
        preco: 19.9,
        quantidadeCarrinho: 0
    },
    {
        nome: 'freio de disco',
        tag: 'box5',
        preco: 75.98,
        quantidadeCarrinho: 0
    },
    {
        nome: 'kit duas vias',
        tag: 'box6',
        preco: 169.98,
        quantidadeCarrinho: 0
    },
    {
        nome: 'little trees',
        tag: 'box7',
        preco: 5.98,
        quantidadeCarrinho: 0
    },
    {
        nome: 'pneu padrão auto',
        tag: 'box8',
        preco: 363.63,
        quantidadeCarrinho: 0
    },
    {
        nome: 'vela',
        tag: 'box9',
        preco: 78.98,
        quantidadeCarrinho: 0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
       meuCarrinho(produtos[i]);
    })
}

 function onLoadCartNumber(){
    let numeroProdutos = localStorage.getItem('numeroCarrinho');
    if (numeroProdutos) {
        document.querySelector('.itens span').textContent = numeroProdutos
    }

function meuCarrinho() {
    console.log('The product clicked is', produtos)
    let numeroProdutos = localStorage.getItem('numeroCarrinho');
    
    numeroProdutos = parseInt(numeroProdutos);
    
    if (numeroProdutos) {
        localStorage.setItem('numeroCarrinho', numeroProdutos + 1);
    } else {
        localStorage.setItem('numeroCarrinho', 1);
    }
}
}

onLoadCartNumber()

/*var addItemId = 0;

function adicionarAoCarrinho () {
    addItemId += 1;
    var selectItem = document.createElement ('div');
    selectItem.classList.add('cart');
    selectItem.setAttribute('id', addItemId)
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc)
    var cartItems = document.getElementById('title')
    selectItem.append(img);
    cartItems.append(selectedItem);
    
}*/

/*const contador = document.querySelector('#qtd');
let valor = contador.value;*/

/*
function adicionarUnidade () {
    const contador = document.querySelector('.qtd');
    let valor = contador.value;
    valor = ++valor;
    contador.value = valor;

}

function removerUnidade () {
    const contador = document.querySelector('.qtd');
    let valor = contador.value;
    valor = valor !== 0 ? --valor : 0;
    contador.value = valor;
}
*/


 /*   const contador = document.querySelector('#qtd');
    const buttonIncrement = document.querySelector('#incrementOne')
    const buttonDecrement = document.querySelector('#decrementOne')

    let valor = contador.value;

    buttonIncrement.addEventListener('click',() => {
        valor = ++valor;
        contador.value = valor;
    })

    buttonDecrement.addEventListener('click',() => {
        valor = valor !== 0 ? --valor : 0;
        contador.value = valor;
    })*/

/*
    class Calcular {
        construct(vlrMax, vlrMin){
            this.vlrMax
            this.vlrMin
        }

        adicionar(){

        }
    }
    */
