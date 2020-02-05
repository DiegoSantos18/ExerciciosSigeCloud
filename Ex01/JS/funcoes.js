var linha = window.document.getElementById("add")
var lista = []
var num = window.document.getElementById("num")
var btnAdd = window.document.getElementById("btnAdd")
var btnOrdenar = window.document.getElementById("btnOrdenar")
btnAdd.addEventListener('click', adicionar)
btnOrdenar.addEventListener('click', ordenar)

function adicionar(){
    if(num.value != ""){
        linha.innerHTML += `<tr><td class="valores">${num.value}</td></tr>`
        lista.push(num.value)
    }
}

function crescente(a,b){
    return a - b
}

function ordenar(){
    if(lista != null){
        var ordenado = lista.sort(crescente)
        for(var i = 0;i < ordenado.length;i++){
            window.document.getElementsByClassName("valores")[i].innerText = `${ordenado[i]}`
        }
    }
}