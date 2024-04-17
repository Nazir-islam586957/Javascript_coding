// ................peramiter........

// function displayData(){
//     console.log("Welcome to UTC")
// }
// function addnum(){
//     const n1=20;
//     const n2=80;
//     const add = n1+n2;
//     console.log("Add result = "+add)
//    }
//  addnum();
// displayData();

// function addNumber(n1,n2){
//     const r=n1+n2;
//     console.log(r)
// }
// addNumber(52,23);

//  ...........return type..........

// function displayData(){

//     return 5+5;
// }
// const returnData = displayData();
// console.log(returnData)



// ..........secend to minute convert.........

// function secendtominute(secend){
//   const m= secend /60;
//   return m; 
// }
// const s =240;
// const minute = secendtominute(s);
// console.log(minute+" minute")




const laptopprice =40000;
const mouseprice =600;
const penDriveprice =1000;
const keyboardprice =700;

function vaivaienter( lQuantity,mQuantity, pQuantity, kQuantity){
    const laptopTotalprice = lQuantity * laptopprice;
    const mouseTotalprice = mQuantity * mouseprice;
    const pendriveTotalprice = pQuantity * penDriveprice;
    const keyboardTotalprice = kQuantity * keyboardprice;

   const Totalprice = laptopTotalprice + mouseTotalprice + pendriveTotalprice + keyboardTotalprice;
   console.log("Total Price ="+ Totalprice)
}
vaivaienter(1,2,4,2);  //ahkane holo koyta product nilam tar hisab.....



function  minutetohour(minute){
  const h= minute /36000;
  return h; 
}
const m =180000;
const minute = minutetohour(m);
console.log(minute+" hour")



