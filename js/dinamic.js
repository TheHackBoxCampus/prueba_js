// script llenado dinamico
// script accordion

let content_buttons = [
    {name: 'Hunters', des: 'Espacio destinado al descanso y recreacion de nuestros campers y coworkers', des2: 'Sujeto a usuario'},
    {name: 'Cafeteria Hunters', des: 'Espacio de Comidas', des2: 'Sujeto a usuario'},
    {name: '8vo Piso', des: 'Zona de alimentacion', des2: 'Sujeto a usuario'},
    {name: 'Baños', des: 'Baños para el publico', des2: 'Sujeto a usuario'},
]

let modal = document.querySelector('.container-modal')
let buttons = document.querySelectorAll('button')
let buttonClose = document.querySelector('.container-modal .modal a')
let tbody = document.querySelector ('table tbody')

for(let x = 0; x < buttons.length; x++){
    buttons[x].addEventListener('click', e => {
        modal.style.display = "flex"
        let name_element = e.target.parentNode.children[0].innerHTML
        content_buttons.forEach(element => {
            if(element.name == name_element){
                let content = `
                 <tr>
                        <td>${element.name}</td>
                        <td>${element.des}</td>
                        <td>${element.des2}</td>
                  </tr>
                `
                tbody.insertAdjacentHTML('beforeend', content)
            }
        })   
    })
}

buttonClose.addEventListener('click', () => {
    modal.style.display = "none"
    tbody.innerHTML = ''
}) 