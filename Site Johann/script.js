const questions = [
    {
        question:"Qual é o maior animal do mundo?",
        answers: [
            { id: 1, text: "Tubarão", correct:false}
            { id: 2, text: "Baleia Azul", correct:false}
            { id: 3, text: "Pedro Bi", correct:true}
            { id: 4, text: "Orca", correct:false}
        ]
    },

    {
        question:"Qual é a pessoa mais chata da sala?",
        answers: [
            { id: 1, text: "Balão", correct:false}
            { id: 2, text: "Mota", correct:true}
            { id: 3, text: "Rebeca", correct:false}
            { id: 4, text: "Johann", correct:false}
        ]
    },

    {
        question:"Qual é o maior país do mundo?",
        answers: [
            { id: 1, text: "Brasil", correct:false}
            { id: 2, text: "Argentina", correct:false}
            { id: 3, text: "China", correct:false}
            { id: 4, text: "Pedro Bi deitado", correct:true}
        ],
    },

    {
        question:"Qual o animal mais rápido do mundo?",
        answers: [
            { id: 1, text: "Rebeca atrás de macho", correct:true}
            { id: 2, text: "Baleia Azul", correct:false}
            { id: 3, text: "Guepardo", correct:false}
            { id: 4, text: "Gavião Peregrino", correct:false}
        ],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementaryById("answer-buttons")
const nextButton = document.getElementaryById("next-btn")