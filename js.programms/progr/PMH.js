function isprime(num){
    if(num <=1)return false;
    if(num === 2)return true;
    for(let i=2;i<=(num);i++){
        if(num %i===0)return false;

    }
    return true;
}
const number =10;
if(isprime(number)){
    console.log(number+"is a prime number.");
}
