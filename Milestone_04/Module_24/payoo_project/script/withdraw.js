document.getElementById('withdraw-btn').addEventListener('click',function(){
    // console.log('Withdarw ');
    // 01 get Agent Number And verify..............
    const agent_Number = document.getElementById('agent_Num').value; 
    console.log(agent_Number);
    // 02 get Withdraw Amount And verify...........
    const withdraw_Amount = document.getElementById('withdraw_Amount').value; 
    console.log(withdraw_Amount);
    // 03 get the Current Balance ...........
    const current_Balance = document.getElementById('balance').innerText; 
    console.log(current_Balance);
    // 04 get Pin Number And verify...........
    const withdraw_Pin = document.getElementById('withdraw_Pin').value; 
    console.log(withdraw_Pin);
});