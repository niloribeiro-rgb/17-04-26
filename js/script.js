let frutas = ["banana", "maçã"]
let numeroFrutas = [3, 5]
let precoFrutas = [20, 10]

let inputFrutas
let inputNumeroFrutas
let inputPreco

const button = document.querySelector('#buttonContainer')
const frutaContainer = document.querySelector('#frutaContainer')

mostrar()

let haveinputFrutas
function atualizarInput() {
    if (haveinputFrutas == true) {
        // haveinputFrutas = true ou false para evitar bug de nao existir
        inputFrutas = document.querySelector(`#fruta`).value
    }
    console.log(inputFrutas)
    inputNumeroFrutas = document.querySelector(`#quantidade`).value
    inputPreco = document.querySelector('#preco').value
}
function cadastrar() {
    haveinputFrutas= true
    atualizarInput()
    if (inputFrutas !== "") {
        if (frutas.includes(inputFrutas) == false) {
            // .includes() verifica se é true ou false ter na arrey
            if (inputNumeroFrutas > 0) {
                numeroFrutas.push(inputNumeroFrutas)
            }
            else {
                numeroFrutas.push(0)
            }
            if (inputPreco > 0) {
                precoFrutas.push(inputPreco)
            }
            else {
                precoFrutas.push(0)
            }
            frutas.push(inputFrutas)
            // arrey.push adiciona no ultimo i
        }
        else {
            alert("fruta ja existe")
            return
        }
    }
    mostrar()
}
function remove(index) {
    frutas.splice(index, 1)
    numeroFrutas.splice(index, 1)
    precoFrutas.splice(index, 1)
    // .splice(excluir a partir do indice "index" , "1" casa)
    // pq exclue os botoes tambem
    mostrar()
}
function edit(index) {
    button.innerHTML = `<button onclick="mudar(${index})">Mudar</button>`
    button.innerHTML += `<button onclick="encerrar()">Cancelar</button>`
    // muda o botao adicionar
    frutaContainer.innerHTML = ""
}
function encerrar() {
    button.innerHTML = `<button onclick="cadastrar()">Adicionar</button>`
    frutaContainer.innerHTML = `<label for="fruta">Fruta</label>
        <input type="text" id="fruta">`
        
}
function mudar(index) {
    haveinputFrutas = false
    atualizarInput()
    if (inputNumeroFrutas !== "" || inputNumeroFrutas > 0 || (inputNumeroFrutas !== "" && inputNumeroFrutas > 0)) {
        numeroFrutas[index] = inputNumeroFrutas
    }
    // equeci do !==
    if (inputPreco !== "" || inputPreco > 0 || (inputPreco !== "" && inputPreco > 0)) {
        precoFrutas[index] = inputPreco
    }
    alert(`você mudou ${frutas[index]}`)
    console.log(numeroFrutas[index])
    console.log(precoFrutas[index])
    
    mostrar()
    encerrar()
    haveinputFrutas = true
}
function mostrar() {
    let show = document.querySelector(`#mostrar`)
    show.innerHTML = ` <tr>
            <th>Fruta</th>
            <th>Quantidade</th>
            <th>Preço Unidade</th>
            <th>Preço Total</th>
            <th>setings</th>
        </tr>`
    for (let i = 0; i < frutas.length; i++) {
        // for (let i = 0; i < inputFrutas.length; i++) { errado
        show.innerHTML += `<tr>
            <td>${frutas[i]}</td>
            <td>${numeroFrutas[i]}</td>
            <td>R$ ${precoFrutas[i]}</td>
            <td>R$ ${precoFrutas[i] * numeroFrutas[i]}</td>
            <td><div class="setingContainer"><button onclick="remove(${i})" class="remove">X</button> <button onclick="edit(${i})" class="edit">Edit</button></div></td>
        </tr>`
        // += e nao so +
        // show.innerText = inputFrutas[i] +"oi"+ inputNumeroFrutas[i] errado
    }

    // frutas.forEach((fruta, i) => {
    //     console.log(fruta)

    // show.innerHTML += `${fruta} ${numeroFrutas}` errado pq sao arreys diferentes para o forEach
    // })
}



// function mostrar(){
//     let elementoP = document.createElement('p')
//     elementoP.textContent = document.querySelector('#fruta').value
//     document.querySelector('body').appendChild(elementoP)
// }




//tarefe criar outro elementos no html para recebe a quantidade das frutas
//criar um vetor para armazenar esta quantidade
//exibir a fruta e a sua quantidade

//implementar com o valor unitário de cada produto
//criar um vertor para armezenar o valor unitário
//exibir agora o nome da fruta a quantidade e o preço total da fruta

//exibir esta informações em uma tabela

//inserir dois botões um de excluir e outro de editar
