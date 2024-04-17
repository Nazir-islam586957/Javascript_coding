// const btnshow= document.getElementsByClassName('Show-btn');
// // for (const singlebtn of btnshow) {
// //     const singlebtnText = singlebtn.innerText 
// //   console.log(singlebtn.innerText);  
// // }

//   for (const singlebtn of btnshow) {
//     //  const singlebtnText = singlebtn.innerText 
//     singlebtn.innerText="Hello"
//   }


function displayData(){
 const inputname= document.getElementById('input-name');
 const inputpass= document.getElementById('input-pass');

const inputnameValue=inputname.value;
const inputpassValue=inputpass.value;
// console.log(inputnameValue+"\n"+inputpassValue);

const myData = document.getElementById('my-data');
myData.innerText= "Name="+inputnameValue+"\nPassword="+inputpassValue
}


