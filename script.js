let currentQuestion = 0;
const scores = {};
for (const id in characterMap) {
  scores[characterMap[id]] = 0;
}


function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    q.options.forEach((option) => {
        const btn = document.createElement("button");
        btn.classList.add("option-button")
        btn.innerText = option.text;
        btn.onclick = () => handleAnswer(option.score);
        btn.style.display = "block";
        btn.style.marginBottom = "10px";
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(scoreIds) {
    scoreIds.forEach(id => {
        const name = characterMap[id];
        if (name) {
        scores[name]++;
        }
    });

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
    const explanation = descriptions[name]

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
        <div>
            <img src="resources/${name}.jpg" alt="${name}" class="result-image">
        </div>
        <h3>You are most like ${name}!</h3>
        <p>${explanation}</p>
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