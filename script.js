alert('testando')
const butao = document.querySelector('#buton')

function login() {
    const interface = document.querySelector('#logon')
    const usuario = document.querySelector('#usuario').value;
    const chave = document.querySelector('#senha').value;
    
    if (usuario == 'admin' && chave == 'admin') {
        alert('sucesso')
    } else {
        let errologin = document.createElement('p')
        //errologin.setAttribute = ('id', 'loginincorreto')
        errologin.innerText = 'Usuario ou senha incorreto. Tente novamente!'
        errologin.style.marginBottom = '10px'
        errologin.style.fontSize = '17px'
        interface.appendChild(errologin)
    }
    errologin.innerHTML = '';
}
butao.addEventListener('click', login)


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
const selecaovideo = document.addEventListener('click', validacaovideo)