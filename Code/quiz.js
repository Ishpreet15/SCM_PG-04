// Function to retrieve the score from sessionStorage
function getScore() {
    var score = sessionStorage.getItem('score');
    return score ? parseInt(score) : 0;
}

// Function to update the score in sessionStorage
function updateScore(score) {
    sessionStorage.setItem('score', score);
}

// Function to initialize the score on page load
function initScore() {
    var scoreElement = document.getElementById('score');
    scoreElement.textContent = getScore();
}

document.addEventListener('DOMContentLoaded', function() {
    initScore();

    // Event listener for Check Answer button
    document.getElementById('check-answer-button').addEventListener('click', function() {
        var selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            var selectedValue = selectedOption.value;
            var correctOption = 'a'; // Assuming 'a' is the correct answer
            if (selectedValue === correctOption) {
                var currentScore = getScore();
                var newScore = currentScore + 10;
                updateScore(newScore);
                document.getElementById('score').textContent = newScore;
                document.getElementById('result').textContent = 'Correct!';
            } else {
                document.getElementById('result').textContent = 'Wrong!';
            }
        } else {
            document.getElementById('result').textContent = 'Please select an option!';
        }
    });
});
