const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Com a inchente,muitas pessoas ficaram desalojadas. Todas as vítimas foram ajudadas?",
        alternativas: [
            {
                texto: "Isso é maravilhoso",
                afirmacao: "Desde o início,houve apoio ao Rio Grande do Sul. "
            },
            {
                texto: "Isso é assustador!",
                afirmacao: "Muitas pessoas perderam seus familiares e amigos."
            }
        ]
    },
    {
        enunciado: "Quanto aos animais.O que aconteceu?"
        alternativas: [
            {
                texto: "Não sucedeu o resgate dos animais",
                afirmacao: "Não foi possível resgatá-los, devido à falta de espaço no transporte."
            },
            {
                texto: "Os animais foram resgatados",
                afirmacao: "Foi possível realizar o resgate dos animais.Entretando, alguns faleceram afogados ."
            }
        ]
    },
    {
        enunciado: "Foi necessário muitas contribuições",
        alternativas: [
            {
                texto: "Quanto ao número de doações.",
                afirmacao: "Foi doado, por meio da Campanha do Estado, 11,7 toneladas ."

            },
            {
                texto: "Quanto ao núumero de doações",
                afirmacao: "Foi doado, por meio da Campanha do Estado, 13,2 toneladas ."
            }
        ]
    },
    {
        enunciado: "Qual fato levou à inundãção, no Rio Grande do Sul?",
        alternativas: [
            {
                texto: "O que causou a enchente.",
                afirmacao: "A enchente foi reflexo da queda da barragem do Rio Grande do Sul."
            },
            {
                texto: "O que causou a enchente",
                afirmacao: "A enchente foi reflexo do alto volume de chuva, que caiu na bacia do Guaíba"
            }
        ]
    },
    {
        enunciado: " Quanto ao dia do início das inundações",
        alternativas: [
            {
                texto: "O começo das enchentes.",
                afirmacao: "27 de maio de 2024."
            },
            {
                texto: "O começo das enchentes.",
                afirmacao: "29 de abril de 2024. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
    }
    
    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }
    
    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }
    
    function mostraResultado() {
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
    }
    
    mostraPergunta();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
