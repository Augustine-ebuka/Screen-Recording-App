// function that implement the sum of fibonacci series of an nth number
// fibonacci series is the sum of the last 2 numbers before a given number
// e.g 1 1 2 3 5 6...

// base case if value is 0 or 1 return 1
// else do a recursive call
//

const fibonacci = (value)=>{
    // assuming that value is positive int
    if(value <= 1){
        return 1
    }else{
        return fibonacci(value - 1) + fibonacci(value -2)
    }

}

const fib = (n)=>{

    let sequ = []
    if (n == 1 || n == 0) {
        return 0
    }else{

        let seq = [0,1]
        for (let index = 2; index < n; index++) {
            let result = seq[index-1] + seq[index-2]
            seq.push(result)
            // console.log(result);
    }
    // let resu = seq.reduce((a,b,)=>{
    //     return a+b
    // },0)
    // console.log(resu);
    let element = 0
    for (let index = 1; index < seq.length; index++) {
        element += seq[index];
        
    }
    console.log(seq);
    console.log(element);
    }
  
}
console.log(fib(9));
console.log(fibonacci(9));

// factorial 
// n! = n.(n-1).(n-2)...3.2.1

const factorial = (n)=>{
    let store = []
    let result = 1
    if(n==1 || n==0){
        return 1
    }else{
        for (let index = 1; index <= n ; index++) {
            result *= index
            
            store.push(index)
        }
        console.log(store.join(' x '))
        return result
    }
}
// console.log(factorial(4));
