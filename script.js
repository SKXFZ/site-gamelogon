alert('testando')
function login() {
    const usuario = document.querySelector('usuario');
    const chave = document.querySelector('senha');
}

function detalhesdom() {
    const clique = document.querySelector('#detalhes')
    clique.innerHTML = ''
    const texto = document.createElement('p')
    texto.innerHTML = `<h3>Titulo: </h3> <p> Game Domina</p>`
    texto.innerHTML += `<h3>Data: </h3> <p> 16/07/2020</p>`
    clique.appendChild(texto)
}

const domina = document.addEventListener('click', detalhesdom)