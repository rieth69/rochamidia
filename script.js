const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "qual a serventia das leis?",
        alternativas: ["manter a ordem social", "para desorganizar a sociedade"],
    },
    {
        enunciado: "para que serve o imposto?",
        alternativas: ["para arrecadar dinheiro aos pobres ", "para arrecadar o dinheiro para o governo investir na sociedade"],
    },
    {
        enunciado: "para que serve a escola?",
        alternativas: ["para tirar o conhecimento das pessoas", "para deixar as pessoas sem conhecimento"],
    },
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual < perguntas.length) {
        const perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas(perguntaAtual.alternativas);
    } else {
        caixaPerguntas.textContent = '';
        caixaAlternativas.innerHTML = '';
        caixaResultado.textContent = `Você respondeu todas as perguntas! sua historia: ${historiafinal}`;
    }
}

function mostraAlternativas(alternativas) {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
    alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener('click', () => {
            respostaSelecionada(alternativa)
            
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

mostraPergunta();