let random=Math.floor(Math.random()*100);
let score=100;
let btnhandel=()=>{
    let num=document.getElementById('num').value ;
    if(random==num){
        document.getElementById('result').innerHTML=`<b>Congratulations ❗✅ , You gussed the number , the actual no is ${random}`
        document.getElementById('score').innerHTML=`<h3>Your score is <b>${score}</b> 😍 out of 100</h3> `
        document.getElementById('alert').innerHTML=`You take ${(100-score)+1} attempts`
    }
    else if(random<num){
        score-=1;
        
        document.getElementById('alert').innerHTML=`The number you have entered is <b>BIGGER </b> than the actual ❌ ,try again`
    }
    else if(random>num){
        score-=1;
        
        document.getElementById('alert').innerHTML=`The number you entered is <b>SMALLER</b> than the actual number ❌ ,try again`
    }

}