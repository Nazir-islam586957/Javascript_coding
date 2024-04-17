
let countMatch= 0;
function createMatch() {
    countMatch++;
    const allMatch = document.getElementById('all-match');
    const div = document.createElement('div');

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
        <button>Reset</button>
    </div> 
    `;

    div.innerHTML = data;
    div.classList.add('match');
    allMatch.appendChild(div);
}

createMatch();




const addNewMatch = document.getElementById('add-new-match');
addNewMatch.addEventListener('click', function(){
    createMatch(); 
})