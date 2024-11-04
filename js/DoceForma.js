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
const perguntas = [
    {
        pergunta: "Nova pergunta exemplo 1",
        opcoes: [
            { texto: "Opção 1", correta: false },
            { texto: "Opção 2", correta: true },
            { texto: "Opção 3", correta: false }
        ]
    },
    {
        pergunta: "Nova pergunta exemplo 2",
        opcoes: [
            { texto: "Opção A", correta: false },
            { texto: "Opção B", correta: true },
            { texto: "Opção C", correta: false }
        ]
    },
    {
        pergunta: "Nova pergunta exemplo 3",
        opcoes: [
            { texto: "Opção X", correta: true },
            { texto: "Opção Y", correta: false },
            { texto: "Opção Z", correta: false }
        ]
    }
]

let perguntaAtual
let ultimaPerguntaIndex = -1
let erros = 0

function mostrarPopup() {
    window.location.href = "/html/Reiniciar.html"
}

function carregarPerguntaAleatoria() {
    let indiceAleatorio

    do {
        indiceAleatorio = Math.floor(Math.random() * perguntas.length)
    } while (indiceAleatorio === ultimaPerguntaIndex)

    ultimaPerguntaIndex = indiceAleatorio
    perguntaAtual = perguntas[indiceAleatorio]

    embaralharArray(perguntaAtual.opcoes)

    document.querySelector(".pergunta p").textContent = perguntaAtual.pergunta
    const botoes = document.querySelectorAll('.botao')

    botoes.forEach((botao, index) => {
        botao.querySelector("p").textContent = perguntaAtual.opcoes[index].texto
        botao.dataset.correta = perguntaAtual.opcoes[index].correta
        botao.classList.remove('correta', 'selecionado')
        botao.querySelector('img').src = "/img/check.svg"
    })

    const finalizar = document.getElementById('Finalizar')
    finalizar.classList.add('desativado')
    finalizar.classList.remove('ativado')
    document.getElementById('statusImg').src = "/img/Bloqueado.svg"
}

carregarPerguntaAleatoria()

const botoes = document.querySelectorAll('.botao')
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if (erros >= 3) {
            mostrarPopup()
            return
        }

        botoes.forEach(b => {
            b.classList.remove('selecionado')
            b.querySelector('img').src = "/img/check.svg"
        })

        botao.classList.add('selecionado')
        botao.querySelector('img').src = "/img/Botao_marcado.svg"

        if (botao.dataset.correta === 'true') {
            const finalizar = document.getElementById('Finalizar')
            finalizar.classList.remove('desativado')
            finalizar.classList.add('ativado')
            document.getElementById('statusImg').src = "/img/Vector.png"
            erros = 0
        } else {
            erros++
            if (erros >= 3) {
                mostrarPopup()
            } else {
                carregarPerguntaAleatoria()
            }
        }
    })
})

document.getElementById('Finalizar').addEventListener('click', () => {
    const finalizar = document.getElementById('Finalizar')
    if (finalizar.classList.contains('ativado')) {
        paginaPremio1()
    }
})

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
    }
}

function paginaPremio1() {
    window.location.href = "/html/InovaGastro2024.html"
}

function voltarPagina() {
    window.location.href = "/html/InovaGastro2023.html"
}