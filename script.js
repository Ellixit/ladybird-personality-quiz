const questions = [
{ question: "What is your favorite color?", options: [
    { text: "Red", score: "Alice" },
    { text: "Yellow", score: "Bob" },
    { text: "Green", score: "Carol" },
    { text: "Blue", score: "Dave" }
    ]
},
{ question: "Which season do you prefer?", options: [
    { text: "Summer", score: "Alice" },
    { text: "Spring", score: "Bob" },
    { text: "Autumn", score: "Carol" },
    { text: "Winter", score: "Dave" }
    ]
},
{ question: "What's your favorite animal?", options: [
    { text: "Dog", score: "Alice" },
    { text: "Cat", score: "Bob" },
    { text: "Cow", score: "Carol" },
    { text: "Horse", score: "Dave" }
    ]
},
// Add more questions here
];

let currentQuestion = 0;
const scores = { Alice: 0, Bob: 0, Carol: 0, Dave: 0 };

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    q.options.forEach((option) => {
        const btn = document.createElement("button");
        btn.classList.add("option-button")
        btn.innerText = option.text;
        btn.onclick = () => {
            handleAnswer(option.score);
            btn.blur();
        }
        btn.style.display = "block";
        btn.style.marginBottom = "10px";
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(scoreName) {
    scores[scoreName]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.style.display = "none";

    const highest = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b);
    const name = highest[0];

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
        <div>
            <img src="resources/${name}-image.png" alt="${name}" class="result-image">
        </div>
        <h3>You are most like ${name}!</h3>
        <p>You are very stinky!</p>
    `;

    const retryButton = document.getElementById("retry-button");
    retryButton.style.display = "block";
}

window.onload = () => {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("start-button").onclick = () => {
        document.getElementById("start-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        showQuestion();
    };
};