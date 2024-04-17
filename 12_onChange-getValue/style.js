const passArea1=document.getElementById('email-area1');

passArea1.addEventListener('keyup',function(){
const passArea1Value=passArea1.value;
const l=passArea1Value.length;
if(l<8){
    passArea1.style.border='2px solid red'
}else{
    passArea1.style.border='2px solid green'
}
})


const passArea2 = document.getElementById('email-area2');
passArea2.addEventListener('keyup', function(){
    const passArea1Value1=passArea1.value;
    const passArea1Value2=passArea2.value;

    const l1=passArea1Value1.length;
    const l2=passArea1Value2.length;

if(l1==l2){
if(passArea1Value1 ==passArea1Value2){
alert('Success')
}else{
    alert('Not mach your Re-Password')
}
}


})