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

function finishorder(){
    let pratosummary = document.querySelector(".pratosummary .nome");
    pratosummary.innerHTML = prato;
    let bebidasummary = document.querySelector(".bebidasummary .nome");
    bebidasummary.innerHTML = bebida;
    let sobremesasummary = document.querySelector(".sobremesasummary .nome");
    sobremesasummary.innerHTML = sobremesa;

    let pratosummarypreco = document.querySelector(".pratosummary .preco");
    pratosummarypreco.innerHTML = precoprato/100;
    let bebidasummarypreco = document.querySelector(".bebidasummary .preco");
    bebidasummarypreco.innerHTML = precobebida/100;
    let sobremesasummarypreco = document.querySelector(".sobremesasummary .preco");
    sobremesasummarypreco.innerHTML = precosobremesa/100;

    let totalpreco = document.querySelector(".total .preco");
    totalpreco.innerHTML = (precoprato + precobebida + precosobremesa)/100;

    let summarybg = document.querySelector(".summarybg");
    summarybg.classList.remove("displaynone");
}


function cancelarPedido() {
    let summarybg = document.querySelector(".summarybg");
    summarybg.classList.add("displaynone");
}

function enviarZap() {
    const telefoneRestaurante = 5571982479937;
    let precoTotal = (precoprato + precobebida + precosobremesa)/100;
    const encodedText = encodeURIComponent(`Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \nTotal: R$ ${precoTotal.toFixed(2)}`);
    const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
    window.open(urlWhatsapp);
}