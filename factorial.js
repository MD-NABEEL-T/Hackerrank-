function factorial(n){
    let i;
    if(n===1)
    {
        return 1 ;
    }
    else{
        return n*factorial(n-1);
    }
}
n=5;
result = factorial(n);
console.log(result);