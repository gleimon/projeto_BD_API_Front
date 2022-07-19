
function addToTable() {

    //Definindo as variaveis e recebendo os dados
    let name = document.querySelector('.nome').value;
    let email = document.querySelector('.nomemae').value;
    let phone = document.querySelector('.rua').value;
    let work = document.querySelector('.numero').value;
    let work1 = document.querySelector('.bairro').value;
    let table = document.getElementById("myTable");

    let tableSize = table.rows.length; //Calculando o tamanho da Tabela
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    row.id = tableSize; //Adicionando o id no elemento a ser criado

    //Criando o codigo do botão para remover a linha
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover</button>";

    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;
    cell5.innerHTML = work;
    cell6.innerHTML = work1;
    cell7.innerHTML = btnCode;

    //Retornando 'false' para impedir o reload da pagina
    return false;
}

//Função para remover uma linha
function removeToTable(id){

    let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
    row.parentNode.removeChild(row); //Removendo a linha

    //Retornando 'false' para impedir o reload da pagina
    return false;
}


const formulario = document.querySelector("form");
const Inome = document.querySelector('.nome');
const Inamemae = document.querySelector('.nomemae');
const Irua = document.querySelector('.rua');
const Inumero = document.querySelector('.numero');
const Ibairro = document.querySelector('.bairro');


function cadastrar(){
    fetch("http://localhost:8080/usuarios",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: Inome.value,
            nomemae: Inamemae.value,
            rua: Irua.value,
            numero: Inumero.value,
            bairro: Ibairro.value
        })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
};


function limpar(){
    Inome.value ="";
    Inamemae.value ="";
    Irua.value ="";
    Inumero.value ="";
    Ibairro.value ="";
}


formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();
    limpar();
});





