function square(number){
    console.log('value of the number parameter', number);
    const borgo=number*number;
    // console.log("square of the given number is:", borgo)
    return borgo

}

let ans=square(4)
console.log("square of the given number is:", ans)

function add(num1,num2){
    const sum=num1+num2;
    console.log(sum);
}
add(5,16)


function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}

addAll(3, 4, 6, 7);
addAll(3, 4, 6, 7, 8);