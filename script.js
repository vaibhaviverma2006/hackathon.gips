const questions = [
    // Spanish Questions
    {
        question: "What is 'hello' in *Spanish*?",
        options: ['Hola', 'Bonjour', 'Ciao', 'Hallo'],
        answer: 0,
        points: 10
    },
    {
        question: "What is 'thank you' in *Spanish*?",
        options: ['Gracias', 'Danke', 'Merci', 'Gracias'],
        answer: 0,
        points: 10
    },
    {
        question: "How do you say 'Good night' in *Spanish*?",
        options: ['Buenas noches', 'Bonsoir', 'Gute Nacht', 'Buona notte'],
        answer: 0,
        points: 10
    },
    {
        question: "What is 'friend' in *Spanish*?",
        options: ['Amigo', 'Freund', 'Ami', 'Bestie'],
        answer: 0,
        points: 10
    },
    {
        question: "What is 'house' in *Spanish*?",
        options: ['Casa', 'Haus', 'Maison', 'Casa'],
        answer: 0,
        points: 10
    },

    // German Questions
    {
        question: "What is 'hello' in *German*?",
        options: ['Bonjour', 'Ciao', 'Hallo', 'Hola'],
        answer: 2,
        points: 10
    },
    {
        question: "What is 'thank you' in *German*?",
        options: ['Merci', 'Danke', 'Gracias', 'Grazie'],
        answer: 1,
        points: 10
    },
    {
        question: "How do you say 'Good morning' in *German*?",
        options: ['Guten Morgen', 'Buenos días', 'Guten Tag', 'Bonjour'],
        answer: 0,
        points: 10
    },
    {
        question: "What is 'friend' in *German*?",
        options: ['Amigo', 'Freund', 'Ami', 'Bestie'],
        answer: 1,
        points: 10
    },
    {
        question: "What is 'book' in *German*?",
        options: ['Buch', 'Livre', 'Libro', 'Buch'],
        answer: 0,
        points: 10
    },

    // Python Questions
    {
        question: "What is the correct syntax for a function in *Python*?",
        options: ['function myFunc():', 'def myFunc():', 'func myFunc()', 'create myFunc():'],
        answer: 1,
        points: 10
    },
    {
        question: "Which data type is used to store text in *Python*?",
        options: ['int', 'str', 'bool', 'float'],
        answer: 1,
        points: 10
    },
    {
        question: "How do you declare a variable in *Python*?",
        options: ['int x = 10;', 'x = 10', 'let x = 10', 'var x = 10'],
        answer: 1,
        points: 10
    },
    {
        question: "What symbol is used for comments in *Python*?",
        options: ['#', '//', '/* */', '/*'],
        answer: 0,
        points: 10
    },
    {
        question: "Which of these is a valid *Python* loop?",
        options: ['for i in range(10):', 'for i: 1 to 10', 'while i < 10:', 'both A and C'],
        answer: 3,
        points: 10
    },
    {
        question: "What function is used to get user input in *Python*?",
        options: ['input()', 'read()', 'get()', 'inputText()'],
        answer: 0,
        points: 10
    },
    {
        question: "Which *Python* module is used for mathematical functions?",
        options: ['math', 'maths', 'calc', 'scientific'],
        answer: 0,
        points: 10
    },
    {
        question: "How do you create a list in *Python*?",
        options: ['[]', '{}', '()', 'list()'],
        answer: 0,
        points: 10
    },
    {
        question: "Which of these is a valid way to write a *Python* if statement?",
        options: ['if x > 10:', 'if x > 10 then:', 'if x > 10 do:', 'if (x > 10);'],
        answer: 0,
        points: 10
    },
    {
        question: "What is the keyword used to define a class in *Python*?",
        options: ['class', 'def', 'object', 'new'],
        answer: 0,
        points: 10
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    document.getElementById('points').innerText = `Points for this question: ${question.points}`;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedIndex === correctAnswer) {
        score += questions[currentQuestionIndex].points;
        alert("Correct! Well done!");
        const nextLevel = confirm("Do you want to proceed to the next level?");
        if (nextLevel) {
            nextQuestion();
        }
    } else {
        alert("Oops! Try again.");
        nextQuestion();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').innerText = `${score} / ${questions.length * 10}`;
}

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    loadQuestion();
}

// Initialize the game
loadQuestion();