const calcy=()=>{
  let wd=parseInt(document.getElementById('wd').value);
  let maths=parseInt(document.getElementById('maths').value);
  let comp=parseInt(document.getElementById('comp').value);
  let phy=parseInt(document.getElementById('phy').value);
let grade="";

let totalGrades=wd+maths+comp+phy;


  let perc=(totalGrades/400)*100;

if(perc <=100 && perc >=80){
  grade='A';
}else if(perc <=79 && perc >=60){
  grade='B';
}else if(perc <=59 && perc >=40){
  grade='C';
}else{
  grade='F';
}
if(perc>=40){
  document.getElementById('showdata').innerHTML=` Out of 400 your total is ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grade}.<br> You are PASS.`
}
else{
    document.getElementById('showdata').innerHTML=` Out of 400 your total is ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grade}.<br> You are FAIL.`
}


}
