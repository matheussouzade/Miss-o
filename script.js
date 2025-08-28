const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando foi que o skate foi incluído oficialmente nas Olímpidas?",
        alternativas: [
            {
                texto:"2020",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"2016",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado: "Nas Olímpiadas de Paris 2024, quem conquistou a medalha de ouro no skate park masculino?",
        alternativas: [
            {
                texto:"Keegan Palmer",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gustavo Ribeiro",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Nas Olímpiadas de Paris 2024, quem conquistou a medalha de bronze no skate street feminino?",
        alternativas: [
            {
                texto:"Yuto Horigome",
                afirmação:"Resposta errada",
                pontos:1
            },
            {
                texto:"Rayssa Leal",
                afirmação:"Resposta correta",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Selecione a alternativa correta:",
        alternativas: [
            {
                texto:"No street há 2 corridas de 45 segundos e 5 manobras individuais.",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"No street há 3 corridas de 45 segundos e 5 manobras individuais.",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Qual o valor da maior recompensa oferecida pelo comitê nas Olímpidas para os skatistas?",
        alternativas: [
            {
                texto:"350 mil reais.",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"140 mil reais.",
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
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`;  

    if (pontos === perguntas.length) {
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) {
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else {
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();