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
            { texto: "Opção 2", correta: true }
        ]
    },
    {
        pergunta: "Nova pergunta exemplo 2",
        opcoes: [
            { texto: "Opção A", correta: false },
            { texto: "Opção B", correta: true }
        ]
    },
    {
        pergunta: "Nova pergunta exemplo 3",
        opcoes: [
            { texto: "Opção X", correta: true },
            { texto: "Opção Y", correta: false }
        ]
    }
]

let perguntaAtual
let ultimaPerguntaIndex = -1 // Armazena o índice da última pergunta

function carregarPerguntaAleatoria() {
    let indiceAleatorio

    do {
        indiceAleatorio = Math.floor(Math.random() * perguntas.length);
    } while (indiceAleatorio === ultimaPerguntaIndex) // Gera um novo índice se for igual à última

    ultimaPerguntaIndex = indiceAleatorio; // Atualiza a última pergunta
    perguntaAtual = perguntas[indiceAleatorio]

    document.querySelector(".pergunta p").textContent = perguntaAtual.pergunta
    const botoes = document.querySelectorAll('.botao')

    botoes.forEach((botao, index) => {
        botao.querySelector("p").textContent = perguntaAtual.opcoes[index].texto
        botao.dataset.correta = perguntaAtual.opcoes[index].correta
        botao.classList.remove('correta', 'selecionado')
        botao.querySelector('img').src = "/InovaGastro/img/check.svg"
    });

    const finalizar = document.getElementById('Finalizar')
    finalizar.classList.add('desativado')
    finalizar.classList.remove('ativado')
    document.getElementById('statusImg').src = "/InovaGastro/img/Bloqueado.svg"
}

carregarPerguntaAleatoria()

const botoes = document.querySelectorAll('.botao')
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        botoes.forEach(b => {
            b.classList.remove('selecionado')
            b.querySelector('img').src = "/InovaGastro/img/check.svg"
        });

        botao.classList.add('selecionado');
        botao.querySelector('img').src = "/InovaGastro/img/Botao_marcado.svg";

        botoes.forEach(b => b.classList.remove('correta'));
        botao.classList.add('correta')

        if (botao.dataset.correta === 'true') {
            const finalizar = document.getElementById('Finalizar');
            finalizar.classList.remove('desativado')
            finalizar.classList.add('ativado')
            document.getElementById('statusImg').src = "/InovaGastro/img/Seta.svg";
        } else {
            carregarPerguntaAleatoria()
        }
    })
})

document.getElementById('Finalizar').addEventListener('click', () => {
    const finalizar = document.getElementById('Finalizar')
    if (finalizar.classList.contains('ativado')) {
        paginaPremio1()
    }
})

function paginaPremio1() {
    window.location.href = "/InovaGastro/html/premio1.html";
}
