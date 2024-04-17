const dipositAmount = document.getElementById('diposit-amount');
const dipositBtn = document.getElementById('diposit-btn');
const dipositTotal = document.getElementById('diposit-total');
const balanceTotal = document.getElementById('balance-total');
const withdrowTotal = document.getElementById('withdrow-total');
const withdrowAmount = document.getElementById('withdrow-amount');
const withdrowBtn = document.getElementById('withdrow-btn');
const p = document.getElementById('message');



function dipositData() {
    const dipositAmountText = dipositAmount.value;
    const dlen = dipositAmountText.length;
   
    if (dlen > 0) {

        if (dipositAmountText > 0) {
            p.innerText = "";
            const dipositTotalText = dipositTotal.innerText;

            const dipositAmountValue = parseInt(dipositAmountText);
            const dipositTotalValue = parseInt(dipositTotalText);

            const totalDiposit = dipositAmountValue + dipositTotalValue;

            const withdrowTotalText = withdrowTotal.innerText;
            const withdrowTotalValue = parseInt(withdrowTotalText);

            const totalAmount = totalDiposit - withdrowTotalValue;
            dipositTotal.innerText = totalDiposit;
            balanceTotal.innerText = totalAmount;
        } else {
            const msg = 'Diposit Value is Negative..........';
            p.innerText = msg;
        }
        } else {

        const msg = 'Diposit Value is EMpty..........';
        p.innerText = msg;
    }  
}

 
function withdrawData() { 
    const withdrowAmountText = withdrowAmount.value;
    const withlen = withdrowAmountText.length;

    if (withlen > 0) { 
 
        if(withdrowAmountText>0){

            const balanceTotalText = balanceTotal.innerText;
             
            const balanceTotalValue = parseInt(balanceTotalText)
            if(balanceTotalValue >= withdrowAmountText){
                const withdrowTotalAmmount = withdrowTotal.innerText;
                
                const withdrowBalanceTotal  = parseInt(withdrowAmountText)+ parseInt(withdrowTotalAmmount);

                withdrowTotal.innerText = withdrowBalanceTotal;  
                const dipositTotalText = dipositTotal.innerText;
         const dipositTotalValue = parseInt(dipositTotalText);

                const withdrowAmountValue = parseInt(withdrowAmountText);
               
        
                const totalDiposit = dipositTotalValue - withdrowBalanceTotal;
        
                balanceTotal.innerText = totalDiposit;
                // const withdrowTotalText = withdrowTotal.innerText;
                // const withdrowTotalValue = parseInt(withdrowTotalText);
        
                // const totalAmount = totalDiposit - withdrowTotalValue;
                // withdrowAmount.innerText = totalDiposit;
                // balanceTotal.innerText = totalAmount;
            }else{ 
                const msg = 'large ammount not allowed';
                p.innerText = msg;
                 
            }
       
    }else{
        const msg = 'Withdraw Value is Negative..........';
        p.innerText = msg;
    }
}else{
    const msg = 'Withdraw Value is EMpty..........';
    p.innerText = msg;
}




    // if (totalAmount < 0) {

    //     // console.log()
    //     window.alert();
    // } else {
    //     // document.write();
    // }

    //  console.log(totalAmount);
    //  if(totalAmount>=0){
    //     console.log(totalAmount);  
    //  }else{ console.log(invlid);}

}

// Refresh Data Show 
function balanceData() {
    const dipositTotalValue = dipositTotal.innerText;
    const withdrawTotalValue = withdrowTotal.innerText;
    const totalBalance = dipositTotalValue - withdrawTotalValue;

    balanceTotal.innerText = totalBalance;
}
balanceData();

 

dipositBtn.addEventListener('click', function () {
    dipositData();
});

withdrowBtn.addEventListener('click', function () {
    withdrawData();
});


















