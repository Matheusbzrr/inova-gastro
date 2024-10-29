const usuariosCadastrados = {
    'user@example.com': 'Usuário Exemplo'
};

document.getElementById('loginButton').addEventListener('click', function () {
    const emailInput = document.getElementById('email').value
    const messageElement = document.getElementById('message')

    if (usuariosCadastrados[emailInput]) {
        const nome = usuariosCadastrados[emailInput]
        messageElement.textContent = `Bem-vindo, ${nome}!`
        messageElement.style.color = 'green'
    } else {
        messageElement.textContent = 'Email não cadastrado.'
        messageElement.style.color = 'red'
    }

    messageElement.style.display = 'block'
})