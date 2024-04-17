const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const scoreEl = document.getElementById('score');

incrementEl.addEventListener('keypress', function (event) {

    if (event.keyCode === 13) {
        const incrementValue = parseInt(incrementEl.value);
        const scoreValue = parseInt(scoreEl.innerText); 
        const totalScore = incrementValue + scoreValue;
        scoreEl.innerText = totalScore;
        incrementEl.value = '';
    }
});

decrementEl.addEventListener('keypress', function (event) {

    if (event.keyCode === 13) {
        const decrementValue = parseInt(decrementEl.value);
        const scoreValue = parseInt(scoreEl.innerText);
        const totalScore = scoreValue - decrementValue;

        if (totalScore < 0) {
            scoreEl.innerText = 0;
        } else {
            scoreEl.innerText = totalScore;
        }
        decrementEl.value = '';
    }
})

if (click === 0) {
    totalClicks.innerText = 0;
}

 