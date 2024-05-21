const fibonacci = function(num)
{
    let number = Number(num);
    
    if(number===0) return 0; else if(number<0) return "OOPS"
        

    let fibonacciSequence = [1,1,2,3,5,8];
    if(number < fibonacciSequence.length)
        {
            return fibonacciSequence[number-1];
        }
    else 
    {
        for(let i=4;i<number;i++)
            {
                fibonacciSequence.push(fibonacciSequence[i]+fibonacciSequence[i+1]);
            }
        return fibonacciSequence[number-1];    
    }        


};


// Do not edit below this line
module.exports = fibonacci;
