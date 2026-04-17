let frutas = ["banana","maçã"]
function cadastrar(){
    
    let frutasCadastrar = document.querySelector(`#fruta`).value
    
    frutas.push(frutasCadastrar)
    
    let show = document.querySelector(`#mostrar`)


let numeroFrutas = document.querySelector(`#quantidade`).value




show.innerText =""
    frutas.forEach((fruta,i)=>{
        console.log(fruta)
        show.innerHTML += `${fruta} ${numeroFrutas}`
    })
    // show.innerText = `${frutas}`

    

}



// function mostrar(){
//     let elementoP = document.createElement('p')
//     elementoP.textContent = document.querySelector('#fruta').value
//     document.querySelector('body').appendChild(elementoP)


// }