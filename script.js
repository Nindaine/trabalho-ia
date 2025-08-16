const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao sair da escola, você encontra uma novidade: um chat inteligente capaz de responder qualquer dúvida e até criar imagens e sons realistas. Qual a sua reação inicial?",
        alternativas: [
            {
                texto: "Acho isso inquietante...",
                afirmacao: "Sentiu um certo receio sobre os rumos dessa tecnologia."
            },
            {
                texto: "Incrível! Quero testar agora!",
                afirmacao: "Ficou animado para explorar como a IA pode facilitar sua vida."
            }
        ]
    },
    {
        enunciado: "Com a novidade, sua professora de tecnologia pede um trabalho sobre o uso da IA em sala de aula. Como você decide produzir?",
        alternativas: [
            {
                texto: "Usa um buscador com IA para encontrar conteúdos relevantes e fáceis de entender.",
                afirmacao: "Conseguiu organizar informações de forma clara com a ajuda da IA."
            },
            {
                texto: "Prefere escrever baseado em pesquisas tradicionais e experiências próprias.",
                afirmacao: "Valorizou mais seu próprio raciocínio e visão crítica sobre o tema."
            }
        ]
    },
    {
        enunciado: "Durante um debate, surge a questão: qual o impacto da IA no mercado de trabalho? Qual seu posicionamento?",
        alternativas: [
            {
                texto: "Defende que a IA abre novas oportunidades e estimula inovação.",
                afirmacao: "Tornou-se alguém que apoia o uso da IA para criar caminhos profissionais."
            },
            {
                texto: "Se preocupa com a perda de empregos e defende proteção aos trabalhadores.",
                afirmacao: "Passou a refletir sobre a ética no uso da tecnologia e sua aplicação social."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma imagem que represente sua visão sobre a IA. Qual ferramenta usaria?",
        alternativas: [
            {
                texto: "Softwares de desenho digital tradicionais.",
                afirmacao: "Compartilhou técnicas simples de criação com colegas iniciantes."
            },
            {
                texto: "Geradores de imagem por IA.",
                afirmacao: "Mostrou como a tecnologia pode acelerar processos criativos."
            }
        ]
    },
    {
        enunciado: "Seu grupo de biologia entrega um trabalho feito com ajuda de IA, mas ele ficou igual ao de outra turma. O que você faz?",
        alternativas: [
            {
                texto: "Considera que usar o texto do chat inteiro já é suficiente.",
                afirmacao: "Acabou se tornando dependente da tecnologia para todas as tarefas."
            },
            {
                texto: "Revê o conteúdo e adiciona ideias próprias para diferenciar o trabalho.",
                afirmacao: "Compreendeu que a IA deve ser usada como apoio, não como substituta total."
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => {
            historiaFinal += alternativa.afirmacao + " ";
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.textContent = "Ano 2049: eis o resultado das suas escolhas...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
