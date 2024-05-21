const palindromes = function (str) {

    // Solution 1:
    // let string = str.toLowerCase().split("").filter((elem)=>{
    //     return !(elem==="." || elem==="!" ||elem===" " || elem===",")
    // }).join("");

    // let reversedString = str.toLowerCase().split("").toReversed().filter((elem)=>{
    //     return !(elem==="." || elem==="!" ||elem===" " || elem===",")
    // }).join("");

    // if(string===reversedString) return true;
    // else return false;

    // Solution 2:
    // Char code for numbers(1to9) 48-57 characters(atoz) 97-122
    // let string =str.toLowerCase()
    //             .split("")
    //             .filter((char)=>
    //             {
    //                 let code = char.charCodeAt(0);
    //                 return  (code >= 48 && code <= 57) || // numbers (0-9)
    //                         (code >= 97 && code <= 122);  // lowercase letters (a-z)
    //             })
    //             .join("");

    // let reversedString = string.split("").toReversed().join("");
    // return (string === reversedString);


    // Solution 3:
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const cleanedString = str
                        .toLowerCase()
                        .split("")
                        .filter((char)=>alphanumerical.includes(char))
                        .join("");
    const reversedString = cleanedString.split("").toReversed().join("");
    return reversedString===cleanedString;
};



// Do not edit below this line
module.exports = palindromes;
