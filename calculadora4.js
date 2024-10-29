let tela = document.querySelector('div#tela')
let valor_anter = document.querySelector('div#anterior')
let el_atual = ''
let el_anter = ''
let op_atual = ""
let fatorial;

varredura()
function varredura() {
    for (let i = 0; i <= 9; i++) {
        let el_value = document.querySelector('#x' + [i])
        el_value.addEventListener('click', () => {
            el_atual = tela.innerHTML += [i]
        })
    }
}

function igual() {
    valor_anter.innerHTML = ""
    switch (op_atual) {
        case 'soma':
            el_atual = Number(el_anter) + Number(el_atual)
            el_anter = el_atual
            tela.innerHTML = el_atual
            break
        case 'subt':
            el_atual = Number(el_anter) - Number(el_atual)
            el_anter = el_atual
            tela.innerHTML = el_atual
            break
        case 'mult':
            el_atual = Number(el_anter) * Number(el_atual)
            el_anter = el_atual
            tela.innerHTML = el_atual
            break
        case 'divi':
            el_atual = Number(el_anter) / Number(el_atual)
            el_anter = el_atual
            tela.innerHTML = el_atual
            break
        case 'pote':
            el_atual = Number(el_anter) ** Number(el_atual)
            el_anter = el_atual
            tela.innerHTML = el_atual
            break
        case 'raiz':
            el_atual = Number(el_anter) ** (1 / (Number(el_atual)))
            el_anter = el_atual
            tela.innerHTML = el_atual
            break
        case 'sqre':
            el_atual = Number(el_atual) ** (1 / 2)
            tela.innerHTML = el_atual
            break
        case 'rest':
            el_atual = Number(el_anter) % Number(el_atual)
            el_anter = el_atual
            tela.innerHTML = el_atual
    }
}
function c() {
    el_atual = ''
    el_anter = ''
    op_atual = ""
    tela.innerHTML = ""
    valor_anter.innerHTML = ""
}
function ce() {
    el_atual = ''
    tela.innerHTML = ""
}

function soma() {
    el_anter = el_atual
    el_atual = ''
    tela.innerHTML = el_atual
    valor_anter.innerHTML = `${el_anter} +`
    op_atual = 'soma'
}
function subt() {
    el_anter = el_atual
    el_atual = ''
    tela.innerHTML = el_atual
    valor_anter.innerHTML = `${el_anter} -`
    op_atual = 'subt'
}
function mult() {
    el_anter = el_atual
    el_atual = ''
    tela.innerHTML = el_atual
    valor_anter.innerHTML = `${el_anter} x`
    op_atual = 'mult'
}
function divi() {
    el_anter = el_atual
    el_atual = ''
    tela.innerHTML = el_atual
    valor_anter.innerHTML = `${el_anter} /`
    op_atual = 'divi'
}
function rest() {
    el_anter = el_atual
    el_atual = ''
    tela.innerHTML = el_atual
    valor_anter.innerHTML = `${el_anter} %`
    op_atual = 'rest'
}
function pote() {
    el_anter = el_atual
    el_atual = ''
    tela.innerHTML = el_atual
    valor_anter.innerHTML = `${el_anter} ^`
    op_atual = 'pote'
}
function raiz() {
    el_anter = el_atual
    el_atual = ''
    tela.innerHTML = el_atual
    valor_anter.innerHTML = `${el_anter} V*`
    op_atual = 'raiz'
}
function sqre() {
    valor_anter.innerHTML = 'Raiz Quadrada de '
    op_atual = 'sqre'
}
function fato() {
    fatorial = 1
    for (let c = el_atual; c > 1; c--) {
        fatorial *= c
    }
    el_atual = fatorial
    tela.innerHTML = el_atual
}