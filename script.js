const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
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
        "Uma IA que cria novos conteúdos como textos, imagens e músicas"
        "Uma IA que apenas corrige erros humanos"
     ]
    },
{
    enunciado: "Qual é uma possível consequência econômica da automação por IA?",
    alternativas: [
        "Redução da necessidade de energia elétrica"
        "Desemprego em setores com tarefas repetitivas"
    ]
},
{
    enunciado: "Como os governos podem se preparar para o avanço da IA?",
    alternativas: [
        "Criando regulamentações e investindo em educação digital"
        "Substituindo todos os servidores públicos por robôs"
    ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (cost alternativa of perguntaAtual.alternativas) {
        cost botaoAlternativas =document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();