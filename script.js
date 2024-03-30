// Define an array of quiz questions for each category
const quizData = {
    sport: [
        { question: "Who won the FIFA World Cup in 2018?", options: ["France", "Brazil", "Germany", "Argentina"], answer: "France" },
        { question: "Which sport is known as 'The Sport of Kings'?", options: ["Horse Racing", "Boxing", "Tennis", "Soccer"], answer: "Horse Racing" },
        { question: "In which sport would you perform a 'slam dunk'?", options: ["Basketball", "Golf", "Cricket", "Swimming"], answer: "Basketball" },
        { question: "Which country is famous for hosting the Wimbledon tennis tournament?", options: ["United Kingdom", "France", "United States", "Australia"], answer: "United Kingdom" },
        { question: "What is the highest possible break in snooker?", options: ["147", "150", "155", "160"], answer: "147" },
        { question: "In which sport would you find the term 'hat-trick' commonly used?", options: ["Cricket", "Football", "Tennis", "Golf"], answer: "Cricket" },
        { question: "Who is often called 'The King of Clay' in the sport of tennis?", options: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Andy Murray"], answer: "Rafael Nadal" },
        { question: "Which country won the most gold medals in the 2016 Summer Olympics?", options: ["United States", "China", "Great Britain", "Russia"], answer: "United States" },
        { question: "What is the name of the stadium that hosts the annual NFL Super Bowl?", options: ["Mercedes-Benz Stadium", "Soldier Field", "Lambeau Field", "Gillette Stadium"], answer: "Mercedes-Benz Stadium" },
        { question: "Which boxer was known as 'The Greatest' and 'The People's Champion'?", options: ["Muhammad Ali", "Mike Tyson", "Floyd Mayweather Jr.", "Evander Holyfield"], answer: "Muhammad Ali" },
        { question: "What is the standard weight of an Olympic men's discus?", options: ["2 kilograms", "1 kilogram", "2.5 kilograms", "1.5 kilograms"], answer: "2 kilograms" },
        { question: "Which Formula 1 driver holds the record for the most World Drivers' Championships?", options: ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Ayrton Senna"], answer: "Lewis Hamilton" },
        { question: "What is the diameter of a basketball hoop in inches?", options: ["18 inches", "20 inches", "22 inches", "24 inches"], answer: "18 inches" },
        { question: "Who won the men's singles title at the 2021 French Open tennis tournament?", options: ["Novak Djokovic", "Rafael Nadal", "Stefanos Tsitsipas", "Alexander Zverev"], answer: "Novak Djokovic" },
        { question: "Which sport is associated with the terms 'gutter ball' and 'turkey'?", options: ["Bowling", "Golf", "Tennis", "Swimming"], answer: "Bowling" },
        { question: "Who is the most successful Olympian of all time in terms of total medals won?", options: ["Michael Phelps", "Larisa Latynina", "Paavo Nurmi", "Carl Lewis"], answer: "Michael Phelps" },
        { question: "Which country has won the most Rugby World Cup titles?", options: ["New Zealand", "South Africa", "Australia", "England"], answer: "New Zealand" },
        { question: "In which year was the first modern Olympic Games held?", options: ["1896", "1900", "1912", "1920"], answer: "1896" },
        { question: "What is the name of the horse race often referred to as 'The Run for the Roses'?", options: ["Kentucky Derby", "Belmont Stakes", "Preakness Stakes", "Breeders' Cup"], answer: "Kentucky Derby" },
        { question: "Which athlete set the current men's world record for the marathon?", options: ["Eliud Kipchoge", "Haile Gebrselassie", "Kenenisa Bekele", "Wilson Kipsang"], answer: "Eliud Kipchoge" }
    ],
    politics: [
        { question: "Who is the Prime Minister of the United Kingdom?", options: ["Boris Johnson", "Angela Merkel", "Emmanuel Macron", "Justin Trudeau"], answer: "Boris Johnson" },
        { question: "Who was the first female Prime Minister of a European country?", options: ["Margaret Thatcher", "Angela Merkel", "Theresa May", "Jacinda Ardern"], answer: "Margaret Thatcher" },
        // Add more politics questions here...
    ],
    history: [
        { question: "When did World War II end?", options: ["1945", "1939", "1941", "1950"], answer: "1945" },
        { question: "In which year did the Titanic sink?", options: ["1912", "1915", "1920", "1930"], answer: "1912" },
        // Add more history questions here...
    ],
    geography: [
        { question: "What is the capital of Canada?", options: ["Ottawa", "Toronto", "Vancouver", "Montreal"], answer: "Ottawa" },
        { question: "What is the largest continent by land area?", options: ["Asia", "Africa", "North America", "Europe"], answer: "Asia" },
        // Add more geography questions here...
    ],
    science: [
        { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O" },
        { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Mars" },
        // Add more science questions here...
    ],
    math: [
        { question: "What is the value of π (pi) to two decimal places?", options: ["3.14", "3.16", "3.12", "3.18"], answer: "3.14" },
        { question: "What is the square root of 64?", options: ["8", "6", "10", "4"], answer: "8" },
        // Add more math questions here...
    ],
    analytical: [
        { question: "What comes next in the sequence: 2, 4, 6, 8, ...?", options: ["10", "12", "14", "16"], answer: "10" },
        { question: "What is the missing number: 2, 6, 12, 20, ...?", options: ["30", "32", "36", "40"], answer: "30" },
        // Add more analytical questions here...
    ]
    // Include questions for other categories...
};

// Variable to store the correct answer for the current question
let correctAnswer = '';
// Variable to store the current category
let currentCategory = '';
// Variable to store the user's score
let userScore = 0;

// Function to start the quiz
// Function to start the quiz
function startQuiz() {
    currentCategory = document.getElementById("category").value;
    const questionContainer = document.querySelector(".question");
    const optionsContainer = document.querySelector(".options");

    // Clear previous questions and options
    questionContainer.innerHTML = "";
    optionsContainer.innerHTML = "";

    // Randomly select a question from the chosen category
    const randomIndex = Math.floor(Math.random() * quizData[currentCategory].length);
    const randomQuestion = quizData[currentCategory][randomIndex];

    // Store the correct answer for the current question
    correctAnswer = randomQuestion.answer;

    // Display the selected question
    const questionText = document.createElement("p");
    questionText.textContent = randomQuestion.question;
    questionContainer.appendChild(questionText);

    // Display options for the selected question
    randomQuestion.options.forEach(option => {
        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "answer";
        radioBtn.value = option;
        const label = document.createElement("label");
        label.textContent = option;
        optionsContainer.appendChild(radioBtn);
        optionsContainer.appendChild(label);
        optionsContainer.appendChild(document.createElement("br"));
    });
}

// Function to check the user's answer, provide feedback, and update score
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
            // Increment the user's score for correct answer
            userScore += 10; // Increment by 10 points for each correct answer
            // Proceed to the next question if the answer is correct
            startQuiz();
        } else {
            const answerFeedback = document.createElement("p");
            answerFeedback.textContent = "Incorrect. The correct answer is: " + correctAnswer;
            answerFeedback.style.color = "red";
            document.querySelector(".quiz-container").appendChild(answerFeedback);
        }
    } else {
        alert("Please select an answer.");
    }
}

// Function to display the final score
function displayFinalScore() {
    const finalScoreMessage = document.createElement("p");
    finalScoreMessage.textContent = "Congratulations! Your final score is: " + userScore;
    finalScoreMessage.style.fontWeight = "bold";
    finalScoreMessage.style.fontSize = "1.2em";
    finalScoreMessage.style.marginTop = "20px";
    document.querySelector(".quiz-container").appendChild(finalScoreMessage);
}

// Event listener for the "Start Quiz" button
document.getElementById("start-btn").addEventListener("click", startQuiz);

// Event listener for the "Submit" button
document.getElementById("submit-btn").addEventListener("click", function() {
    checkAnswer();
    // Check if all questions have been answered
    if (userScore !== 0 && userScore / 10 === quizData[currentCategory].length) {
        // Display final score if all questions have been answered
        displayFinalScore();
    }
});
