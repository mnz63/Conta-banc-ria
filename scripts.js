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
const form = document.getElementById("form");
const erroForm = document.getElementById("erro");

function criaConta() {
    let usuario = nome.value + " " + sobrenome.value;
    user.innerHTML = `<span style="color: rgb(94, 39, 139)">Olá, </span>${usuario}`;
    console.log(usuario);
}

function atualizaHora(){
    const time = new Date
    hora.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
    window.requestAnimationFrame(atualizaHora)
}


create.addEventListener("click", () => {
    criaConta();

    if (!nome.value || !sobrenome.value) {
        erroForm.innerHTML = "Por favor preencha o campo vazio";
        return console.log("o campo está vazio");
    }
    form.style.display = "none";
    container.style.display = "flex";
});

deposito.addEventListener("click", () => {
    if (!valorDeposito.value) {
        log.innerHTML += "Por favor digite um valor! <br>";
        return;
    }

    conta.depositar(parseInt(valorDeposito.value));
    log.innerHTML += `Você depositou ${valorDeposito.value} reais! <br>`;
    saldo.innerHTML = `${conta._saldo.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    })}`;
});

saque.addEventListener("click", () => {
    if (!valorSaque.value) {
        log.innerHTML += `Por favor digite um valor! <br>`;
        return;
    } else if (valorSaque.value > conta._saldo) {
        log.innerHTML += `Saldo insuficiente! Operação negada.<br>`;
        return;
    }

    conta.sacar(parseInt(valorSaque.value));
    log.innerHTML += `Você sacou ${parseInt(valorSaque.value)} reais! <br>`;
    saldo.innerHTML = `${conta._saldo.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    })}`;
});

atualizaHora()