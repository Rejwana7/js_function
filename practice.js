/* Task-1
Take four parameters. Multiply the four numbers and then return the result

*/
function multiplyNumber(a,b,c,d){
    let result=a*b*c*d;
    return result;

}
// console.log(multiplyNumber(10,20,30,40))

/*
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. 
*/

function TakeNumber(number){
   if(number%2 === 1){
    const result=number*2;
    return result;
   }
   else{
    const result=number/2;
    return result;

   }

}
// console.log(TakeNumber(6));

/*
Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

let sum=0;
let avg=0;
function make_avg(arrayNumbers){
   for(const numbers of arrayNumbers){
    sum=sum+numbers;
    // console.log(sum);
    avg=sum/arrayNumbers.length
   }
   return avg;


}

let arrayNum = make_avg([2,7,15,8])
// console.log(arrayNum)

/*
Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

let count =0;
function count_zero(binarystring){
    for(const str of binarystring){
        // console.log(str);
        if(str === '0'){
            count++;
        }
    }
    return count;

}

stringvalue = count_zero("0100100");
// console.log(stringvalue);

/*
Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

*/

function odd_even(number) {
    if (number % 2 === 0) {
      return "the number is even";
    } else {
      return "the number is odd";
    }
  }
  console.log(odd_even(205))