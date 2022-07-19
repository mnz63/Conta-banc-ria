const create = document.getElementById("new");
const nome = document.getElementById("firstname");
const sobrenome = document.getElementById("lastname");
const user = document.getElementById("user");
const saldo = document.getElementById("saldo");
const hora = document.getElementById("time");
const log = document.getElementById("log");
const valorDeposito = document.getElementById("deposit");
const valorSaque = document.getElementById("saque");
const deposito = document.getElementById("depositar");
const saque = document.getElementById("sacar");
const container = document.getElementById("container");
const form = document.getElementById("form")
const erroForm = document.getElementById("erro");



function criaConta(){

    let usuario = nome.value +" "+  sobrenome.value
    user.innerHTML = `<span style="color: rgb(94, 39, 139)">Olá, </span>${usuario}`
    console.log(usuario)
    
}

create.addEventListener("click", () =>{
    criaConta()

    if(!nome.value|| !sobrenome.value){
        erroForm.innerHTML = "Por favor preencha o campo vazio"
        return console.log("o campo está vazio")
    }
    form.style.display = "none"
    container.style.display = "flex"
})

    
deposito.addEventListener("click", () =>{
    conta.depositar(parseInt(valorDeposito.value))
    log.innerHTML += `Você depositou ${valorDeposito.value} reais! <br>`
    saldo.innerHTML = `<span style="color: rgb(94, 39, 139)">Saldo: </span>${conta._saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`  
})

saque.addEventListener("click", () =>{
    conta.sacar(parseInt(valorSaque.value))
    if(!valorSaque.value){
        log.innerHTML += `Por favor digite um valor! <br>`
        return
    } else if(parseInt(valorSaque.value) > conta._saldo){
        log.innerHTML += `Saldo insuficiente! Operação negada.<br>`
        return
    }
    log.innerHTML += `Você sacou ${parseInt(valorSaque.value)} reais! <br>`
    saldo.innerHTML = `<span style="color: rgb(94, 39, 139)">Saldo: </span>${conta._saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`  
})
