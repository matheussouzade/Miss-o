const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
]

let atual=0;
let perguntaAtual;
let historiaFinal="";
let pontos=0;

function mostraPergunta(){
    perguntaAtual=perguntaAtual.enunciado;
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    MostraAlternativas();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas=document.createElement("button");
        botaoAlternativas.textContent=alternativa.texto;
        botaoAlternativas.addEventListener("click",()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);    
    }
}