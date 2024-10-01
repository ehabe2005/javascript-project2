//exercise 1
function reversestring(exercise1){
    let reverse= "";
    for (let i= exercise1.length-1;i>=0;i--){
        reverse+=exercise1[i];
    }
    return reverse;
    }
    console.log(reversestring("hello"))
    
    
    
    //exercise 2
    function Countcharacters(exercise2){
    let count=0;
    for(let i=0;i<exercise2.length;i++){
        
       count++
    }
    return count
    }
    console.log(Countcharacters("hello"));
    

    //exercise 3
function capitalize(word){
    if (word.length === 0){
        return word;
    } 
     return word[0].toUpperCase()+ word.slice(1);
}
console.log(capitalize("hello"));

    
    //exercise 4
    function find(numbers){
    var max=0;
    var min=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>max){
        max=numbers[i];
        
        }
        if(numbers[i]<min){
            min=numbers[i]
        }
    }
    return {min, max};
    
    }
    console.log(find([-2,1,2,3,4,5,6,7,8,9,]));
    
    
    //exercise 5
    function sumofarray (numbers2){
    let sum=0;
    for(let i=0;i<numbers2.length;i++){
        sum+=numbers2[i];
    }
    return sum
    }
    console.log(sumofarray([-2,1,2,3,4,5,6,7,8,9]));
    
    //exercise 6
    
    function filter (arr){
        if(arr>0){
            return true
        }
        else{
            return false
        }
        return filter
    }
    console.log (filter(100));

    
    //exercise 7
    function factorial(number3){
        
    let result=1;
    for(let i=1;i<=number3;i++){
       result*=i;
    }
       return result
    }
    console.log(factorial(4));

    
    //exercise 8
function prime(numbers4) {
    if (numbers4 <= 1) return false; 

    for (let i = 2; i < numbers4; i++) {
        if (numbers4 % i === 0) {
            return false; 
        }
    }
    return true;
}

console.log(prime(5)); 
   
            
            //exercise 9
           
            function fibonacci(fib) {
                if (fib <= 0) return 0; 
                if (fib === 1) return 1; 
            
                let a = 0; 
                let b = 1; 
            
                for (let i = 0; i < fib; i++) {
                    let calc = a + b; 
                    a = b; 
                    b = calc; 
                }
            
                return b; 
            }
            
            console.log(fibonacci(7)); 