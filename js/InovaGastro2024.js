
const perguntas = [
    {
        pergunta: "Qual foi o formato do doce desenvolvido no Inova Gastro 2024? ",
        opcoes: [
            { texto: "Abacaxi", correta: false },
            { texto: "Banana ", correta: true },
            { texto: "Maçã", correta: false }
        ]
    },
    {
        pergunta: "Qual era o objetivo principal de criar doces em formas diferentes, como frutas? ",
        opcoes: [
            { texto: "Aumentar a durabilidade dos doces", correta: false },
            { texto: "Aumentar a experiência dos usuários ao consumir ", correta: true },
            { texto: "Facilitar a produção em massa", correta: false }
        ]
    },
    {
        pergunta: "Qual foi o tipo de molde utilizado no desenvolvimento do doce em forma de banana? ",
        opcoes: [
            { texto: "Molde de silicone", correta: true },
            { texto: "Moldagem a vácuo ", correta: false },
            { texto: "Molde de cerâmica", correta: false }
        ]
    },
    {
        pergunta: "Qual era o foco do evento Inova Gastro 2024?  ",
        opcoes: [
            { texto: "Inovações em confeitaria e experiência do consumidor ", correta: true },
            { texto: " Novas técnicas de panificação", correta: false },
            { texto: " Tecnologias de culinária sustentável", correta: false }
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
        paginaPremio()
    }
})

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
    }
}

function paginaPremio() {
    const paginas = ["/html/premio1.html", "/html/premio2.html"]
    const paginaEscolhida = paginas[Math.floor(Math.random() * paginas.length)]
    window.location.href = paginaEscolhida
}

function voltarPagina() {
    window.location.href = "/html/DoceForma.html"
}