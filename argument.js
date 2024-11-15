function doubleIt(number){
  const doubled = number*2;
  console.log("The double number is" ,number);
  console.log("The doubled value is:",doubled);
}
doubleIt(10);
console.log('------------------');
doubleIt(88);

function difference(num1,num2){
    let dif=num1-num2;
    console.log('number 1=',num1,'number 2=',num2,
        "the difference is=", dif
    );
}

difference(45, 20);

let fatherAge = 60;
let myAge = 20;
difference(fatherAge, myAge);
