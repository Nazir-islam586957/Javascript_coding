 const numberCount = document.getElementById('number-count');
 
 function displayDAta(){
    let numberCountText = numberCount.innerText; 
    // let count = parseInt(numberCountText)
    numberCountText++;
    numberCount.innerText = numberCountText;
 }