//carrossel de imagens
let imagemAtual = 0
const imagens = document.querySelectorAll(".imagens img")
const indicador = document.querySelectorAll(".Indicador")
let voltar = document.querySelector(".VoltarImg")
let proximo = document.querySelector(".AvancarImg")

function mostrarImagem(index) {
    if (imagens.length > 0) {
        imagens.forEach((Imagem, i) => {
            Imagem.classList.remove("Ativo")//remove a classe "Ativo" colocada sobre a imagem ativa
            indicador[i].classList.remove("Ativo")//remove a classe "Ativo" colocada sobre o indicador ativo
            if (i === index) {
                Imagem.classList.add("Ativo")//adiciona a classe "Ativo" na imagem atual
                indicador[i].classList.add("Ativo")//adiciona a classe "Ativo" no indicador atual
            }
        })
    }
    //desativar o botão de voltar quando tiver na primeira imagem
    if (index === 0) {
        voltar.disabled = true;
    } else {
        voltar.disabled = false;
    }
    //desativar o botão de avançar imagem quando estiver na ultima imagem
    if (index === imagens.length - 1) {
        proximo.disabled = true;
    } else {
        proximo.disabled = false;
    }
}

function proximaImagem() {
    imagemAtual = (imagemAtual + 1) % imagens.length //adicionar +1 na variavel das imagens para avançar no carrossel
    mostrarImagem(imagemAtual)//ligar a função mostrarImagem para mostrar a imagem
}

function voltarImagem() {
    imagemAtual = (imagemAtual - 1) % imagens.length //subitrair -1 na variavel das imagens para voltar no carrossel
    mostrarImagem(imagemAtual)
}

mostrarImagem(imagemAtual)

//quiz

const botoes = document.querySelectorAll('.botao')

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Itera sobre todos os botões
        botoes.forEach(b => {
            const imagem = b.querySelector('img')
            // Remove a classe 'selecionado' e restaura a imagem original
            b.classList.remove('selecionado')
            imagem.src = "/img/check.svg"
        })

        // Adiciona a classe 'selecionado' ao botão clicado
        botao.classList.add('selecionado')
        
        // Altera a imagem do botão clicado
        const imagemSelecionada = botao.querySelector('img')
        imagemSelecionada.src = "/img/Botao_marcado.svg"
    })
})

document.querySelectorAll('.botao').forEach(botao => {
    botao.addEventListener('click', () => {
        // Remover a classe "correta" de todos os botões
        document.querySelectorAll('.botao').forEach(b => b.classList.remove('correta'))

        // Marcar o botão selecionado
        botao.classList.add('correta')

        // Verificar se o botão selecionado é a opção correta
        if (botao.dataset.correta === 'true') {
            // Ativar o botão de finalizar
            const finalizar = document.getElementById('Finalizar');
            finalizar.classList.remove('desativado')
            finalizar.classList.add('ativado')
            document.getElementById('statusImg').src = "/img/Seta.svg"
        }
    })
})