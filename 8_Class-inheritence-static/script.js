//class er kaj..........
class myclass{
constructor(){
    console.log("Hello Wold!");
}
displayData(){
    console.log("Display data");
}
}
// const mm=new myclass();
// mm.displayData();
//..................................


//inheritence er kaj....
class nazir extends myclass{
    constructor(){
        super();
        console.log("Welcome to UTC");
    }
  
 displayData2(){
    console.log("Display data....1"); 
 }   
}

const mm=new nazir();
mm.displayData();
mm.displayData2();