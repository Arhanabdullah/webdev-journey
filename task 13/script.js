let arr= [1,2,5,8,63,4,6,3,73,6,9,98];
console.log("The array is", arr);

arr.sort(function(a, b){return a-b});
console.log("The maximum number of the array is ", arr[arr.length-1]);
var sum=0;
for(let i= 0; i<arr.length;i++){
    sum+=arr[i];
}
console.log("The sum of all elements: ", sum);
count=0;
for(let i= 0; i<arr.length;i++){
    if(arr[i]%2==0){
        count++;
    }
}
console.log("Odd numbers are", count);
