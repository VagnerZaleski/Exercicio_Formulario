const form = document.getElementById('formulario');
const cmpoA = document.getElementById('n1');
const cmpoB = document.getElementById('n2');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const msgSucesso = `Campos preenchidos corretamente! O número ${cmpoA.value} é menor que o número ${cmpoB.value}. `

    if(parseFloat(cmpoA.value) < parseFloat( cmpoB.value)){
        const containerMensagemSucesso = document.getElementById('sucesso-mensagem');
        containerMensagemSucesso.innerHTML = msgSucesso;
        containerMensagemSucesso.style.display = 'block';
        cmpoA.value = '';
        cmpoB.value = '';

    }else{
        n2.style.border = '1px solid red';
        document.getElementById('erro-mensagem').style.display = 'block';
    }
})

n2.addEventListener('keyup', function(e) {
    console.log(e.target.value)

    if (parseFloat(cmpoA.value) < parseFloat( cmpoB.value)) {
        n2.classList.add('erro-mensagem')
        document.getElementById('erro-mensagem').style.display = 'block';
    } else {
        n2.classList.remove('erro-mensagem')
        document.getElementById('erro-mensagem').style.display = 'none';
    }
});







