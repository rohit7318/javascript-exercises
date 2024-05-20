// const removeFromArray = function(array, ...argumentsArray) {
// // [1,2,3,4,5] , 1 ,2
//     let newArray = [];
//     array.forEach((elem)=>
//     {
//         if(!argumentsArray.includes(elem))
//             {
//                 newArray.push(elem);
//             }
//     })
      
//     return newArray;
// };

const removeFromArray = function(array , ...args)
{
    /*
    looping through the array, and returning  it's element , which are not present in a
    args array;
    */
    // return array.filter((element)=>{return !args.includes(element)});
    return array.filter(function(element){
        return !args.includes(element);
    })

}





// Do not edit below this line
module.exports = removeFromArray;
