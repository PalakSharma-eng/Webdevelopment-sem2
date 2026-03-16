function calculateResult(){
    let n = document.getElementById("subject").value;
    let total = 0;
    for(let i=1;i<=n;i++){
        let marks = parseFloat(prompt("Enter marks for subjects"+1));
        total=total+marks;
    }
    let average = total/n;
    let grade;
    let result;
    if (average >= 90){
        grade ="A+";
    }
    else if (average >= 70){
        grade ="A";
    }
    else if (average >= 50){
        grade ="B";
    }
    else if (average >= 40){
        grade="C";
    }
    else {
        grade="D";
    }
    if(average>=40){
        result="Pass";
    }
    else{
        result="Fail";

    }
    document.getElementById("result").innerHTML="total="+total+"<br>"+"average="+average+"<br>"+"grade="+grade
}