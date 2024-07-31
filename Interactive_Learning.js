let budget = 100; // Declare the budget as a global variable

function startGame() {
    const gameDiv = document.getElementById('game');
    const startButton = document.getElementById('start-game-button');
    const tryAgainButton = document.getElementById('try-again-button') || document.createElement('button');

    // Reset the budget
    budget = 100;

    gameDiv.innerHTML = `
        <p id="budget-message">You have $${budget}. Choose how to spend it:</p>
        <button onclick="spendMoney('Food', 30)">Food - $30</button>
        <button onclick="spendMoney('Entertainment', 20)">Entertainment - $20</button>
        <button onclick="spendMoney('Savings', 50)">Savings - $50</button>
        <div id="game-result"></div>
    `;

    startButton.style.display = 'none'; // Hide the Start Game button

    // Create and insert the Try Again button if it doesn't exist
    if (!tryAgainButton.id) {
        tryAgainButton.innerText = 'Try Again';
        tryAgainButton.id = 'try-again-button';
        tryAgainButton.onclick = function() {
            startButton.style.display = 'block'; // Show the Start Game button
            gameDiv.innerHTML = ''; // Clear the game content
            tryAgainButton.style.display = 'none'; // Hide the Try Again button until the game starts again
        };
        document.body.appendChild(tryAgainButton); // Append the button to the body
    }

    tryAgainButton.style.display = 'block'; // Ensure the Try Again button is visible
}

function spendMoney(category, amount) {
    const gameDiv = document.getElementById('game');
    const resultDiv = document.getElementById('game-result');
    const budgetMessage = document.getElementById('budget-message');

    if (budget >= amount) {
        budget -= amount;
        resultDiv.innerHTML = `<p>You spent $${amount} on ${category}. You have $${budget} left.</p>`;
        
        if (budget > 0) {
            budgetMessage.innerHTML = `You have $${budget}. Choose how to spend it:`;
        } else {
            budgetMessage.innerHTML = `You have $0. Game over!`;
            resultDiv.innerHTML += `<p>Game over! You have no money left.</p>`;
        }
    } else {
        resultDiv.innerHTML += `<p>You don't have enough money for ${category}.</p>`;
    }
}

function startQuiz() {
    const quizDiv = document.getElementById('quiz');
    const startButton = document.getElementById('start-quiz-button');
    const tryAgainButton = document.getElementById('quiz-try-again-button') || document.createElement('button');

    quizDiv.innerHTML = `
        <p>What is the best way to save money?</p>
        <button onclick="checkAnswer('A')">A. Save a small amount regularly</button>
        <button onclick="checkAnswer('B')">B. Spend as much as you want and save what’s left</button>
        <button onclick="checkAnswer('C')">C. Save only when you have extra money</button>
        <button onclick="checkAnswer('D')">D. Don’t save at all</button>
        <div id="quiz-result"></div>
    `;

    startButton.style.display = 'none'; // Hide the Start Quiz button

    // Create and insert the Try Again button if it doesn't exist
    if (!tryAgainButton.id) {
        tryAgainButton.innerText = 'Try Again';
        tryAgainButton.id = 'quiz-try-again-button';
        tryAgainButton.onclick = function() {
            startButton.style.display = 'block'; // Show the Start Quiz button
            quizDiv.innerHTML = ''; // Clear the quiz content
            tryAgainButton.style.display = 'none'; // Hide the Try Again button until the quiz starts again
        };
        document.body.appendChild(tryAgainButton); // Append the button to the body
    }

    tryAgainButton.style.display = 'block'; // Ensure the Try Again button is visible
}

function checkAnswer(answer) {
    const resultDiv = document.getElementById('quiz-result');
    if (answer === 'A') {
        resultDiv.innerHTML = `<p>Correct! Regular saving is a good habit.</p>`;
    } else {
        resultDiv.innerHTML = `<p>Incorrect. It's better to save regularly.</p>`;
    }
}