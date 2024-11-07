
const perguntas = [
    {
        pergunta: `Qual foi a sugestão do professor André no REC'n'Play 2023 para o projeto "Doce Forma"? `,
        opcoes: [
            { texto: "Fazer uma exposição internacional ", correta: false },
            { texto: "Entrar no edital de incubação da i.de.i.a.S ", correta: true },
            { texto: "Desenvolver mais sobremesas", correta: false }
        ]
    },
    {
        pergunta: `Em que evento o projeto "Doce Forma" foi apresentado inicialmente?`,
        opcoes: [
            { texto: "SENAC Experience", correta: false },
            { texto: "REC'n'Play 2023", correta: true },
            { texto: "Campus Party", correta: false }
        ]
    },
    {
        pergunta: "Qual foi uma das aulas mais importantes mencionadas pelo criador do projeto? ",
        opcoes: [
            { texto: "Aula sobre contesto jurídico", correta: true },
            { texto: "Aula sobre design de produto ", correta: false },
            { texto: "Aula de marketing digital", correta: false }
        ]
    },
    {
        pergunta: "Qual professor foi mencionado como um grande apoio para o criador do projeto?  ",
        opcoes: [
            { texto: "Professor André ", correta: true },
            { texto: "Professor Robison Lustosa  ", correta: false },
            { texto: "rofessor Cristianne Boulitreau", correta: false }
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