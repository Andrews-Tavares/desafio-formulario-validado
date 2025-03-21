const inputText = document.querySelectorAll('.formulario');
const btnEnviar = document.getElementById('enviar');
let campoObrigatorio = document.querySelectorAll('.campo-obrigatorio');

btnEnviar.addEventListener('click', (envio) => {
 envio.preventDefault();
});

inputText.forEach((input, mensagem) => {
    btnEnviar.addEventListener('click', () => {
        if (input.value !== "") {
            input.classList.add('valido');
            campoObrigatorio[mensagem].classList.remove('mensagem-visivel');
        } else {
            input.classList.remove('valido');
            input.classList.add('invalido');
            campoObrigatorio[mensagem].classList.add('mensagem-visivel');
        }

    })
})
