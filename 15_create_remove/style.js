const u=document.getElementById('ul');
const lastChild= u.lastElementChild;
const lastChildText = lastChild.innerText;
let lastChildValue = parseInt(lastChildText);
 

function addItem(){
    const l = document.createElement('li');
    lastChildValue++;
    l.innerText = lastChildValue;
    u.appendChild(l);
}

//.........first er dik thake remove korar jonno
function removeFirstItem(){
u.removeChild(u.firstElementChild);
}
//.........last er dik thake remove korar jonno

function removeLastItem(){
   const ch = u.childElementCount;
   if(ch>=0){
    u.removeChild(u.lastElementChild);
   }   
    
    }