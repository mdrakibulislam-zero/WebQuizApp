const quizData = [
    {
        question: "Which of the following is not JavaScript Data Types?",
        a: "Undefined",
        b: "Number",
        c: "Boolean",
        d: "Float",
        correct: "d",
    },
    {
        question: "Which company developed JavaScript?",
        a: "Netscape",
        b: "Bell Labs",
        c: "Sun Microsystems",
        d: "IBM",
        correct: "a",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<head>",
        c: "<meta>",
        d: "<style>",
        correct: "a",
    },
    {
        question: "Which of the following are advantages of JavaScript?",
        a: "Less server interaction",
        b: "Increased interactivity",
        c: "Richer interfaces",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1989",
        correct: "b",
    },
    {
        question: "Microsoft has developed a popular HTML editor called?",
        a: "Dreamweaver",
        b: "FrontPage",
        c: "HomeSite",
        d: "Macromedia",
        correct: "b",
    },
    {
        question: "JavaScript ignores?",
        a: "spaces",
        b: "tabs",
        c: "newlines",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What does javascript use instead of == and !=?",
        a: "It uses bitwise checking",
        b: "It uses === and !== instead",
        c: "It uses equals() and notequals() instead",
        d: "It uses equalto()",
        correct: "b",
    },
    {
        question: "Among the keywords below, which one is not a statement?",
        a: "if",
        b: "with",
        c: "debugger",
        d: "use strict",
        correct: "d",
    },
    {
        question: "How do we define the term Thread?",
        a: "Device that controls input",
        b: "Variable that controls movement",
        c: "Controlled execution of applications",
        d: "None of the above",
        correct: "c",
    },
    
];


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
