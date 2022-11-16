// // Quick Question #1
// // What does the following code return?
// // new Set([1,1,2,2,3,4]):

{1,2,3,4}


// // Quick Question #2
// // What does the following code return?
// // [...new Set("referee")].join("")

'ref'


// // Quick Questions #3
// // What does the Map m look like after running the following code?
// // Done on Google Chrome*
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

{Array(3) => true, Array(3) => false}

// hasDuplicate

// // Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (array) => {
    if(new Set(array).size == array.length){
        return false
    } else{return true}
}

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function vowelCount(string){
    const vowels = "aeiou";
    const result = {};
    for(const letter of string)
      if(vowels.includes(letter))
        result[letter] = (result[letter] || 0) + 1;
    return result;
 }



