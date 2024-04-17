
let countMatch= 0;
function createMatch() {
    countMatch++;
    // console.log(countMatch)
    const allMatch = document.getElementById('all-match');
    const div = document.createElement('div');
    const incrementEl = document.createElement('div');
    const decrementEl = document.createElement('div');

    console.log(div);
    const data = `
    <h1>Match ${countMatch}</h1>
    <div class="flex">
        <div class="increment">
            <label for="">Increment</label>
            <input type="number" id="increment">
        </div>
        <div class="decrement">
            <label for="">Decrement</label>
            <input type="number" id="decrement">
        </div>
    
        <div class="score">
            <label for="">Score:</label>
            <span id="score"> 0</span> 
        </div>
        <button id="btn">Reset</button>
    </div> 
    `;

    div.innerHTML = data;
    div.classList.add('match');
    allMatch.appendChild(div);

    
}

createMatch();

// const increment = document.getElementById("increment");
// const btn = document.getElementById("btn");
// btn.addEventListener('click',function(){
//     var invalue = increment.value;
//     console.log(invalue);
// })

 

const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const scoreEl = document.getElementById("score");
//................+(increment) er kaj...................
incrementEl.addEventListener('keypress',function(event){
    if(event.keyCode===13){
        const incrementValue = parseInt(incrementEl.value);
        const scoreValue = parseInt(scoreEl.innerText);
        const totalScore = incrementValue + scoreValue;
        scoreEl.innerText = totalScore;
        incrementEl.value='';
    }
});
 
//................-(decrement) er kaj...................

decrementEl.addEventListener('keypress',function(event){
    if(event.keyCode===13){
        const decrementValue = parseInt(decrementEl.value);
        const scoreValue = parseInt(scoreEl.innerText);
        const totalScore = scoreValue - decrementValue ;

        if(totalScore<0){
            scoreEl.innerText =0;
        }else{
            scoreEl.innerText = totalScore;
        }
            decrementEl.value='';
   

    }
});


 

const addNewMatch = document.getElementById('add-new-match');
addNewMatch.addEventListener('click', function(){
    createMatch(); 
   
})