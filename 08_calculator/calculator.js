const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) 
{
  if(array.length===0) return 0;
  if(array.length===1) return array[0];
  if(array.length===2) return array[0] + array[array.length-1];
  return array.reduce((accumalator,current)=> accumalator+current);
};

const multiply = function(array) {
  
  return array.reduce((acc,elem)=>acc*=elem
  ,1)
};

const power = function(a,b)
{
  return Math.pow(a,b);
	
};

const factorial = function(n)
{
  if(n===0) return 1;
  let product = 1;
  for(let i =n;i>0;i--)
    {
      product*=i;
    }
    return product;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
