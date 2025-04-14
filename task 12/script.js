var num=21;
console.log('The number is',num);

var i;
var sum=0;
for(i=0;i<=num;i++){
    sum+=i;
}
console.log('The sum of the numbers are ', sum);

product=1;
console.log('The table of number',num,'is');
for(i=1;i<=12;i++){
    product=i*num;
    
    console.log(product);
}

var factor=0
for(i=0;i<=num;i++){
    if(num%i==0){
        factor+=1;
    }
    
}
if(factor<=2){
console.log("The number is prime number");
}
else{
    console.log("The number is not prime number");
}

var fact=0;
console.log('The factors of', num, 'are');
for(i=1;i<=num;i++){
    if (num%i==0) {
        console.log(i); 
    }
}

var summation=0;
var rem=0;
while(num>0){
    rem=num%10;
    summation+=rem;
    
}
console.log('The summation of number is ',summation);

