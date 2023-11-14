const form = document.getElementById('formulario');
const cmpoA = document.getElementById('n1');
const cmpoB = document.getElementById('n2');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const msgSucesso = `Campos preenchidos corretamente! O número ${cmpoA.value} é menor que o número ${cmpoB.value}. `

    if (parseFloat(cmpoA.value) < parseFloat(cmpoB.value)) {
        const containerMensagemSucesso = document.getElementById('sucesso-mensagem');
        containerMensagemSucesso.innerHTML = msgSucesso;
        containerMensagemSucesso.style.display = 'block';
        cmpoA.value = '';
        cmpoB.value = '';

    } else {
        n2.style.border = '1px solid red';
        document.getElementById('erro-mensagem').style.display = 'block';
    }
})


/*Logica para atualizar os valores dos campos, e remover msg de valido ou invalido */
n1,n2.addEventListener('keyup', function (e) {
    console.log(e.target.value)

    const containerMensagemSucesso = document.getElementById('sucesso-mensagem');
    containerMensagemSucesso.style.display = 'none';
    document.getElementById('erro-mensagem').style.display = 'none';

    
});








