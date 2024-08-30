let arr=[2,4,6,8,9,7,10,12,14];
var newArr=[];
for(i=0; i < arr.length;i++){
    if(arr[i]>10){
        newArr.push(arr[i]);
    }
}
console.log(newArr);
arr.push(20);
console.log(arr);
