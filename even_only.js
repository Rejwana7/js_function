/**
 * create function that will return only the even numbers
 * return the sum of even numbers
*/

function evenNumbersOnly(numbers){
    let evens=[];
    for(const number of numbers){
        if(number%2 === 0){
            console.log(number)
            evens.unshift(number)
        }
    }
    return evens

}


const numbers = [5, 8, 91, 24, 6];
 const evens = evenNumbersOnly(numbers);
 console.log('even numbers are', evens)

function sumOfEvenNumbers(numbers){
    let sum=0;
   for(const number of numbers){
   
    if(number%2 === 0){
        console.log(number)
        sum=sum+number;

    }
   }
   return sum;
}

// const num = [5, 8, 91, 24, 6];
//  const sum = sumOfEvenNumbers(num);
//  console.log('sum numbers are', sum)