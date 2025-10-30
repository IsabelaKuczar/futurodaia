const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:
         "Qual das áreas abaixo tem maior potencial de ser transformada pela IA nos próximos 10 anos?",
         alternativas: [
            "Agricultura tradicional somente",
            "Diagnóstico médico e automação de trabalho"
         ]
    },
    {
        enunciado: "Qual é um dos maiores desafios éticos relacionados ao uso crescente da IA?",
        alternativas: [
            "Viés algorítmico e discriminação automatizada",
            "Substituir todos os professores por IA",
        ]
    },
     {
        enunciado: "O que se entende por “IA Generativa”, tendência forte para o futuro da tecnologia?",
     alternativas: [
        "Uma IA que cria novos conteúdos como textos, imagens e músicas",
        "Uma IA que apenas corrige erros humanos"
     ]
    },
{
    enunciado: "Qual é uma possível consequência econômica da automação por IA?",
    alternativas: [
        "Redução da necessidade de energia elétrica",
        "Desemprego em setores com tarefas repetitivas"
    ]
},
{
    enunciado: "Como os governos podem se preparar para o avanço da IA?",
    alternativas: [
        "Criando regulamentações e investindo em educação digital",
        "Substituindo todos os servidores públicos por robôs"
    ]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal ="";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas =document.createElement("button");
        botaoAlternativas.textContent = alternativa;
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

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
