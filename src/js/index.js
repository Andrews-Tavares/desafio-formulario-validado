const inputText = document.querySelectorAll('.formulario');
const btnEnviar = document.getElementById('enviar');

btnEnviar.addEventListener('click', (envio) => {
 envio.preventDefault();
});

inputText.forEach((input) => {
    btnEnviar.addEventListener('click', () => {
        if (input.value !== "") {
            input.classList.add('valido');
            input.nextElementSibling.classList.remove('mensagem-visivel');
        } else {
            input.classList.remove('valido');
            input.classList.add('invalido');
            input.nextElementSibling.classList.add('mensagem-visivel');
        }

    })
})
