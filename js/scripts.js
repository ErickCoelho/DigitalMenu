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
    let pratoselecionado = document.querySelector(".prato .ativo");

    if(pratoselecionado !== null){
        pratoselecionado.classList.remove("ativo");
    }
    else elementosselecionados = elementosselecionados + 1;

    elemento.classList.add("ativo");
    prato = nomedoprato;
    precoprato = precodoprato;
    verificarPedido();
}

function selecionarbebida(nomedobebida, precodobebida, elemento){
    let bebidaselecionado = document.querySelector(".bebida .ativo");

    if(bebidaselecionado !== null){
        bebidaselecionado.classList.remove("ativo");
    }
    else elementosselecionados = elementosselecionados + 1;

    elemento.classList.add("ativo");
    bebida = nomedobebida;
    precobebida = precodobebida;
    verificarPedido();
}

function selecionarsobremesa(nomedosobremesa, precodosobremesa, elemento){
    let sobremesaselecionado = document.querySelector(".sobremesa .ativo");

    if(sobremesaselecionado !== null){
        sobremesaselecionado.classList.remove("ativo");
    }
    else elementosselecionados = elementosselecionados + 1;

    elemento.classList.add("ativo");
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