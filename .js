let currentLevel = 1;
let points = 0;
const totalLevels = 50;

// Define challenges with languages and AI tasks
const challenges = [
    { 
        question: "Translate 'Hello' to Spanish", 
        answer: "Hola", 
        language: "Spanish", 
        difficulty: "easy" 
    },
    { 
        question: "Translate 'Thank you' to German", 
        answer: "Danke", 
        language: "German", 
        difficulty: "easy" 
    },
    { 
        question: "Translate 'Good morning' to French", 
        answer: "Bonjour", 
        language: "French", 
        difficulty: "easy" 
    },
    { 
        question: "Write a Python code to sort an array", 
        answer: "arr.sort()", 
        language: "Python", 
        difficulty: "medium" 
    },
    { 
        question: "Create a JavaScript function to analyze sentiment in a sentence", 
        answer: "function analyzeSentiment(text) { return text.includes('good') ? 'positive' : 'negative'; }", 
        language: "JavaScript", 
        difficulty: "hard" 
    },
    // Add more challenges for the 50 levels
];

// Display NPC Dialogue
const npcDialogue = document.getElementById("npc-dialogue");
const challengeText = document.getElementById("challenge-text");
const userAnswer = document.getElementById("user-answer");
const submitButton = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");
const feedbackMessage = document.getElementById("feedback-message");
const nextLevelButton = document.getElementById("next-level-btn");
const pointsDisplay = document.getElementById("points");
const currentLevelDisplay = document.getElementById("current-level");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const nextLevelBtnPopup = document.getElementById("next-level-btn-popup");

function loadChallenge() {
    if (currentLevel <= totalLevels) {
        const currentChallenge = challenges[(currentLevel - 1) % challenges.length]; // Loop through challenges
        challengeText.innerText = `Level ${currentLevel}: ${currentChallenge.question}`;
        userAnswer.value = "";
        feedback.style.display = "none";
        currentLevelDisplay.innerText = currentLevel;
    } else {
        npcDialogue.innerText = "Congratulations! You've completed all 50 levels!";
        challengeText.innerText = "";
        userAnswer.style.display = "none";
        submitButton.style.display = "none";
        feedbackMessage.innerText = `Final Score: ${points}`;
    }
}

function checkAnswer() {
    const currentChallenge = challenges[(currentLevel - 1) % challenges.length]; // Loop through challenges
    const userResponse = userAnswer.value.trim();

    // Compare the user's answer
    if (userResponse.toLowerCase() === currentChallenge.answer.toLowerCase()) {
        points += 10;  // Add points for correct answer
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
        feedbackMessage.innerText = `Correct! You've earned 10 points! Your total points: ${points}`;
        feedback.style.display = "block";

        // Show pop-up appreciation message
        popupMessage.innerText = `Great job! You've completed Level ${currentLevel}!`;
        popup.style.display = "flex";
    } else {
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
        feedbackMessage.innerText = `Oops! That's not correct. Try again!`;
        feedback.style.display = "block";
    }

    pointsDisplay.innerText = points;  // Update points display
}

function nextLevel() {
    currentLevel++;
    loadChallenge();
    feedback.style.display = "none";
    popup.style.display = "none";
}

submitButton.addEventListener("click", checkAnswer);
nextLevelBtnPopup.addEventListener("click", nextLevel);

// Start the game
loadChallenge();
