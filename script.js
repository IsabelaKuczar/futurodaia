const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual das áreas abaixo tem maior potencial de ser transformada pela IA nos próximos 10 anos?",
        alternativas: [
            { texto: "Agricultura tradicional somente", correta: false },
            { texto: "Diagnóstico médico e automação de trabalho", correta: true }
        ]
    },
    {
        enunciado: "Qual é um dos maiores desafios éticos relacionados ao uso crescente da IA?",
        alternativas: [
            { texto: "Viés algorítmico e discriminação automatizada", correta: true },
            { texto: "Substituir todos os professores por IA", correta: false }
        ]
    },
    {
        enunciado: "O que se entende por “IA Generativa”, tendência forte para o futuro da tecnologia?",
        alternativas: [
            { texto: "Uma IA que cria novos conteúdos como textos, imagens e músicas", correta: true },
            { texto: "Uma IA que apenas corrige erros humanos", correta: false }
        ]
    },
    {
        enunciado: "Qual é uma possível consequência econômica da automação por IA?",
        alternativas: [
            { texto: "Redução da necessidade de energia elétrica", correta: false },
            { texto: "Desemprego em setores com tarefas repetitivas", correta: true }
        ]
    },
    {
        enunciado: "Como os governos podem se preparar para o avanço da IA?",
        alternativas: [
            { texto: "Criando regulamentações e investindo em educação digital", correta: true },
            { texto: "Substituindo todos os servidores públicos por robôs", correta: false }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(alternativa) {
    if (alternativa.correta) {
        pontuacao++;
        alert("✅ Resposta correta!");
    } else {
        alert("❌ Resposta errada!");
    }

    atual++;
    if (atual < perguntas.length) {
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado final";
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
