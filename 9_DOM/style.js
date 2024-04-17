// const t=document.getElementById('title');
// console.log(t);

// const desc=document.getElementById('decripton')
// console.log(desc);

// const headingtt =document.getElementsByClassName('heading-title');
// console.log(headingtt);

// for (const singleheading of headingtt) {
//     console.log(singleheading);   
// }

//..............tag............  
// const h1 =document.getElementsByTagName('h1');
//  console.log(h1);

//  for (const h of h1) {
//     console.log(h);
//  }

//...............end..........

// const p=document.querySelectorAll('#decripton');
// console.log(p);




const welcometitle=document.getElementById('title');
console.log(welcometitle);

welcometitle.style.backgroundColor='orange';
welcometitle.style.color='white';
welcometitle.style.padding='10px'
welcometitle.style.marginLeft='10px'
 


const pbody=document.getElementsByClassName('p-body');

for (const decripton of pbody) {
    console.log('decripton');
    decripton.style.backgroundColor='green'
    decripton.style.color=' white'
    decripton.style.padding=' 20px'

}