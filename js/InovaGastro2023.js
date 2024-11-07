

//quiz
const perguntas = [
    {
        pergunta: "Qual foi o laboratório que colaborou com a impressão 3D?",
        opcoes: [
            { texto: "SENAI", correta: false },
            { texto: "L.O.U.C.O", correta: true },
            { texto: "LAB3D", correta: false }
        ]
    },
    {
        pergunta: "Qual sobremesa teve o molde completamente desenvolvido e atendeu aos requisitos gustativos e de apresentação? ",
        opcoes: [
            { texto: "Bolo de Rolo", correta: false },
            { texto: "Bolo de Noiva", correta: true },
            { texto: "Cartola", correta: false }
        ]
    },
    {
        pergunta: "Qual o objetivo principal do projeto apresentado no Rec'In'Play 2023?",
        opcoes: [
            { texto: "Usar tecnologia para reinventar sobremesas tradicionais pernambucanas ", correta: true },
            { texto: "Criar novos sabores de sobremesas", correta: false },
            { texto: "Treinar alunos em técnicas de confeitaria", correta: false }
        ]
    },
    {
        pergunta: "Quais sobremesas típicas foram foco do projeto",
        opcoes: [
            {texto: " Bolo de Noiva, Bolo de Rolo e Cartola ", correta:true},
            {texto: "Cartola, Bolo de Laranja e Bolo de Rolo", correta:false},
            {texto: "Pudim, Cartola e Bolo de Milho ", correta:false},
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
    window.location.href = "/html/DoceForma.html"
}