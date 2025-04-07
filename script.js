
let isDarkMode = false;

function toggleMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const vivaQuestions = document.getElementById('viva-questions');
    const modeButton = document.querySelector('.mode-toggle');

    if (isDarkMode) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeButton.innerText = '🌕';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeButton.innerText = '🌙';
    }
}

// Add sample questions here dynamically
const vivaQuestions = [
    { lesson: "C Programming", question: "What is C language?", answer: "C is a general-purpose, procedural programming language." },
    { lesson: "C Programming", question: "What is a variable?", answer: "A variable is a name given to memory space to store data." },
    { lesson: "C Programming", question: "What is a function?", answer: "A function is a block of code that performs a specific task." },
    // More questions can be added here dynamically...
];

function loadQuestions() {
    const vivaQuestionsContainer = document.getElementById('viva-questions');
    vivaQuestions.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<h3>${q.question}</h3><p><strong>Answer:</strong> ${q.answer}</p>`;
        vivaQuestionsContainer.appendChild(questionDiv);
    });
}

loadQuestions();
