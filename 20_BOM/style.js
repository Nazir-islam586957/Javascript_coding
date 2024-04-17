// const winHeight = window.innerHeight;
// const winWidth = window.innerWidth;
// document.write("Height="+winHeight);
// document.write(",  width="+ winWidth);

function changPage(){
    window.open('https://www.w3schools.com')
}


// let s = window.location.href
// document.write(s)

///.........................
// function showAlert(){
//     window.alert('hi')
// }
 
// let ch = window.confirm("Are You Sure");
// if(ch==true){
//   document.getElementsByTagName('body') [0].style.backgroundColor='red'
// }else{
 
// }

//.................

function showAlert2(){
let valueName = window.prompt("Enter Your Name","Name")
if(valueName==null || valueName ==""){

    document.write(valueName)
}else{
document.write("Welcome To =",valueName);
}
}
