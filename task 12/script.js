let number=153;
let sumfirst= (number*(number+1))/2;
console.log('Sum of first N numbers is', sumfirst);

console.log("The table of ", number, 'is');
for(let i=1;i<=12;i++){
    let product=i*number;
    console.log(product);
}

let isPrime = true;
if (number <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i <= number/2; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if(isPrime==true){
    console.log(`The number entered is a prime number`);
}
else{
    console.log(`The number entered is not a prime number`);
}

let factors = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        factors=i;
        console.log("The factors are ", factors);
    }
}


var remainder, sumOfDigits = 0;
while(number>0)
{
    remainder = number % 10;
    sumOfDigits = sumOfDigits + remainder;
    number = Math.floor(number/10);
}
console.log('The sum of the digits are ',sumOfDigits);

let sum = 0;
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
}
if (sum == number) {
    console.log(`The number is an Armstrong number`);
}
else {
    console.log('The number is not an Armstrong number.');
}