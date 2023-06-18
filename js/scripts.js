/*const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

const menu = document.querySelector('.menu');
menu.style.marginTop = headerHeight + 'px';*/

let precoprato;
let precobebida;
let percosobremesa;
let prato;
let bebida;
let sobremesa;

let elementosselecionados = 0;

function selecionarprato(nomedoprato, precodoprato, elemento){
    let pratoselecionado = document.querySelector(".prato .selected");

    if(pratoselecionado !== null){
        pratoselecionado.classList.remove("selected");
    }
    else elementosselecionados = elementosselecionados + 1;

    elemento.classList.add("selected");
    prato = nomedoprato;
    precoprato = precodoprato;
    verificarPedido();
}

function selecionarbebida(nomedobebida, precodobebida, elemento){
    let bebidaselecionado = document.querySelector(".bebida .selected");

    if(bebidaselecionado !== null){
        bebidaselecionado.classList.remove("selected");
    }
    else elementosselecionados = elementosselecionados + 1;

    elemento.classList.add("selected");
    bebida = nomedobebida;
    precobebida = precodobebida;
    verificarPedido();
}

function selecionarsobremesa(nomedosobremesa, precodosobremesa, elemento){
    let sobremesaselecionado = document.querySelector(".sobremesa .selected");

    if(sobremesaselecionado !== null){
        sobremesaselecionado.classList.remove("selected");
    }
    else elementosselecionados = elementosselecionados + 1;

    elemento.classList.add("selected");
    sobremesa = nomedosobremesa;
    precosobremesa = precodosobremesa;
    verificarPedido();
}

const orderbuttom = document.querySelector('.order');

function verificarPedido(){
    if(elementosselecionados === 3){
        orderbuttom.innerHTML = "Fazer pedido";
        orderbuttom.classList.add("ativo");
    }
}

function selectitem(){

}