alert('testando')
function login() {
    const usuario = document.querySelector('usuario');
    const chave = document.querySelector('senha');
}

function detalhesdom(msg) {
    const clique = document.querySelector('#detalhes')
    clique.innerHTML = ''
    const texto = document.createElement('p')
    texto.style.textDecoration = 'none';
    texto.style.cursor = 'Default';
    texto.innerHTML = msg;
    texto.innerHTML = `<h3>Titulo: </h3> <p> Game Domina</p>`
    texto.innerHTML += `<h3>Data: </h3> <p> 16/07/2020</p>`
    clique.appendChild(texto)
}

function validacaovideo() {
    const selectdomina = document.querySelector('#domina');
    const selectmoon = document.querySelector('#moon');
    const selectslain = document.querySelector('#slain')
    
    if (selectdomina) {
        let msg = '<p>Hello world!</p>'
        console.log(msg)
        return msg;
    } else if (selectmoon) {
        const msg = {
            nome: `Moon Hunters`,
            data: `26/02/2021`
        };
        console.log(msg)
        return msg;
    } else if (selectslain) {
        const msg = {
            nome: `Slain: Back of the hell`,
            data: `17/09/2020`
        };
        console.log(msg)
        return msg;
    }
}
const domina = document.addEventListener('click', detalhesdom)
const selecaovideo = document.addEventListener('click', validacaovideo)